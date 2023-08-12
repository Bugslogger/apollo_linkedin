// PeopleTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFilter, BsFilterCircle, BsList, BsPlus } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  FaDownload,
  FaEdit,
  FaFileExport,
  FaFileImport,
  FaFilter,
} from "react-icons/fa";
import { DownloadExcel } from "react-excel-export";
import FilterPopup from "./FilterPopup";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";

let filter = {};
let name = [];

const PeopleTable = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  const [selectedRows, setSelectedRows] = useState([]);
  const [activeNavItem, setActiveNavItem] = useState("total");
  const [newPeople, setNewPeople] = useState(5);
  const [savedPeople, setSavedPeople] = useState(2);
  const [isActive, setIsActive] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  const totalPages = Math.ceil(peopleData.length / rowsPerPage);

  const [popupOpen, setPopupOpen] = useState(false);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterPopup = () => {
    setPopupOpen(!popupOpen);
  };

  const handleButtonClick = () => {
    setIsActive(true);
  };

  const handleRowSelection = (rowId) => {
    console.warn("rowId", rowId);
    let selection = [...selectedRows];
    const index = selection.indexOf(rowId);
    if (index > -1) {
      selection.splice(index, 1);
    } else {
      selection.push(rowId);
    }
    setSelectedRows(selection);
  };

  const handleHeaderCheckboxClick = () => {
    if (selectedRows.length === peopleData.length) {
      setSelectedRows([]);
    } else {
      const allRowIds = peopleData.map((person) => person.companyId);
      setSelectedRows(allRowIds);
    }
  };

  const toggelSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const fetchData = async () => {
    try {
      const url = "https://alivecore360.com/api/stats/salesNavigator";
      const params = {
        handlername: "ai engineer",
        key: "15d273cc-0b8a-4460-9cd8-55fa55a3e1c1",
      };
      const response = await axios.get(url, { params });
      console.warn("RESPONSE:", response.data);
      setPeopleData(response.data.statsTimeline.salesLead);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch the data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return peopleData.slice(startIndex, endIndex);
  };

  if (peopleData.length === 0) {
    return <div>NNN00Loading...</div>;
  }
  if (loading) {
    return <div>Loading...</div>; //this
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // EMAIL STATUS FILTER
  // BELOW METHOD FIND INDEX OF ELEMENT AND REMOVE IT FROM THE ARRAY
  function removeElementFromIndex(arr, element) {
    const index = name.indexOf(element);
    if (index >= 0 && index < arr.length) {
      arr.splice(index, 1);
    }
  }

  const FilterEmailStatus = (e, searchKey) => {
    let data = [];
    const istrue = e.target;
    if (istrue) {
      if (istrue.checked) {
        name.push(istrue.id);
      } else {
        removeElementFromIndex(name, istrue.id);
      }
    }

    name.forEach((value) => {
      peopleData.filter((filtered) => {
        if (!filtered?.hasOwnProperty(searchKey)) return;
        const EmailStatus = filtered[searchKey];
        // console.log(filtered.emailStatus);
        if (EmailStatus.toLowerCase() == value.toLowerCase()) {
          data.push(filtered);
        }
      });
    });
    setFilteredData(data);
  };

  // filter search people from company
  const HandleSearchFilter = (e, searchKey) => {
    const name = e.target.value;
    if (!name) {
      if (filter.hasOwnProperty(searchKey)) {
        delete filter[searchKey];
      }
    } else {
      filter[searchKey] = name;
    }

    const x = applyMultipleFilters(peopleData, filter);
    setFilteredData(x);
  };

  function applyMultipleFilters(data, filters) {
    return data.filter((person) => {
      // Check if the person object satisfies all the filter conditions
      return Object.entries(filters).every(([key, value]) => {
        const keyvale = person[key];
        if (typeof keyvale == "undefined") return;

        return keyvale.toLowerCase().includes(value.toLowerCase());
      });
    });
  }

  // render table data
  const Tabledata = (APIData) => {
    const mappedata = APIData?.map((person) => {
      return (
        <tr
          key={person.id}
          className={
            selectedRows.includes(person.companyId) ? "bg-blue-100" : ""
          }
        >
          <td className="border px-4 py-2 mr-3">
            <Checkbox
              onChange={() => handleRowSelection(person.companyId)}
              checked={selectedRows.includes(person.companyId)}
            />
            {/* <input
              type="checkbox"
              onChange={() => handleRowSelection(person.companyId)}
              checked={selectedRows.includes(person.companyId)}
            /> */}
            <span className="ml-4 text-blue-500">
              <Link to="/lead/linkdin/people" state={{ person }}>
                {person.fullName}
              </Link>
            </span>
          </td>
          <td className="border px-4 py-2">{person.companyName}</td>
          <td className="border px-4 py-2">{person.title}</td>
          <td className="border px-4 py-2">{person.companyLocation}</td>
          <td className="border px-4 py-2">
            {person.durationInCompanyByMonth}
          </td>
          <td className="border px-4 py-2">{person.durationInRoleByMonth}</td>
          <td className="border px-4 py-2">
            {person.pastExperienceCompanyName}
          </td>
          <td className="border px-4 py-2">{person.pastExperienceDuration}</td>
        </tr>
      );
    });

    return mappedata;
  };

  return (
    <>
      <div
        className="px-4 pt-4 bg-gray-100 flex-wrap rounded 
    text-xs font-medium cursor-pointe "
      >
        <div className="mb-4 flex items-center justify-between border px-4  py-3 ">
          <div className="flex space-x-4">
            {popupOpen && (
              <FilterPopup
                handleFilterPopup={handleFilterPopup}
                popupOpen={popupOpen}
                HandleSearchFilter={HandleSearchFilter}
                FilterEmailStatus={FilterEmailStatus}
              />
            )}
            <button onClick={handleFilterPopup}>
              <div className="flex items-center">
                <BsFilter className="mr-2" />
                Filter
              </div>
            </button>
            <button
              className={`${
                activeNavItem === "total"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveNavItem("total")}
            >
              Total({peopleData.length})
            </button>
            <button
              className={`${
                activeNavItem === "new"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveNavItem("new")}
            >
              New({newPeople})
            </button>
            <button
              className={`${
                activeNavItem === "saved"
                  ? "border-b-2 border-blue-500"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveNavItem("saved")}
            >
              Saved({savedPeople})
            </button>
          </div>

          <div className="flex space-x-4">
            <button>
              <div className="flex items-center">
                <FaDownload className="mr-2" />
                Download
              </div>
            </button>
            <button>
              <div className="flex items-center">
                <FaFileImport className="mr-2" />
                Import
              </div>
            </button>
          </div>
        </div>

        <div className="mb-0 flex items-center justify-between ">
          <div className=" flex space-x-6">
            <div className="px-4 py-2">
              <Checkbox
                onChange={handleHeaderCheckboxClick}
                checked={selectedRows.length === peopleData.length}
              />
              <span className="mx-2">Selected: {selectedRows.length}</span>
            </div>

            <button
              className={`border ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "border-2 text-black bg-transparent"
              } px-2 py-2 rounded ${isActive ? "" : "disabled:opacity-50"}`}
              onClick={handleButtonClick}
              disabled={selectedRows.length === 0}
            >
              <div className="flex items-center">
                <BsPlus className="mr-2" />
                Save
              </div>
            </button>
            <button className=" border-2 bg-transparent px-2 py-2 rounded disabled:opacity-50">
              <div className="flex items-center">
                <MdEmail className="mr-2" />
                Email
              </div>
            </button>
            <button className=" border-2  bg-transparent px-2 py-2 rounded disabled:opacity-50">
              <div className="flex items-center">
                <BsList className="mr-2" />
                List
              </div>
            </button>
            <button className=" border-2  bg-transparent px-2 py-2 rounded disabled:opacity-50">
              <div className="flex items-center">
                <FaFileExport className="mr-2" />
                Export
              </div>
            </button>
            <button className=" border-2  bg-transparent px-2 py-2 rounded disabled:opacity-50">
              <div className="flex items-center">
                <FaEdit className="mr-2" />
                Edit
              </div>
            </button>
          </div>
          <div className="flex space-x-2">
            <button className=" border-2 bg-transparent px-2 py-2 rounded disabled:opacity-50">
              <div className="flex items-center">
                <FaFilter className="mr-2" />
                Relevence
              </div>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <div
            className="overflow-scroll h-[34rem] mt-3 flex-wrap rounded 
 text-xs font-medium cursor-pointer "
          >
            <table className="max-w-full min-w-[1350px] border-collapse">
              <thead>
                <tr className="bg-gray-100 basis-36">
                  {/* <th className="border  py-2 bg-skyblue text-black">Name</th> */}
                  {/* <th className="border px-4 py-2 cursor-pointer">Profile </th> */}
                  <th className="border px-4 py-2 cursor-pointer">Name</th>
                  <th className="border px-4 py-2 cursor-pointer">
                    Company Name
                  </th>
                  <th className="border px-4 py-2 cursor-pointer">Title</th>
                  <th className="border px-4 py-2 cursor-pointer">
                    Company Location
                  </th>
                  <th className="border px-4 py-2 cursor-pointer">
                    Company Duration(Months)
                  </th>
                  <th className="border px-4 py-2 cursor-pointer">
                    Role Duration(Months)
                  </th>
                  <th className="border px-4 py-2 cursor-pointer">
                    Past Company
                  </th>
                  <th className="border px-4 py-2 cursor-pointer">
                    Past Company Duration
                  </th>
                </tr>
              </thead>
              <tbody>
                {FilteredData.length > 0
                  ? Tabledata(FilteredData)
                  : Tabledata(peopleData)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleTable;

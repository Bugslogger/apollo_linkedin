import React, { useEffect, useState } from "react";
import {
  BsPerson,
  BsBuilding,
  BsFilterLeft,
  BsPersonPlus,
  BsPersonBadge,
} from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { LuSettings } from "react-icons/lu";
import {
  MdMarkEmailUnread,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdPeopleAlt,
  MdLocationPin,
} from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";
import { PeopleNavBar } from "../../components/Index";
import Select from "react-select";
import { fetchData } from "../../utils/fecth";
import axios from "axios";

const Peoples = () => {
  const [Toggle, setToggle] = useState(false);
  const [emailStatus, setemailStatus] = useState(false);
  const [PeopleData, setPeopleData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://alivecore360.com/api/stats/salesNavigator";
        const params = {
          handlername: "ai engineer",
          key: "15d273cc-0b8a-4460-9cd8-55fa55a3e1c1",
        };
        const response = await axios.get(url, { params });
        console.log("RESPONSE:", response.data.statsTimeline.salesLead);
        setPeopleData(response.data.statsTimeline.salesLead);
      } catch (error) {
        console.error("Failed to fetch the data:", error);
      }
    };
    fetchData();
  }, []);

  let filter = {};
  /**
   *
   * @param {Object} e
   * @param {String} searchKey
   * @returns
   */
  const SearchPeople = (e, searchKey) => {
    const name = e.target.value;
    if (!name) {
      if (filter.hasOwnProperty(searchKey)) {
        delete filter[searchKey];
      }
      return;
    }
    filter[searchKey] = name;

    const x = applyMultipleFilters(PeopleData, filter);
    setFilteredData(x);
    console.log("filter: ", x);
    // console.log(name, PeopleData);
    // const data = PeopleData.filter((filtered) => {
    //   const companyname = filtered[searchKey];
    //   console.log(filtered.emailStatus);
    //   return companyname.toLowerCase().includes(name.toLowerCase());
    // });
  };

  const name = [];
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
      PeopleData.filter((filtered) => {
        if (!filtered.hasOwnProperty(searchKey)) return;
        const EmailStatus = filtered[searchKey];
        // console.log(filtered.emailStatus);
        if (EmailStatus.toLowerCase() == value.toLowerCase()) {
          data.push(filtered);
        }
      });
    });

    console.log("2: ", data);
  };

  const ToggleAcccord = (Id) => {
    if (!Id || typeof Id !== "string") return;
    document.getElementById(Id).classList.toggle("hidden");
  };

  function Removeclass(Id) {
    console.log(Id);
    if (!Id || typeof Id !== "string") return;
    document.getElementById(Id).classList.remove("hidden");
  }

  function AddClass(Id) {
    if (!Id || typeof Id !== "string") return;
    document.getElementById(Id).classList.add("hidden");
  }

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



  return (
    <div className="">
      <PeopleNavBar />
      <div className="flex justify-start items-center my-4">
        <div style={{ width: "340px" }} className="p-3 rounded">
          <div
            id="accordionExample"
            className="rounded-lg overflow-hidden mb-6"
          >
            <div className="rounded-t-lg hover:text-blue-600 border-b border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <Buttoncomponent
                Icons={
                  <CiViewList
                    fontSize={"18px"}
                    className="mx-2 hover:text-blue-600 font-medium"
                  />
                }
                Name={"Lists"}
                Function={() => ToggleAcccord("collapseOne")}
              />
              <div id="collapseOne" className="!visible hidden">
                <div className="px-5 py-4">
                  <div className="flex justify-between items-center border-b">
                    <div
                      onClick={() => setToggle(!Toggle)}
                      className={`${
                        !Toggle ? "border-b border-blue-600" : ""
                      } px-5 flex cursor-pointer text-sm justify-center items-center text-blue-600 mx-2 py-2 font-medium`}
                    >
                      <BsPerson className="mx-2" />
                      <span>People</span>
                    </div>
                    <div
                      onClick={() => setToggle(!Toggle)}
                      className={`${
                        Toggle ? "border-b border-blue-600" : ""
                      } px-5 flex cursor-pointer text-sm justify-center items-center text-blue-600 mx-2 py-2 font-medium`}
                    >
                      <BsBuilding className="mx-2" />
                      <span>Company</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex text-blue-600 font-medium justify-between items-center px-1 my-2">
                      <small className="flex justify-start items-center">
                        <LuSettings className="mx-1" /> Include lists
                      </small>
                      <small className="flex justify-end items-center">
                        <BsFilterLeft className="mx-1" /> most recent
                      </small>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="select"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus-visible:ring-blue-600 focus-visible:outline-none sm:text-sm sm:leading-6"
                        placeholder="Select list"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-blue-600 text-sm mt-3 font-medium cursor-pointer flex justify-start items-center">
                      <span>Advanced Settings</span>{" "}
                      <BiSolidDownArrow
                        className="mx-1 text-blue-600"
                        fontSize={"10px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <Buttoncomponent
                Icons={<BsPersonPlus className="mx-2" />}
                Name={"Persona"}
                Function={() => ToggleAcccord("collapseTwo")}
              />

              <div
                id="collapseTwo"
                className="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingTwo"
                data-te-parent="#accordionExample"
              >
                <div className="flex justify-center px-5 py-4">
                  <div className="text-center">
                    <div className="rounded px-8 w-72 py-6 bg-gray-100">
                      <h1 className="font-medium my-1">
                        Prospect Faster with Personas
                      </h1>
                      <p className="text-sm">
                        Group different roles & seniority levels into different
                        personas to prospect faster and receive personalized
                        recommendations.
                      </p>
                      <button className="mx-auto mt-5 pointer-events-auto rounded-md flex justify-center border-[1px] items-center bg-white px-3 py-2 text-[0.8125rem] font-semibold leading-5 hover:text-blue-600 hover:border-blue-600">
                        <BsPersonPlus className="mx-2 text-blue-600 text-[18px]" />{" "}
                        Create Persona
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-b-lg border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <Buttoncomponent
                Icons={<BsPersonBadge className="mx-2" />}
                Name={"Name"}
                Function={() => ToggleAcccord("collapseThree")}
              />
              <div id="collapseThree" className="!visible hidden">
                <div className="px-5 py-4">
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => SearchPeople(e, "companyLocation")}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus-visible:ring-blue-600 focus-visible:outline-none sm:text-sm sm:leading-6"
                    placeholder="Enter Name"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-b-lg border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <Buttoncomponent
                Icons={<MdMarkEmailUnread className="mx-2" />}
                Name={"Email Status"}
                Function={() => ToggleAcccord("emailstatus")}
              />
              <div id="emailstatus" className="!visible hidden">
                <div className="px-5 py-4">
                  <small>Business Email Status</small>
                  <div className="my-4">
                    <div className="my-2">
                      <span>
                        <input
                          type="checkbox"
                          onChange={(e) => FilterEmailStatus(e, "emailStatus")}
                          id="deliverable"
                        />
                      </span>
                      <label
                        htmlFor="deliverable"
                        className="inline-flex cursor-pointer items-center rounded-md bg-green-600 px-2 py-1/1.5 text-sm font-medium text-white ring-1 ring-inset mx-2 ring-green-500/10"
                      >
                        Deliverable
                      </label>
                    </div>
                    <div className="my-2">
                      <span>
                        <input
                          type="checkbox"
                          id="risky"
                          onChange={(e) => FilterEmailStatus(e, "emailStatus")}
                        />
                      </span>
                      <label
                        htmlFor="risky"
                        className="inline-flex items-center rounded-md cursor-pointer bg-orange-600 px-2 py-1/1.5 text-sm font-medium text-white ring-1 ring-inset mx-2 ring-orange-500/10"
                      >
                        Risky
                      </label>
                    </div>
                    <div className="my-2">
                      <span>
                        <input
                          type="checkbox"
                          onChange={(e) => FilterEmailStatus(e, "emailStatus")}
                          id="unknown"
                        />
                      </span>
                      <label
                        htmlFor="unknown"
                        className="inline-flex cursor-pointer items-center rounded-md bg-black px-2 py-1/1.5 text-sm font-medium text-white ring-1 ring-inset mx-2 ring-black-500/10"
                      >
                        Unknown
                      </label>
                    </div>
                    <div className="my-2">
                      <span>
                        <input
                          type="checkbox"
                          onChange={(e) => FilterEmailStatus(e, "emailStatus")}
                          id="na"
                        />
                      </span>
                      <label
                        htmlFor="na"
                        className="inline-flex items-center rounded-md bg-grey-600 px-2 cursor-pointer py-1/1.5 text-sm font-medium text-black ring-1 ring-inset mx-2 ring-grey-500/10"
                      >
                        N\A
                      </label>
                    </div>
                  </div>
                  <div className="my-4">
                    <div
                      onClick={() => setemailStatus(!emailStatus)}
                      className="flex justify-start items-center cursor-pointer my-2"
                    >
                      <span className="text-sm">Advanced</span>
                      {!emailStatus ? (
                        <MdKeyboardArrowDown
                          className="mx-1 text-grey-600"
                          fontSize={"19px"}
                        />
                      ) : (
                        <MdKeyboardArrowUp
                          className="mx-1 text-grey-600"
                          fontSize={"19px"}
                        />
                      )}
                    </div>
                    <div className={emailStatus ? "" : "hidden"}>
                      <p className="text-sm">Confidence level (%)</p>
                      <p className="text-sm">
                        Confidence htmlFor guessed emails
                      </p>
                      <div className="flex items-center justify-start my-2">
                        <div className="hover:border-blue-600 border rounded-s px-4 cursor-pointer hover:text-blue-600 py-1">
                          70%
                        </div>
                        <div className="hover:border-blue-600 border px-3 cursor-pointer hover:text-blue-600 py-1">
                          70% - 85%
                        </div>
                        <div className="hover:border-blue-600 border rounded-e px-4 cursor-pointer hover:text-blue-600 py-1">
                          70%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-b-lg border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <Buttoncomponent
                Icons={<MdPeopleAlt className="mx-2" />}
                Name={"Employees"}
                Function={() => {
                  ToggleAcccord("employees");
                }}
              />
              <div id="employees" className="!visible hidden">
                <div className="px-5  py-4">
                  <div className="border rounded overflow-hidden border-blue-600">
                    <Buttoncomponent
                      className={"bg-grey-100"}
                      noarrow={true}
                      Icons={
                        <input
                          id="emp"
                          onChange={(e) => {
                            Removeclass("emmp");
                            AddClass("custom_filter");
                          }}
                          type="radio"
                          name="emp_filter"
                          className="mx-2 cursor-pointer"
                        />
                      }
                      Name={<label htmlFor="emp">Predefined Range</label>}
                      Function={() => {
                        ToggleAcccord("emmp");
                        document.getElementById("emp").checked = true;

                        AddClass("custom_filter");
                      }}
                    />
                    <div id="emmp" className="hidden">
                      <label
                        htmlFor="1"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="1" />
                          <label htmlFor="1">1-10</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="2"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="2" />
                          <label htmlFor="2">11-21</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="3"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="3" />
                          <label htmlFor="3">21-50</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="4"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="4" />
                          <label htmlFor="4">51-100</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="5"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="5" />
                          <label htmlFor="5">101-200</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="6"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="6" />
                          <label htmlFor="6">201-500</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="7"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="7" />
                          <label htmlFor="7">501-1000</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="8"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="8" />
                          <label htmlFor="8">1001-2000</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="9"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="9" />
                          <label htmlFor="9">2001-5000</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="10"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="10" />
                          <label htmlFor="10">5001-10000</label>
                        </div>
                        <div>0</div>
                      </label>
                      <label
                        htmlFor="11"
                        className=" cursor-pointer my-3 flex justify-between items-center px-4"
                      >
                        <div className="">
                          <input type="checkbox" className="mx-1" id="11" />
                          <label htmlFor="11">10001+</label>
                        </div>
                        <div>0</div>
                      </label>
                    </div>
                  </div>
                  <div className="border rounded my-2 overflow-hidden border-blue-600">
                    <Buttoncomponent
                      className={"bg-grey-100"}
                      noarrow={true}
                      Icons={
                        <input
                          name="emp_filter"
                          id="custom"
                          type="radio"
                          onChange={() => {
                            Removeclass("custom_filter");
                            AddClass("emmp");
                          }}
                          className="mx-2 cursor-pointer"
                        />
                      }
                      Name={<label htmlFor="custom">Custom Range</label>}
                      Function={() => {
                        ToggleAcccord("custom_filter");
                        document.getElementById("custom").checked = true;
                        AddClass("emmp");
                      }}
                    />
                    <div className="hidden" id="custom_filter">
                      <div className="flex justify-center items-center flex-row px-2 py-4">
                        <input
                          style={{ width: "100%" }}
                          className="border px-2 py-1 mx-1 rounded focus-visible:outline-none focus-visible:border-blue-600 focus-visible:ring-blue-600"
                          type="number"
                          placeholder="Min"
                        />
                        <input
                          style={{ width: "100%" }}
                          className="border  px-2 py-1 mx-1 rounded focus-visible:outline-none focus-visible:border-blue-600 focus-visible:ring-blue-600"
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="border rounded my-2 overflow-hidden border-blue-600">
                    <Buttoncomponent
                      className={"bg-grey-100"}
                      noarrow={true}
                      Icons={
                        <input
                          name="emp_filter"
                          id="unknown"
                          type="radio"
                          onChange={() => {
                            AddClass("emmp");
                            AddClass("custom_filter");
                          }}
                          className="mx-2 cursor-pointer"
                        />
                      }
                      Name={
                        <label htmlFor="unknown">
                          # of employees is unknown
                        </label>
                      }
                      Function={() => {
                        AddClass("emmp");
                        AddClass("custom_filter");
                        document.getElementById("unknown").checked = true;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-t-lg hover:text-blue-600 border-b border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <Buttoncomponent
                Icons={
                  <MdLocationPin
                    fontSize={"18px"}
                    className="mx-2 hover:text-blue-600 font-medium"
                  />
                }
                Name={"Location"}
                Function={() => ToggleAcccord("location")}
              />
              <div id="location" className="!visible hidden">
                <div className="px-5 py-4">
                  <div className="flex justify-between items-center border-b">
                    <div
                      onClick={() => setToggle(!Toggle)}
                      className={`${
                        !Toggle ? "border-b border-blue-600" : ""
                      } px-5 flex cursor-pointer text-sm justify-center items-center text-blue-600 mx-2 py-2 font-medium`}
                    >
                      <BsPerson className="mx-2" />
                      <span>Contact</span>
                    </div>
                    <div
                      onClick={() => setToggle(!Toggle)}
                      className={`${
                        Toggle ? "border-b border-blue-600" : ""
                      } px-5 flex cursor-pointer text-sm justify-center items-center text-blue-600 mx-2 py-2 font-medium`}
                    >
                      <BsBuilding className="mx-2" />
                      <span className="w-screen">Account HQ</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="border rounded my-2 border-blue-600">
                      <Buttoncomponent
                        className={"bg-grey-100"}
                        noarrow={true}
                        Icons={
                          <input
                            name="location"
                            id="location_check"
                            type="radio"
                            onClick={(e) => {
                              ToggleAcccord("location_filter");
                              // AddClass("emmp");
                              console.log("checcked");
                            }}
                            className="mx-2 cursor-pointer"
                          />
                        }
                        Name={
                          <label htmlFor="location_check">Select region</label>
                        }
                        Function={() => {
                          ToggleAcccord("location_filter");
                          document.getElementById(
                            "location_check"
                          ).checked = true;
                          // AddClass("emmp");
                        }}
                      />
                      <div className="!visible hidden" id="location_filter">
                        <div className="px-4 py-3">
                          <span className="text-xs font-medium my-2">
                            City / State / Country / ZIP
                          </span>
                          <InputDataList />
                          <div>
                            <div className="text-blue-600 text-sm mt-3 font-medium cursor-pointer flex justify-start items-center">
                              <span>Exclude locations</span>{" "}
                              <BiSolidDownArrow
                                className="mx-1 text-blue-600"
                                fontSize={"10px"}
                              />
                            </div>
                            <div></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-t-lg hover:text-blue-600 border-b border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
              <Buttoncomponent
                Icons={
                  <BsBuilding
                    fontSize={"18px"}
                    className="mx-2 hover:text-blue-600 font-medium"
                  />
                }
                Name={"Company"}
                Function={() => ToggleAcccord("company")}
              />
              <div id="company" className="!visible hidden">
                <div className="px-5 py-4">
                  <div className="mt-2">
                    <div className="border rounded my-2 border-blue-600">
                      <Buttoncomponent
                        className={"bg-grey-100"}
                        noarrow={true}
                        Icons={
                          <input
                            name="location"
                            id="location_check"
                            type="radio"
                            onClick={(e) => {
                              ToggleAcccord("company_filter");
                              // AddClass("emmp");
                              console.log("checcked");
                            }}
                            className="mx-2 cursor-pointer"
                          />
                        }
                        Name={<label htmlFor="location_check">Is any of</label>}
                        Function={() => {
                          ToggleAcccord("company_filter");
                          document.getElementById(
                            "location_check"
                          ).checked = true;
                          // AddClass("emmp");
                        }}
                      />
                      <div className="!visible hidden" id="company_filter">
                        <div className="px-4 py-3">
                          <input
                            type="text"
                            name="name"
                            onChange={(e) => SearchPeople(e, "fullName")}
                            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 focus-visible:ring-blue-600 focus-visible:outline-none sm:text-sm sm:leading-6"
                            placeholder="Enter Companies..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          style={{ width: "calc(100% - 350px)", height: "100%" }}
          className="bg-white border"
        >
          next section
        </div> */}
      </div>
    </div>
  );
};

const Buttoncomponent = ({ Icons, Name, Function, noarrow, className }) => {
  const [Toggle, setToggle] = useState(false);
  return (
    <h2 className="accordion-header mb-0" id="headingThree">
      <button
        className={`${
          Toggle ? "text-blue-600" : ""
        } group relative flex w-full items-center border-0 ${
          className ? className : "bg-white hover:text-blue-600"
        } px-5 py-4 text-left text-sm  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none`}
        type="button"
        onClick={() => {
          Function();
          setToggle(!Toggle);
        }}
      >
        {Icons}
        <span className="font-medium">{Name}</span>
        {!noarrow && (
          <span
            className={` mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`}
          >
            {!Toggle ? (
              <IoIosArrowUp fontSize={"25px"} />
            ) : (
              <IoIosArrowDown fontSize={"25px"} />
            )}
          </span>
        )}
      </button>
    </h2>
  );
};

const InputDataList = () => {
  const options = [
    { value: "us", label: "United States" },
    { value: "americas", label: "Americas" },
    { value: "india", label: "India" },
  ];
  return (
    <div className="z-30">
      <Select
        placeholder="Enter locations"
        className="my-2 z-10"
        isMulti
        options={options}
      />
    </div>
  );
};

export default Peoples;

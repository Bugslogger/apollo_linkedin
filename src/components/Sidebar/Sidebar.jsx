import React from "react";
import {
  MdOutlineElectricBolt,
} from "react-icons/md";
import { GoHome, GoSidebarExpand } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { TbLocation } from "react-icons/tb";
import { FaRotate } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
  return (
    <div
      className=" flex-initial overflow-y-scroll bg-white "
      style={{ width: "230px", height: "100%" }}
    >
      <div className="py-3 px-2">
        <div className="flex justify-between px-2 items-center">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjYwMDUgNS42NzMzM0gxNS41MzYxTDE3LjEyNTEgOC4zOTY4MkwxOC42MDA1IDUuNjczMzNaIiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNMjIuODU5MyAyMS4wNDdMMTEuOTgxMSAyLjk0OTg0TDEuMTM5MTkgMjEuMDA5MUg2Ljk0NTkzQzcuNzIwNjkgMjEuMDA5MSA4LjQ4MjgzIDIwLjgxMzUgOS4xNTY2IDIwLjQ0MjdDOS44ODQwMiAyMC4wNDE5IDEwLjQzMzEgMTkuNDYxMiAxMC44NjIzIDE4Ljc1NzRDMTEuMzY0MSAxNy45MzM4IDExLjg1MTcgMTcuMTAwNiAxMi4zNDU2IDE2LjI3MjJMMTMuNjA5NSAxNC4xNTE1TDExLjk3OTUgMTEuNDIwMUwxMS4yNTY4IDEyLjU4M0MxMC40MzMxIDEzLjk2MDYgOS42NTM2NCAxNS4zNjk2IDguNzk5OTkgMTYuNzI4MkM4LjM3MDggMTcuNDA5OSA3LjgxMDYzIDE4LjA1MzcgNi45ODM4IDE4LjIxOTRDNi44NTkxNSAxOC4yNDQ2IDYuNzMxMzQgMTguMjU3MiA2LjYwMzUzIDE4LjI2MkM2LjQzMzExIDE4LjI2ODMgNi4yNjI3IDE4LjI2NTEgNi4wOTM4NiAxOC4yNjUxTDExLjk4MTEgOC4yMzkwM0wxOS41NDA5IDIxLjA0N0gyMi44NTkzWiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="
            alt="Apollo"
          />
          <GoSidebarExpand fontSize={"20px"} />
        </div>
        <ul className="list-unstyled mt-4 ps-0">
          <li className="my-6">
            <button className="btn flex items-center rounded  w-11/12 justify-between collapsed">
              <span className="flex justify-center items-center">
                <GoHome className="mx-2" fontSize={"19px"} /> Home
              </span>{" "}
              <IoIosArrowDown className="ms-2" fontSize={"24px"} />
            </button>
            <div className="border-l hidden ms-4 ps-4 " id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Control Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Cockpit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Data health center
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="my-6">
            <button className="btn flex items-center rounded  w-11/12 justify-between collapsed">
              <span className="flex justify-center items-center font-medium">
                <BiSearch className="mx-2" fontSize={"19px"} /> Search
              </span>{" "}
              <IoIosArrowUp className="ms-2" fontSize={"24px"} />
            </button>
            <div className="border-l ms-4 ps-4 " id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal py-1 small">
                <li>
                  <a
                    href="#"
                    className="my-1 py-2 font-medium text-font-14 bg-blue-100 text-blue-600 px-3 flex text-decoration-none rounded"
                  >
                    People
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-2 font-medium text-font-14 px-3 flex text-decoration-none rounded"
                  >
                    Companies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-2 font-medium text-font-14 px-3 flex text-decoration-none rounded"
                  >
                    List
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="my-6">
            <button className="btn flex items-center rounded  w-11/12 justify-between collapsed">
              <span className="flex justify-center items-center">
                <TbLocation className="mx-2" fontSize={"19px"} /> Engage
              </span>{" "}
              <IoIosArrowDown className="ms-2" fontSize={"24px"} />
            </button>
            <div className="border-l hidden ms-4 ps-4 " id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Control Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Cockpit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Data health center
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="my-6">
            <button className="btn flex items-center rounded  w-11/12 justify-between collapsed">
              <span className="flex justify-center items-center">
                <MdOutlineElectricBolt className="mx-2" fontSize={"19px"} />{" "}
                Plays
              </span>{" "}
              <IoIosArrowDown className="ms-2" fontSize={"24px"} />
            </button>
            <div className="border-l hidden ms-4 ps-4 " id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Control Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Cockpit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Data health center
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="my-6">
            <button className="btn flex items-center rounded  w-11/12 justify-between collapsed">
              <span className="flex justify-center items-center">
                <FaRotate className="mx-2" fontSize={"19px"} /> Enrich
              </span>{" "}
              <IoIosArrowDown className="ms-2" fontSize={"24px"} />
            </button>
            <div className="border-l hidden ms-4 ps-4 " id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Control Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Cockpit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="my-1 py-1 font-medium text-font-14 link-body-emphasis flex text-decoration-none rounded"
                  >
                    Data health center
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

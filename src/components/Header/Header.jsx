import React from "react";
import "./header.css";
import { Button, SearchInput } from "../Index";
import { FiBell } from "react-icons/fi"
import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import { BsTelephone, BsQuestionCircle } from "react-icons/bs"

const Header = () => {
  return <div className="top-header flex justify-end items-center px-3 bg-white  border-b" >
    <div className="mx-4">
      <SearchInput />
    </div>
    <Button className="border  border-blue-600 hover:text-blue-600 px-3" text="Apollo Guide" endIcon={<MdOutlineKeyboardArrowDown className="ms-2" fontSize={'24px'} />} />
    <Button className="bg-blue-600 px-4 me-3 text-white cursor-pointer" text="Upgrade" />
    <BsTelephone className="icon text-font-18 mx-2 cursor-pointer" />
    <BsQuestionCircle className="icon text-font-18 mx-2 cursor-pointer" />
    <FiBell className="icon text-font-18 mx-2 cursor-pointer" />
    <IoSettingsOutline className="icon text-font-18 mx-2 cursor-pointer" />
    <div className="avatar flex mx-3 justify-center items-center cursor-pointer">
      <span className="text-font-14">SS</span>
    </div>
  </div>;
};

export default Header;

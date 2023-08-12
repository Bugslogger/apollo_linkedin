import React from 'react';
import { BiSearch } from "react-icons/bi";
import './style.css'

const index = () => {
    return (
        <div className='search-box flex justify-between items-center px-2 rounded-full border'>
            <BiSearch className='mx-2' fontSize={'18px'} />
            <input type="text" className='input border-0 text-font-14' placeholder="Search Apollo" />
        </div>
    )
}

export default index
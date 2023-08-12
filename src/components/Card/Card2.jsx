import React from "react";
import { RiOpenaiFill } from 'react-icons/ri'
import { TbPlaylistAdd } from 'react-icons/tb'
import { BsFlag, BsTelephone } from "react-icons/bs"
import { BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin, BiLinkAlt, BiDownload } from "react-icons/bi"
import { Tooltip as ReactTooltip } from "react-tooltip";

const Card2 = () => {
    return (
        <div class="card border-0 shadow p-0" style={{ width: "96%" }}>
            <div class="card-body p-0 flex-column d-flex justify-content-center align-items-center">
                <div className="py-3">
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <RiOpenaiFill fontSize={'20px'} />
                        <span className="fw-500 text-font-20 mx-2">OpenAI</span>
                        <div>
                            <BsFlag className="text-font-14 mx-2" />
                            <div className="badge-color text-font-12 fw-500">
                                N/A
                            </div>
                        </div>
                    </div>
                    <div className="d-flex w-100 justify-content-center align-items-center mt-3">
                        <div className="d-flex">
                            <div data-tooltip-id="link" className="icon-button d-flex justify-content-center align-items-center"><BiLinkAlt className="icon" fontSize="18px" /></div>
                            <div data-tooltip-id="linkedin" className="icon-button d-flex justify-content-center align-items-center"><BiLogoLinkedin className="icon" fontSize="18px" /></div>
                            <div data-tooltip-id="fb" className="icon-button d-flex justify-content-center align-items-center"><BiLogoFacebook className="icon" fontSize="18px" /></div>
                            <div data-tooltip-id="twitter" className="icon-button d-flex justify-content-center align-items-center"><BiLogoTwitter className="icon" fontSize="18px" /></div>
                            <ReactTooltip
                                className="text-font-12 px-2 py-1"
                                id="link"
                                place="top"
                                content="Organizations website link"
                            />
                            <ReactTooltip
                                className="text-font-12 px-2 py-1"
                                id="twitter"
                                place="top"
                                content="Organizations twitter link"
                            />
                            <ReactTooltip
                                className="text-font-12 px-2 py-1"
                                id="linkedin"
                                place="top"
                                content="Organizations linkedin link"
                            />
                            <ReactTooltip
                                className="text-font-12 px-2 py-1"
                                id="fb"
                                place="top"
                                content="Organizations facebook link"
                            />
                        </div>
                        <div className="line"></div>
                        <div data-tooltip-id="call" className="d-flex text-primary px-2 action-button">
                            <div className="justify-content-center align-items-center d-flex"><BsTelephone /> <span className="mx-2 fw-500 text-font-14">(4153)-235-923</span></div>
                            <ReactTooltip
                                className="text-font-12 px-2 py-1"
                                id="call"
                                place="top"
                                content="No Status"
                            />
                        </div>
                        <div className="line"></div>

                        <div className="d-flex text-primary px-2 action-button">
                            <div className="justify-content-center align-items-center d-flex"><BiDownload fontSize="19" /> <span className="fw-500 mx-2 text-font-14">Save Company</span></div>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "10px 20px" }} className=" border-top w-100 justify-content-between align-items-center d-flex">
                    <div className="text-font-14 fw-500">Not present in any list.</div>
                    <div className="action-button2 w-auto py-1 justify-content-center align-items-center d-flex">
                        <TbPlaylistAdd fontSize={'20px'} className="text-primary" /> <span className="text-primary fw-500 text-font-14">Add To List</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card2;

import React, { useState } from "react";
import user from "../../utils/user.json";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineLink,
  AiFillMail,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Person = () => {
  const [desc, setdesc] = useState(false);
  const [desc1, setdesc1] = useState(false);
  const [insights, setinsights] = useState({
    skill: true,
    jobs: false,
    school: false,
  });

  function SortArrayData(unSortedArray) {
    if (unSortedArray?.length === 0) return [];
    const sortedArray = unSortedArray.sort((x, y) => {
      return y.endorsements - x.endorsements;
    });
    return sortedArray;
  }

  return (
    <div style={{ maxWidth: "1100px" }} className="mx-auto">
      <div className="flex justify-between m-5 items-center w-24 hover:bg-gray-50 cursor-pointer px-4 py-2 rounded-md bg-white border">
        <AiOutlineArrowLeft /> <span className="mx-1">Back</span>
      </div>
      <div className="shadow-md relative py-2 px-4 bg-white my-3 w-4/5 mx-auto rounded-md">
        <div className="mb-20 rounded-md overflow-hidden">
          <img src={user.personInfo.general.backgroundUrl} alt="" />
        </div>
        <div className="flex-row  bg-white left-0 right-0 flex justify-start items-center">
          <div className="absolute top-32 bg-white rounded-e-md">
            <img
              width={"150px"}
              height={"150px"}
              className="m-3 rounded-md"
              src={user.personInfo.general.imgUrl}
              alt={user.personInfo.general.fullName}
            />
          </div>
          <div className=" px-4">
            <h2 className="font-bold text-xl mb-2">{user.fullName}</h2>
            <div className="text-gray-600 font-medium text-sm">
              {user.title} at {user.companyName}
            </div>
            <div className="text-gray-600 font-normal text-sm">
              {user.personInfo.general.location}
            </div>
            <div className="my-2">
              <span className="text-sm mx-2 font-medium text-blue-600">
                Connections {user.personInfo.general.connectionsCount}
              </span>
              {""}
              <span className="text-sm mx-2 font-medium text-blue-600">
                Subscriber {user.personInfo.general.subscribers}
              </span>
            </div>
            <div className="flex justify-start items-center mt-3">
              <AiOutlineLink
                className="text-xl mx-1 cursor-pointer hover:text-blue-600 text-gray-600"
                onClick={() =>
                  window.open(
                    user?.personInfo?.details?.websites?.startsWith("http")
                      ? user?.personInfo?.details?.websites
                      : `https://${user?.personInfo?.details?.websites}`
                  )
                }
              />
              <AiFillLinkedin
                className="text-xl mx-1 cursor-pointer hover:text-blue-600 text-gray-600"
                onClick={() =>
                  window.open(user?.personInfo?.details?.linkedinProfile)
                }
              />
              <AiOutlineTwitter
                className="text-xl mx-1 cursor-pointer hover:text-blue-600 text-gray-600"
                onClick={() =>
                  window.open(user?.personInfo?.details?.twitterProfileUrl)
                }
              />
              <AiFillMail
                className="text-xl mx-1 cursor-pointer hover:text-blue-600 text-gray-600"
                onClick={() =>
                  window.open(
                    "mailto://" + user?.personInfo?.details?.mailFromDropcontact
                  )
                }
              />
            </div>
          </div>
          <div className="border-l  h-full">
            <div className="px-3">
              <span className="font-medium">Total Experience:</span>{" "}
              {Math.floor(user.personInfo.totalMonthOfExperience)} Months
            </div>
            <div className="px-3 my-1">
              <span className="font-medium">Compnaies Worked:</span>{" "}
              {Math.floor(
                user.personInfo.totalNumberOfCompaniesWorkedByThisPerson
              )}{" "}
              Months
            </div>
            <div className="px-3">
              <span className="font-medium">Avarage Job Stay:</span>{" "}
              {Math.floor(user.personInfo.averageJobStayingByPersonInMonth)}{" "}
              Months
            </div>
          </div>
        </div>
        {user.personInfo && (
          <div className="py-4 mt-2 flex justify-between items-center  text-blue-600 px-2">
            <div>
              {SortArrayData(user?.personInfo?.skills)
                ?.slice(0, 3)
                ?.map((val) => (
                  <span className="ring-1 mx-1 px-3 bg-blue-50 text-xs rounded-full py-1">
                    {val?.name}
                  </span>
                ))}
            </div>{" "}
            <span
              onClick={() =>
                document.getElementById("knowmore").classList.toggle("hidden")
              }
              title="know more about user"
              className="cursor-pointer font-medium"
            >
              know more...
            </span>
          </div>
        )}
        <div className="!visible hidden border-t py-3 px-5" id="knowmore">
          <div className="font-bold text-lg my-3">All Skills</div>
          <div>{user.personInfo.allSkills}</div>
          <div className="my-3 py-4 flex justify-center items-center px-2 border-t">
            <div className="mx-2 py-3 w-1/2 ring-1 px-4 rounded-md columns-1">
              <div className="font-medium text-lg py-2">Past Company</div>
              <div className="text-base text-blue-600 hover:underline font-bold">
                <Link to={user?.pastExperienceCompanyUrl}>
                  {user.pastExperienceCompanyName}
                </Link>
              </div>
              <div className="text-sm">{user?.pastExperienceCompanyTitle}</div>
              <div className="text-sm">
                {user.pastExperienceDate}
                {" | "}
                <span className="text-sm">{user.pastExperienceDuration}</span>
              </div>
            </div>
            <div className="mx-2 py-3 w-1/2 ring-1 px-4 rounded-md columns-1">
              <div className="font-medium text-lg py-2">Current Company</div>
              <div className="text-base text-blue-600 hover:underline font-bold">
                <Link to={user?.companyWebsite}>{user.companyName}</Link>
              </div>
              <div className="text-sm">{user?.title}</div>
              <div className="text-sm">
                Present
                {" | "}
                <span className="text-sm">
                  {user.durationInCompanyByMonth} Months
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md py-3 px-4 bg-white my-3 w-4/5 mx-auto rounded-md">
        <h2 className="font-bold text-xl">About</h2>
        <div className="text-gray-600 my-2">
          {desc
            ? user.personInfo.general.description
            : user.personInfo.general.description.slice(0, 280)}
          ...{" "}
          <span
            className="text-sm text-blue-600 cursor-pointer font-bold"
            onClick={() => setdesc(!desc)}
          >
            {desc ? "Less" : "More"}
          </span>
        </div>
      </div>
      <div className="shadow-md py-3 px-4 bg-white my-3 w-4/5 mx-auto rounded-md">
        <h2 className="font-bold text-xl">Company</h2>
        <div className="my-2 flex justify-start items-start">
          <div className="w-2/4 text-center px-3 border-r">
            <div className="text-3xl font-bold text-slate-700">
              {user.companyName}
            </div>
            <div className="text-sm">{user.companyLocation}</div>
            <div className="flex justify-center items-center mt-3">
              <AiFillLinkedin
                className="text-2xl mx-1 cursor-pointer hover:text-blue-600 text-gray-600"
                onClick={() => window.open(user?.regularCompanyUrl)}
              />
            </div>
            <div className="flex justify-between my-3 px-2">
              <div className="text-start">
                <p className="text-normal">Industry</p>{" "}
                <p className="text-sm text-blue-700 font-medium">
                  {user.industry}
                </p>
              </div>
              <div className="text-start">
                <p className="text-Normal">Founded Year</p>{" "}
                <p className="text-sm text-blue-700 font-medium"></p>
              </div>
            </div>
          </div>
          <div className="w-2/4 border-l px-3">
            <h1 className="font-medium">Description</h1>
            <div className="my-2">
              {desc1
                ? user.titleDescription
                : user.titleDescription.slice(0, 300)}
              ...
              <span
                onClick={() => setdesc1(!desc1)}
                className="text-blue-600 cursor-pointer font-medium"
              >
                More
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-md py-3 px-4 bg-white my-3 w-4/5 mx-auto rounded-md h-80 overflow-hidden">
        <h2 className="font-bold text-xl">Insights</h2>
        <div
          className="my-2 flex justify-start items-start"
          style={{ height: "100%" }}
        >
          <div className="w-40 ">
            <div
              onClick={() => setinsights({ skill: true })}
              className={`py-2 text-base px-3  font-medium cursor-pointer border border-r-transparent ${
                insights?.skill
                  ? "text-blue-600 border-l-blue-600 border"
                  : "border-transparent"
              }`}
            >
              Skills
            </div>
            <div
              onClick={() => setinsights({ jobs: true })}
              className={`py-2 text-base px-3  font-medium cursor-pointer border border-r-transparent ${
                insights?.jobs
                  ? "text-blue-600 border-l-blue-600 border"
                  : "border-transparent"
              }`}
            >
              Jobs
            </div>
            <div
              onClick={() => setinsights({ school: true })}
              className={`py-2 text-base px-3  font-medium cursor-pointer border border-r-transparent ${
                insights?.school
                  ? "text-blue-600 border-l-blue-600 border"
                  : "border-transparent"
              }`}
            >
              Schools
            </div>
          </div>
          <div
            className="flex-1 border-l position-sticky overflow-y-scroll"
            style={{ height: "100%" }}
          >
            <div className="px-5 flex flex-col justify-start items-start">
              {insights?.skill &&
                SortArrayData(user.personInfo.skills).map((value, index) => {
                  return (
                    <div className=" my-2">
                      <div className="text-base font-medium">{value.name}</div>
                      <p className="text-xs">
                        Endorsements {value.endorsements}
                      </p>
                    </div>
                  );
                })}
              {insights?.school &&
                user.personInfo.schools.map((value, index) => {
                  return (
                    <div className=" my-2 flex justify-start items-center">
                      <div>
                        <img
                          src={value.logoUrl}
                          className="mx-2 rounded-lg"
                          width={"50px"}
                          height={"50px"}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="text-base text-blue-600 hover:underline cursor-pointer font-medium">
                          <a href={value.schoolUrl}> {value.schoolName}</a>
                        </div>
                        <p className="text-sm">Endorsements {value.degree}</p>
                        <p className="text-sm font-medium">{value.dateRange}</p>
                      </div>
                    </div>
                  );
                })}
              {insights?.jobs &&
                user.personInfo.jobs.map((value, index) => {
                  return (
                    <div className=" my-4 flex justify-start items-center">
                      <div className="mx-2">
                        <img
                          src={value.logoUrl}
                          className="mx-2 rounded-lg"
                          width={"90px"}
                          height={"90px"}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="text-lg text-blue-600 hover:underline cursor-pointer font-medium">
                          <a href={value.companyUrl}> {value.companyName}</a>
                        </div>
                        <p className="text-sm">Endorsements {value.jobTitle}</p>
                        <p className="text-sm font-medium">{value.dateRange}</p>
                        <p className="text-sm font-medium">{value.location}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;

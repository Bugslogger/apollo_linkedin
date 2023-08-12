import React from "react";
import Header from "../../components/LinkedIn/Header";
import user from "../../utils/user.json";
import data from "../../utils/table.json";
import { FixedSizeList } from "react-window";

const LinkedInSearch = () => {
  return (
    <>
      <Header />
      <div className="shadow-md py-3 px-4 relative bg-white my-3 w-4/5 mx-auto rounded-md">
        {/* card commponent */}
        {/* <FixedSizeList
          height={600}
          itemData={data.statsTimeline.salesLead}
          itemCount={data.statsTimeline.salesLead.length}
          itemSize={5}
        >
          {({ index, style, data }) => {
            console.log(style);
            return (
              (data[index]?.personInfo?.general?.fullName ||
                data[index]?.personInfo) && (
                <div
                  className="absolute my-3"
                  style={{
                    top: style.top * 10,
                    width: style.width,
                    left: style.left,
                    right: style.right,
                    height: "auto",
                  }}
                >
                  <div
                    key={index + 1}
                    // style={{ ...style }}
                    className="flex justify-between px-6 mx-4 py-3 items-start border-b"
                  >
                    <div className="flex justify-start items-start">
                      <div className="mr-5">
                        <div className=" overflow-hidden rounded-full">
                          <img
                            width={"50px"}
                            height={"50px"}
                            className="object-cover"
                            src={data[index]?.personInfo?.general?.imgUrl}
                            alt={data[index].fullName}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="text-base font-bold flex">
                          {data[index]?.personInfo?.general?.fullName} •
                          <span className="font-normal text-gray-400 ml-1">
                            {data[index]?.personInfo?.general?.connectionDegree}
                          </span>
                        </div>
                        <div>{data[index]?.personInfo?.general?.headline}</div>
                        <div className="text-sm">{data[index]?.location}</div>
                        <div className="text-xs">
                          <span>
                            {data[index]?.personInfo?.general?.connectionsCount}{" "}
                            connections .{" "}
                            {data[index]?.personInfo?.general?.subscribers}{" "}
                            Subscribers
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="border-blue-600 px-6 py-1 cursor-pointer bg-white text-blue-600 hover:bg-blue-100 border h-9 w-28 text-center hover:border-2 rounded-full hover:font-bold font-medium">
                        Follow
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          }}
        </FixedSizeList> */}
        {data.statsTimeline.salesLead.map((val) => {
          return (
            (val?.personInfo?.general?.fullName || val?.personInfo) && (
              <div className="flex my-1 justify-between px-6 mx-4 py-3 items-start border-b">
                <div className="flex justify-start items-start">
                  <div className="mr-5">
                    <div className=" overflow-hidden rounded-full">
                      <img
                        width={"50px"}
                        height={"50px"}
                        className="object-cover"
                        src={val?.personInfo?.general?.imgUrl}
                        alt={val.fullName}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-base font-bold flex">
                      {val?.personInfo?.general?.fullName} •
                      <span className="font-normal text-gray-400 ml-1">
                        {val?.personInfo?.general?.connectionDegree}
                      </span>
                    </div>
                    <div>{val?.personInfo?.general?.headline}</div>
                    <div className="text-sm">{val?.location}</div>
                    <div className="text-xs">
                      <span>
                        {val?.personInfo?.general?.connectionsCount} connections
                        . {val?.personInfo?.general?.subscribers} Subscribers
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="border-blue-600 px-6 py-1 cursor-pointer bg-white text-blue-600 hover:bg-blue-100 border h-9 w-28 text-center hover:border-2 rounded-full hover:font-bold font-medium">
                    Follow
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </>
  );
};

export default LinkedInSearch;

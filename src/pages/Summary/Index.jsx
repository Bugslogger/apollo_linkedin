import React from "react";
import SocialMediaCard from "../../components/Summary/SocialMediaCard";
import { FaShareAlt, FaBookmark, FaTiktok } from "react-icons/fa";
import { AiFillStar, AiFillPieChart, AiOutlineTwitter } from "react-icons/ai";
import { MdThumbUpAlt, MdInsertComment } from "react-icons/md";

const Summary = () => {
  return (
    <div className="p-6 overflow-auto h-full">
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="flex justify-center items-center p-4 h-60 ">
          <div className="w-1/2 overflow-x-auto ">
            <div className="my-4 px-4 font-semibold text-2xl">
              Follower Stats
            </div>
            <div className="flex justify-start items-center">
              <SocialMediaCard />
              <SocialMediaCard />
              <SocialMediaCard />
            </div>
          </div>
          <div className="w-1/2  overflow-x-auto">
            <div className="my-4 px-4 font-semibold text-2xl ">
              Sentiments Score
            </div>
            <div className="px-3 py-2 h-36 bg-white flex justify-center items-center rounded-lg shadow-md sentiment-score-chart">
              <div className="uppercase text-xs">no data found</div>
            </div>
          </div>
        </div>

        <div className="my-4 px-4">
          <div className="my-4 font-semibold text-2xl">Mentions Summary</div>
          <div className="bg-white p-3 rounded-lg">
            <div className="font-semibold flex justify-start items-center  my-3">
              <FaBookmark className="mx-2 text-sm text-green-700" />
              <span className="text-[18px]">Summary</span>
            </div>
            <div className="flex justify-start items-center">
              <div className=" mx-3 my-1 rounded-md cursor-pointer py-3 px-2">
                <div className="text-xs uppercase">mentions</div>
                <div className="text-[24px] font-semibold my-1 uppercase">
                  9
                </div>
                <div className="text-[12px] uppercase text-green-700">
                  +8 (+800%)
                </div>
              </div>

              <div className=" mx-3 my-1 rounded-md cursor-pointer py-3 px-2">
                <div className="text-xs uppercase">mentions</div>
                <div className="text-[24px] font-semibold my-1 uppercase">
                  9
                </div>
                <div className="text-[12px] uppercase text-green-700">
                  +8 (+800%)
                </div>
              </div>

              <div className=" mx-3 my-1 rounded-md cursor-pointer py-3 px-2">
                <div className="text-xs uppercase">mentions</div>
                <div className="text-[24px] font-semibold my-1 uppercase">
                  9
                </div>
                <div className="text-[12px] uppercase text-green-700">
                  +8 (+800%)
                </div>
              </div>

              <div className=" mx-3 my-1 rounded-md cursor-pointer py-3 px-2">
                <div className="text-xs uppercase">mentions</div>
                <div className="text-[24px] font-semibold my-1 uppercase">
                  9
                </div>
                <div className="text-[12px] uppercase text-green-700">
                  +8 (+800%)
                </div>
              </div>

              <div className=" mx-3 my-1 rounded-md cursor-pointer py-3 px-2">
                <div className="text-xs uppercase">mentions</div>
                <div className="text-[24px] font-semibold my-1 uppercase">
                  9
                </div>
                <div className="text-[12px] uppercase text-green-700">
                  +8 (+800%)
                </div>
              </div>

              <div className=" mx-3 my-1 rounded-md cursor-pointer py-3 px-2">
                <div className="text-xs uppercase">mentions</div>
                <div className="text-[24px] font-semibold my-1 uppercase">
                  9
                </div>
                <div className="text-[12px] uppercase text-green-700">
                  +8 (+800%)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-2">
          <div className="flex justify-between items-center">
            <div className="w-1/2 m-2">
              <div className="my-4 px-4 font-semibold text-2xl">
                Mentions Timeline
              </div>
              <div className="my-3 bg-white h-80 rounded-lg p-3 flex justify-center items-center">
                {/* add chart here */}
                <div className="uppercase text-xs">no data found.</div>
              </div>
            </div>
            <div className="w-1/2 m-2">
              <div className="my-4 px-4 font-semibold text-2xl">
                Top Mentions Posts
              </div>
              <div className="my-3 overflow-y-auto bg-white h-80 rounded-lg p-4">
                <div className="border-b p-2">
                  <div className="text-xs font-semibold p-1">Aug 11, 2023</div>
                  <div className="p-1">
                    Earlier this week, our Chief Scientific Officer, David
                    Powell spoke...
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center mx-2 my-1">
                      <AiFillStar /> <span className="mx-1 text-sm">Star</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdThumbUpAlt /> <span className="mx-1 text-sm">241</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdInsertComment />{" "}
                      <span className="mx-1 text-sm">141</span>
                    </div>
                  </div>
                </div>

                <div className="border-b p-2">
                  <div className="text-xs font-semibold p-1">Aug 11, 2023</div>
                  <div className="p-1">
                    Earlier this week, our Chief Scientific Officer, David
                    Powell spoke...
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center mx-2 my-1">
                      <AiFillStar /> <span className="mx-1 text-sm">Star</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdThumbUpAlt /> <span className="mx-1 text-sm">241</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdInsertComment />{" "}
                      <span className="mx-1 text-sm">141</span>
                    </div>
                  </div>
                </div>

                <div className="border-b p-2">
                  <div className="text-xs font-semibold p-1">Aug 11, 2023</div>
                  <div className="p-1">
                    Earlier this week, our Chief Scientific Officer, David
                    Powell spoke...
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center mx-2 my-1">
                      <AiFillStar /> <span className="mx-1 text-sm">Star</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdThumbUpAlt /> <span className="mx-1 text-sm">241</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdInsertComment />{" "}
                      <span className="mx-1 text-sm">141</span>
                    </div>
                  </div>
                </div>

                <div className="border-b p-2">
                  <div className="text-xs font-semibold p-1">Aug 11, 2023</div>
                  <div className="p-1">
                    Earlier this week, our Chief Scientific Officer, David
                    Powell spoke...
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center mx-2 my-1">
                      <AiFillStar /> <span className="mx-1 text-sm">Star</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdThumbUpAlt /> <span className="mx-1 text-sm">241</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdInsertComment />{" "}
                      <span className="mx-1 text-sm">141</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-2">
          <div className="flex justify-between items-center">
            <div className="w-1/2 m-2">
              <div className="my-4 px-4 font-semibold text-2xl">
                Top Hashtags
              </div>
              <div className="my-3 overflow-y-auto bg-white h-80 rounded-lg p-4">
                <div className="border-b p-2">
                  <div className="text-xs font-semibold p-1">Aug 11, 2023</div>
                  <div className="p-1">
                    Earlier this week, our Chief Scientific Officer, David
                    Powell spoke...
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center mx-2 my-1">
                      <AiFillStar /> <span className="mx-1 text-sm">Star</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdThumbUpAlt /> <span className="mx-1 text-sm">241</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdInsertComment />{" "}
                      <span className="mx-1 text-sm">141</span>
                    </div>
                  </div>
                </div>

                <div className="border-b p-2">
                  <div className="text-xs font-semibold p-1">Aug 11, 2023</div>
                  <div className="p-1">
                    Earlier this week, our Chief Scientific Officer, David
                    Powell spoke...
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center mx-2 my-1">
                      <AiFillStar /> <span className="mx-1 text-sm">Star</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdThumbUpAlt /> <span className="mx-1 text-sm">241</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdInsertComment />{" "}
                      <span className="mx-1 text-sm">141</span>
                    </div>
                  </div>
                </div>

                <div className="border-b p-2">
                  <div className="text-xs font-semibold p-1">Aug 11, 2023</div>
                  <div className="p-1">
                    Earlier this week, our Chief Scientific Officer, David
                    Powell spoke...
                  </div>
                  <div className="flex justify-start items-center">
                    <div className="flex justify-start items-center mx-2 my-1">
                      <AiFillStar /> <span className="mx-1 text-sm">Star</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdThumbUpAlt /> <span className="mx-1 text-sm">241</span>
                    </div>
                    <div className="flex justify-start items-center mx-2 my-1">
                      <MdInsertComment />{" "}
                      <span className="mx-1 text-sm">141</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 m-2">
              <div className="my-4 px-4 font-semibold text-2xl">Top Stats</div>
              <div className="my-3 flex justify-between items-start h-80 rounded-lg">
                <div className="w-2/3 mx-1 rounded-lg bg-white h-full p-4">
                  <div className="text-[16px] my-2 flex justify-start items-center">
                    <AiFillPieChart className="mx-1 text-green-600" />{" "}
                    <span className="capitalize font-semibold">stats</span>
                  </div>
                  <div></div>
                </div>
                <div className="w-1/3 mx-1 rounded-lg bg-white h-full p-4">
                  <div className="text-[16px] my-2 flex justify-start items-center">
                    <FaShareAlt className="mx-1 text-green-600" />
                    <span className="capitalize font-semibold">Sources</span>
                  </div>

                  <div className="h-full overflow-y-auto">
                    <div className="flex justify-start border-b p-1 items-center">
                      <div className="p-1 mx-2">
                        <AiOutlineTwitter className="text-blue-400 text-[20px]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[19px]">124k</div>
                        <div className="text-[12px] text-gray-500">Twitter</div>
                      </div>
                    </div>

                    <div className="flex justify-start border-b p-1 items-center">
                      <div className="p-1 mx-2">
                        <FaTiktok className="text-black text-[18px]" />
                      </div>
                      <div>
                        <div className="font-semibold text-[19px]">24k</div>
                        <div className="text-[12px] text-gray-500">Tiktok</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;

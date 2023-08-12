import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Index = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Mentions",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 900 })),
        backgroundColor: "#0ff",
      },
      {
        label: "Sentiments",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 900 })),
        backgroundColor: "#f0f",
      },
    ],
  };

  const hashtags = ["#trending", "#popular", "Likes", "Shares", "business"];
  return (
    <div className="p-5">
      <div style={{ maxWidth: "1100px" }} className="mx-auto">
        <div className="flex justify-center w-full items-start flex-row">
          <div className="w-1/2 sticky top-0 h-full">
            <div className="w-full flex justify-center items-center">
              <div className=" ring-gray-200 ring-1 w-1/3 px-4 py-2 bg-white hover:bg-slate-50 hover:animate-pulse rounded-md mx-2">
                <div className="text-lg text-slate-400 font-medium">
                  Mentions
                </div>
                <div className="text-2xl text-blue-600 font-bold">745</div>
              </div>
              <div className=" ring-gray-200 ring-1 w-1/3 px-4 py-2 bg-white hover:bg-slate-50 hover:animate-pulse rounded-md mx-2">
                {" "}
                <div className="text-lg text-slate-400 font-medium">Likes</div>
                <div className="text-2xl text-blue-600 font-bold">275</div>
              </div>
              <div className=" ring-gray-200 ring-1 w-1/3 px-4 py-2 bg-white hover:bg-slate-50 hover:animate-pulse rounded-md mx-2">
                {" "}
                <div className="text-lg text-slate-400 font-medium">Shares</div>
                <div className="text-2xl text-blue-600 font-bold">675</div>
              </div>
            </div>
            <div className="mb-2 mt-4 px-2 flex flex-wrap">
              <span className="my-2 focus:text-white focus:bg-blue-600 ring-1 mx-2 cursor-pointer hover:ring-blue-600 hover:text-blue-600 font-medium ring-slate-300 rounded-md px-3 bg-white py-1">
                Facebook
              </span>
              <span className="my-2 focus:text-white focus:bg-blue-600 ring-1 mx-2 cursor-pointer hover:ring-blue-600 hover:text-blue-600 font-medium ring-slate-300 rounded-md px-3 bg-white py-1">
                Instagram
              </span>
              <span className="my-2 focus:text-white focus:bg-blue-600 ring-1 mx-2 cursor-pointer hover:ring-blue-600 hover:text-blue-600 font-medium ring-slate-300 rounded-md px-3 bg-white py-1">
                Youtube
              </span>
              <span className="my-2 focus:text-white focus:bg-blue-600 ring-1 mx-2 cursor-pointer hover:ring-blue-600 hover:text-blue-600 font-medium ring-slate-300 rounded-md px-3 bg-white py-1">
                Tiktok
              </span>
              <span className="my-2 focus:text-white focus:bg-blue-600 ring-1 mx-2 cursor-pointer hover:ring-blue-600 hover:text-blue-600 font-medium ring-slate-300 rounded-md px-3 bg-white py-1">
                Twitter
              </span>
              <span className="my-2 focus:text-white focus:bg-blue-600 ring-1 mx-2 cursor-pointer hover:ring-blue-600 hover:text-blue-600 font-medium ring-slate-300 rounded-md px-3 bg-white py-1">
                Blog
              </span>
              <span className="my-2 focus:text-white focus:bg-blue-600 ring-1 mx-2 cursor-pointer hover:ring-blue-600 hover:text-blue-600 font-medium ring-slate-300 rounded-md px-3 bg-white py-1">
                News
              </span>
              <span className="my-2 focus:text-white focus:bg-blue-600 ring-1 mx-2 cursor-pointer hover:ring-blue-600 hover:text-blue-600 font-medium ring-slate-300 rounded-md px-3 bg-white py-1">
                Web
              </span>
            </div>
            <div className="my-3">
              <div className="mx-2 px-2 py-3 border bg-white">
                <Bar options={options} data={data} />
              </div>
            </div>
          </div>
          <div className="w-1/2 sticky top-0 h-full mx-3">
            <div className="border rounded-md my-2">
              <div className="px-4 text-lg py-2 text-center font-medium bg-slate-100">
                Top Mention Posts
              </div>
              <div className="px-4 py-4 text-center bg-white">
                No Data Available
              </div>
            </div>
            <div className="border rounded-md my-2">
              <div className="px-4 py-2 text-lg text-center font-medium bg-slate-100">
                Top Hashtags
              </div>
              <div className="px-4 py-4 text-center bg-white">
                {hashtags.map((val, index) => {
                  return (
                    <div className="flex justify-between items-center border-b px-4">
                      <div
                        key={val}
                        className={`w-full text-left px-1 py-2 ${
                          index % 2 === 0 ? "" : ""
                        }`}
                      >
                        {val}
                      </div>
                      <div>{index * 23}</div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full text-blue-600 text-center font-bold py-2 px-3 cursor-pointer bg-slate-100">
                Show More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

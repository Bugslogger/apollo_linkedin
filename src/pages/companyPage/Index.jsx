import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsFillBuildingFill,
  BsGlobeAsiaAustralia,
  BsCurrencyDollar,
  BsLinkedin,
} from "react-icons/bs";
import companyData from "../../utils/openaiData.json";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Index = () => {
  const [tabs, settabs] = useState({
    summary: true,
    fund: false,
    people: false,
  });
  const tableHead = [
    "Announce Date",
    "Transaction Name",
    "Investors",
    "Money Raised",
    "Lead Investor",
  ];

  const investmentTableHead = [
    "Announce Date",
    "Organization Name",
    "Lead Investor",
    "Funding Round",
    "Money Raised",
  ];

  const fundsTableHead = ["Announce Date", "Funds Name", "Money Raised"];

  const investorTableHead = [
    "Investor Name",
    "Lead Investor",
    "Funding Round",
    "Partners",
  ];

  function formatNumber(num, precision = 2) {
    const map = [
      { suffix: "T", threshold: 1e12 },
      { suffix: "B", threshold: 1e9 },
      { suffix: "M", threshold: 1e6 },
      { suffix: "K", threshold: 1e3 },
      { suffix: "", threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted =
        (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }

    return num;
  }
  return (
    <div className="p-6 h-full overflow-auto">
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="flex justify-start items-center py-4 relative">
          <div className="w-52 shadow-md  rounded-md overflow-hidden mx-2">
            <img
              className="w-full"
              src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/jjykwqqhsscreywea4gb"
              alt=""
            />
          </div>
          <div className="w-full px-4">
            <div className="flex justify-between items-center">
              <div className="">
                <div className="my-1 flex justify-start items-center text-xs">
                  <BsFillBuildingFill className="mx-1" /> ORGANIZATION
                </div>
                <div className="my-1 text-3xl font-bold capitalize">
                  {
                    companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                      .posts[0]?.title
                  }
                </div>
              </div>
              <div className="px-3 flex justify-center items-center text-3xl text-gray-700">
                {companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                  ?.posts[0]?.social_fields?.twitter &&
                  companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                    .posts[0]?.social_fields?.twitter?.value && (
                    <AiOutlineTwitter
                      onClick={() =>
                        window.open(
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.social_fields?.twitter
                            ?.value
                        )
                      }
                      className="cursor-pointer"
                    />
                  )}
                {companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                  ?.posts[0]?.social_fields?.facebook &&
                  companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                    .posts[0]?.social_fields?.facebook?.value && (
                    <AiFillFacebook
                      onClick={() =>
                        window.open(
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.social_fields?.facebook
                            ?.value
                        )
                      }
                      className="mx-2 cursor-pointer"
                    />
                  )}{" "}
                {companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                  ?.posts[0]?.social_fields?.linkedin &&
                  companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                    .posts[0]?.social_fields?.linkedin?.value && (
                    <AiFillLinkedin
                      onClick={() =>
                        window.open(
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.social_fields?.linkedin
                            ?.value
                        )
                      }
                      className="cursor-pointer"
                    />
                  )}
              </div>
            </div>
            <div className="mt-6 h-full">
              <div className="tabs flex px-4 justify-between items-center w-full  h-full">
                <div
                  onClick={() => settabs({ summary: true })}
                  className={`tracking-wide font-semibold px-8 py-5 rounded-t-md text-base cursor-pointer   ${
                    tabs?.summary ? "bg-white" : "hover:bg-slate-200"
                  }`}
                >
                  Summary
                </div>
                <div
                  onClick={() => settabs({ fund: true })}
                  className={`rounded-t-md px-8 py-5 text-base  ${
                    tabs?.fund ? "bg-white" : "hover:bg-slate-200"
                  } cursor-pointer font-semibold`}
                >
                  Financials
                </div>
                <div
                  onClick={() => settabs({ people: true })}
                  className={`rounded-t-md px-8 py-5 text-base  ${
                    tabs?.people ? "bg-white" : "hover:bg-slate-200"
                  } cursor-pointer font-semibold`}
                >
                  People
                </div>
                <div
                  onClick={() => settabs({ summary: true })}
                  className="rounded-t-md px-8 py-5 text-base hover:bg-slate-200 cursor-pointer font-semibold"
                >
                  Technology
                </div>
                <div
                  onClick={() => settabs({ summary: true })}
                  className="rounded-t-md px-8 py-5 text-base hover:bg-slate-200 cursor-pointer font-semibold"
                >
                  Signals
                </div>
                <div
                  onClick={() => settabs({ summary: true })}
                  className="rounded-t-md px-8 py-5 text-base hover:bg-slate-200 cursor-pointer font-semibold"
                >
                  LinkedIn Stats
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ marginTop: "-28px" }}
          className="bg-white bottom-0 h-7 z-0 w-full left-0"
        ></div>
        <div className="bg-white px-3 py-5">
          {tabs?.summary && (
            <div className="flex">
              <div className="w-1/3 mx-2 px-2 flex-wrap">
                <div className="font-bold text-lg">About</div>
                <div className="my-3 text-sm">
                  {
                    companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                      .posts[0]?.about_short_description?.short_description
                  }
                </div>
                <div className="mt-5">
                  <div className="text-[16px] my-1 text-slate-700 flex justify-start items-center">
                    <MdLocationPin className="text-[22px] mx-1" /> San
                    Francisco, California, United States
                  </div>
                  <div className="text-[16px] my-1 text-slate-700 flex justify-start items-center">
                    <BsCurrencyDollar className="mx-1 text-[22px]" /> Venture -
                    Series Unknown
                  </div>
                  <div className="text-[16px] my-1 text-slate-700 ml-1 flex justify-start items-center">
                    <BsGlobeAsiaAustralia className="mx-1 text-[16px]" />{" "}
                    <Link
                      className="hover:underline ml-1"
                      target="_blank"
                      to={
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.company_about_fields?.website
                          ?.value
                      }
                    >
                      {
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.company_domain_name
                      }
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-1/3 mx-1  flex-wrap ">
                <div className="font-bold text-lg">Highlights</div>
                <div className="my-3">
                  <div className="flex w-full  justify-center items-center my-1">
                    <CardCount
                      text={"Similarities"}
                      count={
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.company_overview_highlights
                          ?.num_org_similarities
                      }
                    />
                    <CardCount
                      text={"Positions"}
                      count={
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.company_overview_highlights
                          ?.num_current_positions
                      }
                    />
                  </div>
                  <div className="flex w-full  justify-center items-center my-1">
                    <CardCount
                      text={"Investments"}
                      count={
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.company_overview_highlights
                          ?.num_investments
                      }
                    />
                    <CardCount
                      text={"Investors"}
                      count={
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.company_overview_highlights
                          ?.num_investors
                      }
                    />
                  </div>
                  <div className="flex w-full  justify-center items-center my-1">
                    <CardCount
                      text={"Contacts"}
                      count={
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.company_overview_highlights
                          ?.num_contacts
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/3 mx-2 px-2 flex-wrap">
                <div className="font-bold text-lg">Recent News & Activity</div>
                <div>
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                  <NewsCard />
                </div>
              </div>
            </div>
          )}
          {tabs?.fund && (
            <div>
              <div className="flex">
                <div className="w-1/2 mx-2 px-3 flex-wrap border-r">
                  <div className="font-bold text-lg">Highlights</div>
                  <div className="my-3">
                    <div className="flex w-full  justify-center items-center my-1">
                      <CardCount
                        text={"Total Funding"}
                        count={`$ ${formatNumber(
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.people_highlights
                            ?.funding_total?.value_usd
                        )}`}
                      />
                      <CardCount
                        text={"Funding Rounds"}
                        count={
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0].people_highlights
                            .num_funding_rounds
                        }
                      />
                    </div>
                    <div className="flex w-full  justify-center items-center my-1">
                      <CardCount
                        text={"Funds"}
                        count={
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.people_highlights?.num_funds
                        }
                      />
                      <CardCount
                        text={"Investment"}
                        count={
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.people_highlights
                            ?.num_investments
                        }
                      />
                    </div>
                    <div className="flex w-full  justify-center items-center my-1">
                      <CardCount
                        text={"Investors"}
                        count={
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.people_highlights
                            ?.num_investors
                        }
                      />
                      <CardCount
                        text={"Lead Investors"}
                        count={
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.people_highlights
                            ?.num_lead_investors
                        }
                      />
                    </div>
                    <div className="flex w-full  justify-center items-center my-1">
                      <CardCount
                        text={"Lead Investments"}
                        count={
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.people_highlights
                            ?.num_lead_investments
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tabs?.people && (
            <div>
              <div className="flex">
                <div className="w-1/2 mx-2 px-3 flex-wrap border-r">
                  <div className="font-bold text-lg">Highlights</div>
                  <div className="my-3">
                    <div className="flex w-full  justify-center items-center my-1">
                      <CardCount
                        text={"Number of Contacts"}
                        count={
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0]?.posts[0]?.people_highlights
                            ?.num_contacts
                        }
                      />
                      <CardCount
                        text={"Number of Advisors"}
                        count={
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0]?.posts[0]?.people_highlights
                            ?.num_current_advisor_positions
                        }
                      />
                    </div>
                    <div className="flex w-full  justify-center items-center my-1">
                      <CardCount
                        text={"Number of Employee"}
                        count={
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0]?.posts[0]?.people_highlights
                            ?.num_current_positions
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {tabs?.fund && (
          <>
            <div className="my-4 bg-white rounded-md">
              <div className="m-3 p-5">
                <div className="font-bold text-2xl">Funding Round</div>
                <div className="flex justify-center items-center my-6">
                  <CardCount
                    borderHidden={true}
                    text={"Total Funding Amount"}
                    count={
                      "$ " +
                      formatNumber(
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.funding_rounds_headline
                          ?.funding_total.value_usd
                      )
                    }
                  />
                  <CardCount
                    borderHidden={true}
                    text={"Number of Funding Rounds"}
                    count={
                      companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                        .posts[0]?.funding_rounds_headline?.num_funding_rounds
                    }
                  />
                </div>
                <div className="mt-4">
                  <table className="border min-w-full">
                    <thead className="border">
                      {tableHead.map((val) => {
                        return (
                          <th key={val} className="border py-4">
                            {val}
                          </th>
                        );
                      })}
                    </thead>
                    <tbody>
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0]?.posts[0]?.funding_rounds_list?.map(
                        (val) => {
                          return (
                            <tr className="border-b" key={val.identifier.uuid}>
                              <td className="font-semibold py-3 text-center">
                                {val?.announced_on}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                {val?.identifier?.value}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                {val?.num_investors}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                {val?.money_raised?.value_usd
                                  ? "$" +
                                    formatNumber(val?.money_raised?.value_usd)
                                  : "-"}
                              </td>
                              <td className="font-semibold w-56 py-3 text-center">
                                {val?.lead_investor_identifiers
                                  ? val?.lead_investor_identifiers
                                      .map((val) => val?.value)
                                      .join(",")
                                  : "-"}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="my-4 bg-white rounded-md">
              <div className="m-3 p-5">
                <div className="font-bold text-2xl">Investors</div>
                <div className="flex justify-center items-center my-6">
                  <CardCount
                    borderHidden={true}
                    text={"Number Of Lead Investors"}
                    count={
                      companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                        .posts[0]?.investors_headline?.num_lead_investors
                    }
                  />
                  <CardCount
                    borderHidden={true}
                    text={"Number of Investors"}
                    count={
                      companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                        .posts[0]?.investors_headline?.num_investors
                    }
                  />
                </div>
                <div className="mt-4">
                  <table className="border text-sm w-4/5 mx-auto">
                    <thead className="border">
                      {investorTableHead.map((val) => {
                        return (
                          <th key={val} className="border py-4">
                            {val}
                          </th>
                        );
                      })}
                    </thead>
                    <tbody className="text-sm">
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0]?.posts[0]?.investors_list?.map(
                        (val) => {
                          return (
                            <tr className="border-b" key={val.identifier.uuid}>
                              <td className="font-semibold py-3 px-4 w-60 text-start">
                                {val?.investor_identifier?.value}
                              </td>
                              <td className="font-semibold py-3 w-36 text-center">
                                {val?.is_lead_investor ? "Yes" : "No"}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                {val?.funding_round_identifier?.value}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                -
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="my-4 bg-white rounded-md">
              <div className="m-3 p-5">
                <div className="font-bold text-2xl">Funds Raised</div>
                <div className="flex justify-center items-center my-6">
                  <CardCount
                    borderHidden={true}
                    text={"Total Funds Amount"}
                    count={
                      "$ " +
                      formatNumber(
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.funds_headline?.funds_total
                          .value_usd
                      )
                    }
                  />
                  <CardCount
                    borderHidden={true}
                    text={"Number of Funds"}
                    count={
                      companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                        .posts[0]?.funds_headline?.num_funds
                    }
                  />
                </div>
                <div className="mt-4 w-10/12 mx-auto">
                  <table className="border min-w-full">
                    <thead className="border">
                      {fundsTableHead.map((val) => {
                        return (
                          <th key={val} className="border py-4">
                            {val}
                          </th>
                        );
                      })}
                    </thead>
                    <tbody>
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0]?.posts[0]?.funds_list?.map(
                        (val) => {
                          return (
                            <tr className="border-b" key={val.identifier.uuid}>
                              <td className="font-semibold py-3 text-center">
                                {val?.announced_on}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                {val?.identifier?.value}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                {val?.money_raised?.value_usd
                                  ? "$" +
                                    formatNumber(val?.money_raised?.value_usd)
                                  : "-"}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="my-4 bg-white rounded-md">
              <div className="m-3 p-5">
                <div className="font-bold text-2xl">Investments</div>
                <div className="flex justify-center items-center my-6">
                  <CardCount
                    borderHidden={true}
                    text={"Number Of Investments"}
                    count={
                      companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                        .posts[0]?.investments_headline?.num_investments
                    }
                  />
                  <CardCount
                    borderHidden={true}
                    text={"Number of Lead Investments"}
                    count={
                      companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                        .posts[0]?.investments_headline?.num_lead_investments
                    }
                  />
                </div>
                <div className="mt-5 mx-auto w-4/5">
                  <table className="border text-sm min-w-full">
                    <thead className="border">
                      {investmentTableHead.map((val) => {
                        return (
                          <th key={val} className="border py-4">
                            {val}
                          </th>
                        );
                      })}
                    </thead>
                    <tbody>
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0]?.posts[0]?.investments_list?.map(
                        (val) => {
                          return (
                            <tr className="border-b" key={val.identifier.uuid}>
                              <td className="font-semibold py-3 text-center">
                                {val?.announced_on}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                {val?.organization_identifier?.value}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                {val?.is_lead_investor ? "Yes" : "No"}
                              </td>

                              <td className="font-semibold px-2 w-56 py-3 text-center">
                                {val?.funding_round_identifier?.value}
                              </td>
                              <td className="font-semibold py-3 text-center">
                                {val?.funding_round_money_raised?.value_usd
                                  ? "$" +
                                    formatNumber(
                                      val?.funding_round_money_raised?.value_usd
                                    )
                                  : "-"}
                              </td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
        {tabs?.people && (
          <>
            <div className="my-4 bg-white rounded-md">
              <div className="m-3 p-5">
                <div className="font-bold text-2xl">Employee Profiles</div>
                <div className="my-4">
                  <CardCount
                    borderHidden={true}
                    count={
                      companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                        .posts[0]?.current_employees_headline
                        .num_current_positions
                    }
                    text={"Number of Employee Profiles"}
                  />
                  <div className="px-4">
                    <div className="text-[16px] my-1">
                      {
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.company_name
                      }{" "}
                      has{" "}
                      {
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.current_employees_headline
                          .num_current_positions
                      }{" "}
                      current employee profiles.
                    </div>
                    <div className="my-1 columns-2">
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.current_employees_image_list.map(
                        (val) => {
                          return (
                            <div className="flex justify-start items-center my-3">
                              <div className="rounded-md overflow-hidden mx-2">
                                <img
                                  src={
                                    "https://images.crunchbase.com/image/upload/c_thumb,h_85,w_85,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/" +
                                    val.person_identifier.image_id
                                  }
                                  alt=""
                                />
                              </div>
                              <div className="mx-3">
                                <div className="text-[17px] font-semibold">
                                  {val.person_identifier.value}
                                </div>
                                <div className="text-sm">{val.title}</div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4 bg-white rounded-md">
              <div className="m-3 p-5">
                <div className="font-bold text-2xl">
                  Board Members And Advisor Profiles
                </div>
                <div className="my-4">
                  <CardCount
                    borderHidden={true}
                    count={
                      companyData?.stats?.crunchBase?.timelineStats?.timeline[0]
                        .posts[0]?.advisors_headline
                        ?.num_current_advisor_positions
                    }
                    text={"Number of Board Member and Advisor Profiles"}
                  />
                  <div className="px-4">
                    <div className="text-[16px] my-1">
                      {
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.company_name
                      }{" "}
                      has{" "}
                      {
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.advisors_headline
                          ?.num_current_advisor_positions
                      }{" "}
                      board members and advisors.
                    </div>
                    <div className="my-1 columns-2">
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.current_advisors_image_list?.map(
                        (val) => {
                          return (
                            <div className="flex justify-start items-center my-3">
                              <div className="rounded-md overflow-hidden mx-2">
                                <img
                                  src={
                                    "https://images.crunchbase.com/image/upload/c_thumb,h_85,w_85,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/" +
                                    val.person_identifier.image_id
                                  }
                                  alt=""
                                />
                              </div>
                              <div className="mx-3">
                                <div className="text-[17px] font-semibold">
                                  {val.person_identifier.value}
                                </div>
                                <div className="text-sm">{val.job_type}</div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4 bg-white rounded-md">
              <div className="m-3 p-5">
                <div className="font-semibold text-2xl">Contacts</div>
                <div className="my-4 px-6">
                  <div className="my-3 py-2 border-b flex justify-end items-center">
                    <div className="cursor-pointer uppercase text-blue-600 px-4 hover:bg-blue-200 font-semibold text-xs py-2 rounded-md">
                      Contact Preferences
                    </div>
                  </div>
                  <div className="py-4">
                    {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.contacts_summary?.lookup?.map(
                      (val) => {
                        return (
                          <div className="flex w-10/12 mx-auto items-center justify-between">
                            <div>
                              <div className="text-base flex justify-start items-center font-semibold">
                                {val?.name}{" "}
                                <a
                                  href={
                                    "https://www.linkedin.com/in/" +
                                    val?.linkedin
                                  }
                                >
                                  <BsLinkedin className="mx-2 text-blue-700 cursor-pointer" />
                                </a>
                              </div>
                              {val?.job_titles?.map((jobs) => {
                                return (
                                  <div className="text-sm">{jobs?.value}</div>
                                );
                              })}
                            </div>
                            <div className="text-gray-600 text-sm">
                              <div className="flex justify-start text-base items-center">
                                <MdEmail className="mx-1 text-[20px]" />1 Email
                                Found.
                              </div>
                              <div className="flex justify-start text-base items-center">
                                <MdPhone className="mx-1 text-[20px]" />1 Phone
                                Number Found.
                              </div>
                            </div>
                            <div>
                              <div className="border px-9 rounded-md text-base bg-blue-600 text-white cursor-pointer py-2">
                                view
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {tabs?.summary && (
          <>
            <div className="my-4 bg-white rounded-md">
              <div className="mx-6 px-5 pt-6">
                <div className="font-bold text-2xl">Details</div>
              </div>
              <div className="px-2 pb-6 w-11/12 flex mx-auto">
                <div className="w-1/2 p-3">
                  <div className="">
                    <div className="text-sm font-bold my-2 mx-4">
                      Industries
                    </div>
                    <div>
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.overview_fields_extended?.categories?.map(
                        (val) => (
                          <span className="m-1 w-full text-xs px-3 py-1 rounded-full bg-blue-200 font-semibold">
                            {val?.value}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm font-bold">
                      Headquarters Regions{" "}
                    </div>
                    <div>
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.overview_fields_extended?.location_group_identifiers?.map(
                        (val) => (
                          <span className="text-sm">{val?.value}, </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm font-bold  ">Founders</div>
                    <div>
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.overview_fields_extended?.founder_identifiers?.map(
                        (val) => (
                          <span className="text-sm">{val?.value}, </span>
                        )
                      )}
                    </div>
                  </div>

                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm font-bold  ">Legal Name</div>
                    <div>
                      <span className="text-sm">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.overview_fields_extended
                            ?.legal_name
                        }
                      </span>
                    </div>
                  </div>

                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm font-bold  ">Hub Tags </div>
                    <div>
                      <span className="text-sm">
                        {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.overview_fields_extended?.hub_tags?.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm font-bold  ">Last Funding Type</div>
                    <div>
                      <span className="text-sm">
                        Venture -{" "}
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.overview_fields_extended
                            ?.last_funding_type
                        }
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 p-3">
                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm font-bold  mb-1">
                      Diversity Spotlight (US Headquarters Only){" "}
                    </div>
                    <div>
                      {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.overview_fields_extended?.diversity_spotlights?.map(
                        (val) => (
                          <span className="m-1 w-full text-xs px-3 py-1 rounded-full bg-blue-200 font-semibold">
                            {val?.value}{" "}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm font-bold  ">Founded Date </div>
                    <div>
                      <span className="text-sm">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.overview_fields_extended
                            ?.founded_on?.value
                        }
                      </span>
                    </div>
                  </div>

                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm  font-bold ">Operating Status </div>
                    <div>
                      <span className="text-sm capitalize">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.overview_fields_extended
                            ?.operating_status
                        }
                      </span>
                    </div>
                  </div>

                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm font-bold  ">Also Known As</div>
                    <div>
                      <span className="text-sm">
                        {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.overview_fields_extended?.aliases?.toString()}
                      </span>
                    </div>
                  </div>
                  <div className="font-semibold mx-6 mt-7">
                    <div className="text-sm font-bold  ">Related Hubs </div>
                    <div>
                      <span className="text-sm">
                        {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.overview_fields_extended?.hubs
                          ?.map((val) => val.value)
                          .join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div  className="px-2 pb-6 w-11/12 flex mx-auto">
                <div className="w-1/2 p-3">
                <div className="font-semibold mx-6 mt-7">
                  <div className="text-sm font-bold  ">Founded Date </div>
                  <div>
                    <span className="text-sm">
                      {
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]?.overview_fields_extended
                          ?.founded_on?.value
                      }
                    </span>
                  </div>
                </div>

                </div>
                <div className="w-1/2 p-3">
                <div className="font-semibold mx-6 mt-7">
                  <div className="text-sm font-bold  mb-1">
                    Diversity Spotlight (US Headquarters Only){" "}
                  </div>
                  <div>
                    {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.overview_fields_extended?.diversity_spotlights?.map(
                      (val) => (
                        <span className="m-1 w-full text-xs px-3 py-1 rounded-full bg-blue-200 font-semibold">
                          {val?.value}{" "}
                        </span>
                      )
                    )}
                  </div>
                </div>

                </div>
              </div>
            </div>

            <div className="my-4 bg-white rounded-md">
              <div className="m-3 p-5">
                <div className="font-bold text-2xl">
                  Frequently Asked Questions
                </div>
                <div className="my-4">
                  <div className="p-2">
                    <div className="text-sm">
                      Where is{" "}
                      <span className="font-bold">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.title
                        }
                      </span>
                      's headquarters? OpenAI is located in{" "}
                      <span className="font-bold">
                        {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.frequently_asked_questions_headquarters_location?.location_identifiers
                          ?.map((val) => val?.value)
                          .join(", ")}
                      </span>
                      .
                    </div>
                    <div className="my-2">
                      Who invested in{" "}
                      <span className="font-bold">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.title
                        }
                      </span>
                      ?{" "}
                      <span className="font-bold">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.title
                        }
                      </span>{" "}
                      has{" "}
                      {
                        companyData?.stats?.crunchBase?.timelineStats
                          ?.timeline[0].posts[0]
                          ?.frequently_asked_questions_investors?.num_investors
                      }{" "}
                      investors including{" "}
                      <span className="font-bold">
                        {companyData?.stats?.crunchBase?.timelineStats?.timeline[0].posts[0]?.investors_list
                          ?.slice(0, 2)
                          ?.map((val) => val.investor_identifier.value)
                          .join(" and ")}
                      </span>
                      .
                    </div>
                    <div>
                      How much funding has{" "}
                      <span className="font-bold">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.title
                        }
                      </span>{" "}
                      raised to date?{" "}
                      <span className="font-bold">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.title
                        }
                      </span>{" "}
                      has raised
                      <span className="font-bold">
                        {" "}
                        $
                        {formatNumber(
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]
                            ?.frequently_asked_questions_total_funding
                            ?.funding_total?.value_usd
                        )}
                      </span>
                      .
                    </div>
                    <div className="my-2">
                      When was the last funding round for{" "}
                      <span className="font-bold">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.title
                        }
                      </span>
                      ?{" "}
                      <span className="font-bold">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.title
                        }
                      </span>{" "}
                      closed its last funding round on{" "}
                      {
                        <span className="font-bold">
                          {
                            companyData?.stats?.crunchBase?.timelineStats
                              ?.timeline[0].posts[0]?.funding_rounds_summary
                              .last_funding_at
                          }
                        </span>
                      }{" "}
                      from a Venture -{" "}
                      <span className="font-bold">
                        {
                          companyData?.stats?.crunchBase?.timelineStats
                            ?.timeline[0].posts[0]?.funding_rounds_summary
                            .last_funding_type
                        }
                      </span>{" "}
                      round.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CardCount = ({ text, count, borderHidden }) => {
  return (
    <Link className="mr-2 w-full cursor-pointer" to={""}>
      <div className={`${!borderHidden ? "border" : ""} px-4 py-2 rounded-md`}>
        <div className="text-lg font-semibold">{text}</div>
        <div className="text-xl text-blue-600 font-semibold">{count}</div>
      </div>
    </Link>
  );
};

const NewsCard = () => {
  return (
    <div className="text-sm font-semibold border-b py-4 px-1">
      <div>News • Aug 11, 2023</div>
      <div>
        Search Engine Journal — OpenAI Expands Custom Instructions To Most
        ChatGPT Users
      </div>
    </div>
  );
};

export default Index;

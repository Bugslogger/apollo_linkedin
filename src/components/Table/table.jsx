import React from "react";

const Table = ({ cols, data }) => {
  return (
    <div className="">
      <table className="border">
        <thead className="border">
          {cols?.map((val) => {
            return <th className="p-2 border text-left">{val.title}</th>;
          })}
        </thead>
        <tbody>
          {data?.map((vals, index) => (
            <tr>
              {cols?.map((val) => {
                return (
                  <td className="p-2 border text-left">
                    {val.render(vals[val.key], index)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

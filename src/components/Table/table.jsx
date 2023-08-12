import React from "react";
import axios from "axios";
import { FixedSizeList as List } from "react-window";

const Table = () => {
  const Row = ({ index, style }) => <div style={style}>Row {index}</div>;

  return (
    <div className="px-4-">
      <List height={200} itemCount={1000} itemSize={35} width={300}>
        {Row}
      </List>
      <div className="my-2 border flex justify-center items-center">
        <div className="border text-sm bg-blue-600 text-white rounded px-3 py-2 cursor-pointer">
          Show More
        </div>
      </div>
    </div>
  );
};

export default Table;

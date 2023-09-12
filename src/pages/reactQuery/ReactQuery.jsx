import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const ReactQuery = () => {
  const q = useQueryClient();
  const res = useQuery(["index1", "index2", "index3"], QueryFunction);
  console.log(q, "fetched data: ", res);
  async function QueryFunction(response) {
    console.log(res, "Reesponse: ", response.queryKey);
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
    return resp.json;
  }
  return <div>ReactQuery</div>;
};

export default ReactQuery;

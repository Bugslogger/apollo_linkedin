import React from "react";
import {
  useSearchParams,
  useLocation,
  useNavigate,
  useParams,
  matchPath,
  resolvePath,
} from "react-router-dom";

const Test = () => {
  const [search, setsearch] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const url = new URLSearchParams();
  function SetURLparams(param) {
    // setsearch("test-id");
    // location.push('test-id')
    if (param === "setsearch") {
      setsearch((param) => {
        param.set("newsearch-id", 23);
        return param;
      });
      return;
    }

    if (param === "getpath") {
      // console.log(resolvePath(location.pathname));
      console.log(location, params, search);
      return;
    }
    if (location.pathname.includes(params.id)) {
      let newPath = location.pathname;
      let x = newPath.replace(params.id, "new-test-id");
      navigate(x, { replace: true });
      console.log(
        typeof newPath,
        location.pathname.includes(params.id),
        params.id,
        x
      );
    } else {
      navigate("test-id", { replace: true });
    }
  }

  return (
    <div className="w-full">
      <button
        onClick={SetURLparams}
        className="m-4 border bg-blue-600 text-white rounded px-4 py-2 cursor-pointer"
      >
        set url param
      </button>
      <button
        onClick={() => SetURLparams("getpath")}
        className="m-4 border bg-blue-600 text-white rounded px-4 py-2 cursor-pointer"
      >
        get pathname
      </button>
      <button
        onClick={() => SetURLparams("setsearch")}
        className="m-4 border bg-blue-600 text-white rounded px-4 py-2 cursor-pointer"
      >
        set search
      </button>
      <div className="w-full h-full fixed top-0 left-0 flex justify-end items-start bg-gray-200">
        <div className="w-48 h-screen bg-black px-1 py-2 border">
          <div className="w-full h-48  border-2 my-2"></div>
          <div className="w-full h-[calc(100%-210px)] overflow-y-scroll border-2 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iste
            earum officiis voluptatum nisi quae impedit, eius ut cumque, tempore
            maxime repellendus aperiam ipsum saepe quas praesentium cum nemo
            amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem, laborum? Illo laborum alias harum nesciunt, dolores sunt
            saepe incidunt repellendus perferendis architecto cupiditate magnam
            voluptates, ducimus consectetur maxime tempora mollitia.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;

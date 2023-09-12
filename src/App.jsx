import { Layout } from "./components/Index";
import Table from "./components/Table/table";
import { CompanyPortfolio, People } from "./pages/Index";
import LinkedInSearch from "./pages/LinkedInSearch/LinkedIn.Search";
import Person from "./pages/person/Person";
import Actionable from "./pages/Actionable/Index";
import CompanyPage from "./pages/companyPage/Index";
import { Route, Routes } from "react-router-dom";
import Test from "./pages/TestComp/Test";
import Summary from "./pages/Summary/Index";
import ReactSpeech from "./pages/React-tts/ReactSpeech";
import ReactQuery from "./pages/reactQuery/ReactQuery";

const data = [
  { name: "Sarfaraj Shah", age: 24, occupation: "developer", country: "India" },
  {
    name: "Amrita",
    age: 20,
    occupation: "developer",
    city: "kolkata",
    state: "west bengal",
  },
  {
    name: "Naziya",
    age: 20,
    occupation: "developer",
    state: "Telengana",
    city: "Hyderabad",
    country: "India",
  },
];

const cols = [
  {
    title: "Sr.No.",
    render: (data, index) => {
      return index;
    },
  },
  {
    title: "Name",
    key: "name",
    render: (data) => {
      return data;
    },
  },
  {
    title: "Age",
    key: "age",

    render: (data) => {
      return data;
    },
  },
  {
    title: "Country",
    key: "country",
    render: (data) => {
      return data;
    },
  },
  {
    title: "City",
    key: "city",
    render: (data) => {
      return data;
    },
  },
];

function App() {
  return (
    <Routes>
      <Route element={<LinkedInSearch />} path="/" />
      <Route
        element={
          <Layout>
            <Person />
          </Layout>
        }
        path="/person"
      />
      <Route element={<CompanyPage />} path="/cruchbase" />
      <Route element={<Test />} path="/test" />
      <Route element={<Test />} path="/test/:id" />
      <Route element={<Summary />} path="/summary" />
      <Route element={<ReactSpeech />} path="/tts" />
      <Route element={<ReactQuery />} path="/rq" />

      <Route element={<Table cols={cols} data={data} />} path="/table" />
    </Routes>
  );
}

export default App;

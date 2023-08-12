import { Layout } from "./components/Index";
import Table from "./components/Table/table";
import { CompanyPortfolio, People } from "./pages/Index";
import LinkedInSearch from "./pages/LinkedInSearch/LinkedIn.Search";
import Person from "./pages/person/Person";
import Actionable from "./pages/Actionable/Index";
import CompanyPage from "./pages/companyPage/Index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<LinkedInSearch />} path="/" />
        <Route element={<Person />} path="/person" />
      </Routes>
      {/* <CompanyPortfolio />
      <People /> */}

      {/* <LinkedInSearch />
      <Table />
      <Actionable /> */}
    </Layout>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Dashboard from "../../containers/Dashboard";
import CompanyProfile from "../../containers/CompanyProfile";
import JobSeekers from "../../containers/JobSeekers";
import Applications from "../../containers/Applications";
import Reports from "../../containers/Reports";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/CompanyProfile" element={<CompanyProfile />} />

        <Route path="/JobSeekers" element={<JobSeekers />} />
        <Route path="/Applications" element={<Applications />} />
       
        <Route path="/Reports" element={<Reports />} />
      </Routes>
  );
}
export default AppRoutes;

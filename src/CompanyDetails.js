import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import JoblyApi from "./APIHelper";
import JobList from "./JobList";

/** Renders company info with JobList component below
 *
 * props:
 * - applyToJob: function to update currUser in App state
 *
 * state: 
 * - company: result of API call to get company info based on handle params
 *
 */

function CompanyDetails({ applyToJob }) {
  const [company, setCompany] = useState();
  const { handle } = useParams();

  useEffect(function makeApiCallForComp() {
    async function fetchCompanyInfo() {
      const res = JoblyApi.getCompany(handle)
      setCompany(res);
    }
    fetchCompanyInfo();
  }, []);

  return (
    <div className="CompanyDetails">
      <h2 className="CompnayDetails-name">{company.name}</h2>
      <p className="CompanyDetails-description">{company.description}</p>
      <JobList apply={applyToJob} jobs={company.jobs}/>
    </div>
  )
}

export default CompanyDetails;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import JoblyApi from "../api/APIHelper";
import JobList from "../jobs/JobList";

/** Renders company info with JobList component below
 *
 * props:
 * - applyToJob: function to update currUser in App state
 *
 * state:
 * - company: result of API call to get company info based on handle params
 *
 */

function CompanyDetails() {
  const [company, setCompany] = useState();
  const { handle } = useParams();

  useEffect(function makeApiCallForComp() {
    async function fetchCompanyInfo() {
      const res = await JoblyApi.getCompany(handle);
      setCompany(res);
    }
    fetchCompanyInfo();
  }, [handle]);

  if (company === undefined) return (<div>Loading...</div>);
  return (
    <div className="lg:text-center mt-7">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide">{company.handle}</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {company.name}
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        {company.description}
      </p>
      <JobList jobs={company.jobs}/>
    </div>
  )
}

export default CompanyDetails;

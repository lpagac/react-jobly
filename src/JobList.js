import JobCard from "./JobCard";
import {useEffect, useState} from "react";
import JoblyApi from "./APIHelper";
import SearchForm from "./SearchForm";

/** Render list of all jobs and SearchForm
 *
 * props:
 * - applyToJob: function to update currUser in App state
 * - jobs: array of objects with job info
 *
 * state: None
 *
 */

function JobList({ jobsForCompany=null, applyToJob }) {
  const [jobs, setJobs] = useState(jobsForCompany);
  const [searchTerm, setSearchTerm] = useState();

  function renderJobs() {
    return jobs.map(j => <JobCard key={j.id} job={j} apply={applyToJob} />);
  }
  function updateJobs(searchTerm) {
    setSearchTerm(searchTerm);
  }

  /* Uses effect to make a request to companies API
   * Fetches a list of companies to display
   */
  useEffect(function makeJobsAPIRequest() {
    async function makeAPIRequest() {
      const res = await JoblyApi.getJobs(searchTerm);
      setJobs(res);
    }
    makeAPIRequest();
  }, [searchTerm]);


  if (!jobs) return (<div >Loading...</div>);

  return (
    <div className="JobList-Page">
      <h2>Jobs:</h2>
      <SearchForm handleSearch={updateJobs} />
    <div className="JobList">
      {renderJobs()}
    </div>
    </div>
  )
}


export default JobList;

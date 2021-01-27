import JobCard from "./JobCard";
import {useEffect, useState} from "react";
import JoblyApi from "./APIHelper";
import SearchForm from "./SearchForm";
import "./JobList.css";

/** Render list of all jobs and SearchForm
 *
 * props:
 * - applyToJob: function to update currUser in App state
 * - jobsForCompany: array of objects with job info
 *
 * state:
 * - jobs: list of jobs to display
 * - searchTerm: term used in API request to get filtered list of jobs
 *
 */

function JobList({ jobsForCompany=null, applyToJob }) {
  console.log("JobList rendered");
  const [jobs, setJobs] = useState(jobsForCompany);
  const [searchTerm, setSearchTerm] = useState();

  /* Renders JobCard components based on jobs in state */
  function renderJobs() {
    return jobs.map(j => <JobCard key={j.id} job={j} apply={applyToJob} />);
  }

  /* Updates list of jobs to be displayed
   * on page after search */
  function updateJobs(searchTerm) {
    setSearchTerm(searchTerm);
  }

  /* Uses effect to make a request to jobs API
   * Fetches a list of jobs to display
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
    <div className="JobList-page">
      <h2>Jobs:</h2>
      <SearchForm handleSearch={updateJobs} />
    <div className="JobList">
      {renderJobs()}
    </div>
    </div>
  )
}


export default JobList;

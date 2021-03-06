import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import JoblyApi from "../api/APIHelper";
import SearchForm from "../common/SearchForm";


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

function JobList({ jobsForCompany = null }) {
  const [jobs, setJobs] = useState(jobsForCompany);
  const [searchTerm, setSearchTerm] = useState(null);

  /* Uses effect to make a request to jobs API
   * Fetches a list of jobs to display
   */
  useEffect(function makeJobsAPIRequest() {
    async function makeAPIRequest() {
      const jobsResult = await JoblyApi.getJobs(searchTerm);
      setJobs(jobsResult);
    }
    try {
      makeAPIRequest();
    }
    catch (e) {
      console.error("Error: update jobs failed:\n", e);
    }
  }, [searchTerm]);

  /* Renders JobCard components based on jobs in state */
  function renderJobs() {
    return jobs.map(j =>
      { return <JobCard
                key={j.id}
                jobId={j.id}
                title={j.title}
                salary={j.salary}
                equity={j.equity}
                companyName={j.companyName} />});
  }

  /* Updates list of jobs to be displayed
   * on page after search */
  function updateJobs(searchTerm) {
    setSearchTerm(searchTerm);
  }



  if (!jobs) return (<div >Loading...</div>);

  return (
    <div className="">
      <div className="h-24"></div>
      <SearchForm handleSearch={updateJobs} />
      <div className="JobList flex flex-grow flex-col items-center justify-between">
        {renderJobs()}
      </div>
    </div>
  );
}


export default JobList;

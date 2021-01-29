import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import JoblyApi from "./APIHelper";
import SearchForm from "./SearchForm";


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

function JobList({ jobsForCompany = null, applyToJob }) {
  console.log("JobList rendered");
  const [jobs, setJobs] = useState(jobsForCompany);
  const [searchTerm, setSearchTerm] = useState(null);

  /* Renders JobCard components based on jobs in state */
  function renderJobs() {
    // pass each prop individually
    return jobs.map(j =>
      { return <JobCard
                key={j.id}
                jobId={j.id}
                title={j.title}
                salary={j.salary}
                equity={j.equity}
                apply={applyToJob} />});
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


  if (!jobs) return (<div >Loading...</div>);

  return (
    <div className="mt-24 md:mt-16">
      <SearchForm handleSearch={updateJobs} />
      <div className="JobList flex flex-grow flex-col items-center justify-between">
        {renderJobs()}
      </div>
    </div>
  );
}


export default JobList;

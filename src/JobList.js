import JobCard from "./JobCard";

/** Render list of all jobs and SearchForm
 * 
 * props:
 * - applyToJob: function to update currUser in App state
 * - jobs: array of objects with job info
 * 
 * state: None
 * 
 */

function JobList({ jobs, apply }) {
  return (
    <div className="JobList">
      {jobs.map(j => <JobCard job={j} apply={apply} />)}
    </div>
  )
}


export default JobList;
import "./JobCard.css";

/* JobCard component
 * Props:
 ** job (job object to be rendered)
 ** apply (function to apply to job)
 * State: None
 *
 */
function JobCard({job, apply}) {
  console.log("JobCard rendered");
  return(
    <div className="JobCard">
      <h3>{job.title}</h3>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.Equity}</p>
      <button onClick={() => apply(job.id)}>Apply</button>
    </div>
  );
}

export default JobCard;

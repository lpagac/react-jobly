import "./JobCard.css";

/* JobCard component
 * Props:
 ** job (job object to be rendered)
 ** apply (function to apply to job)
 * State: None
 *
 */
function JobCard({jobId, title, salary, equity, apply}) {
  console.log("JobCard rendered");

  /* Helper function to call apply */
  function applyToJob() {
    apply(jobId);
  }
  return(
    <div className="JobCard">
      <h3>{title}</h3>
      <p>Salary: {salary}</p>
      <p>Equity: {equity}</p>
      <button onClick={applyToJob}>Apply</button>
    </div>
  );
}

export default JobCard;

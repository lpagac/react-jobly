import { useContext, useState, useEffect } from "react";
import UserContext from "../auth/userContext";

/* JobCard component
 * Props:
 ** job (job object to be rendered)
 ** apply (function to apply to job)
 * State: None
 *
 */
function JobCard({jobId, title, salary, equity, companyName}) {

  const { hasAppliedToJob, applyToJob } = useContext(UserContext);
  const [applied, setApplied] = useState();
  
  useEffect(function updateAppliedStatus() {

    setApplied(hasAppliedToJob(jobId));
  }, [jobId, hasAppliedToJob]);

  /** Apply for a job */
  async function handleApply(evt) {
    if (hasAppliedToJob(jobId)) return;
    applyToJob(jobId);
    setApplied(true);
  }

  return (
    <div className="w-2/5 mb-4 bg-white shadow overflow-hidden sm:rounded-lg border-solid border-gray-800 rounded-xl shadow-md">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="inline text-lg leading-6 font-medium text-gray-900">
          Job Title: {title}
        </h3>
        <div className="px-4 py-3 float-right sm:px-6">
          <button
                className="inline-flex justify-center  py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleApply}
                disabled={applied}
            >
            {applied ? "Applied" : "Apply"}
          </button>
        </div>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {companyName}
        </p> 
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Salary:
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {formatSalary(salary) || "Not Listed"}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Equity:
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {equity ? equity : 0}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

/** Render integer salary like '$1,250,343' */

function formatSalary(salary) {
  if (!salary) return null;
  const digitsRev = [];
  const salaryStr = salary.toString();

  for (let i = salaryStr.length - 1; i >= 0; i--) {
    digitsRev.push(salaryStr[i]);
    if (i > 0 && i % 3 === 0) digitsRev.push(",");
  }

  return digitsRev.reverse().join("");
}

export default JobCard;

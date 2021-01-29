

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
  return (
    <div className="w-2/5 mb-4 bg-white shadow overflow-hidden sm:rounded-lg border-solid border-gray-800 rounded-xl shadow-md">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Title:
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {title}
        </p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Salary:
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {salary}
            </dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              equity:
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {equity}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default JobCard;

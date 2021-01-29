import { Link } from "react-router-dom";

/** Render card with company info
 *
 * props:
 * - company: object like { handle, name, description, numEmployees, logoUrl }
 */

function CompanyCard({company}) {
  console.log("CompanyCard rendered");

  return (
    <div className="w-2/5 mb-4 bg-white shadow overflow-hidden sm:rounded-lg border-solid border-gray-800 rounded-xl shadow-md">
      <Link to={`/companies/${company.handle}`} className="CompanyCard-contents">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            <b> {company.name} </b>
          </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
           Total employees: {company.numEmployees}
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Description
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <p> {company.description} </p>
              </dd>
            </div>
          </dl>
        </div>
      </Link>
    </div>);

}

export default CompanyCard;

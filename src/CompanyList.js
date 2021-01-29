import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import { useEffect, useState } from "react";
import JoblyApi from "./APIHelper";


/** Render each CompanyCard and SearchForm to filter list of companies
 *
 * props: None
 *
 * state:
 * - companies: array like [{company info}, ...]
 * - searchTerm: term used in API request to get filtered list of companies
 */

function CompanyList() {
  console.log("CompanyList rendered");
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(null);

  /* Renders CompanyCard components based on Companies in state */
  function renderCompanies() {
    // pass down each key individually
    return companies.map(company => <CompanyCard key={company.handle} company={company} />);
  }

  /* Updates list of companies to be displayed
   * on page after search */
  function updateCompanies(searchTerm) {
    setSearchTerm(searchTerm);
  }

  /* Uses effect to make a request to companies API
   * Fetches a list of companies to display
   */
  useEffect(function makeCompaniesAPIRequest() {
    async function makeAPIRequest() {
      // wrap with try/catch
      const companiesResult = await JoblyApi.getCompanies(searchTerm);
      setCompanies(companiesResult);
    }
    try {
      makeAPIRequest();
    }
    catch (e) {
      console.error("Error: update jobs failed:\n", e);
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-grow flex-col items-center CompanyList-page">
        <div className="h-24"></div>
      <h1 className="ml-10 mb-8 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Companies:</h1>
      <SearchForm handleSearch={updateCompanies} />
      <div className="CompanyList w-full JobList flex flex-grow flex-col items-center justify-between">
        {renderCompanies()}
      </div>
    </div>);

}

export default CompanyList;

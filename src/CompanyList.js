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


  // add loading return

  return (
    <div className="CompanyList-page">
      <h2>Companies:</h2>
      <SearchForm handleSearch={updateCompanies} />
      <div className="CompanyList">
        {renderCompanies()}
      </div>
    </div>);

}

export default CompanyList;

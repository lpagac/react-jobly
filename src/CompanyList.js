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
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  /* Renders CompanyCard components based on Companies in state */
  function renderCompanies() {
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
      const res = await JoblyApi.getCompanies(searchTerm);
      setCompanies(res);
    }
    makeAPIRequest();
  }, [searchTerm]);


  return (
    <div className="CompanyList-Page">
      <h2>Companies:</h2>
      <SearchForm handleSearch={updateCompanies} />
      <div className="CompanyList">
        {renderCompanies()}
      </div>
    </div>);

}

export default CompanyList;

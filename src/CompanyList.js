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
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  function renderCompanies() {
    return companies.map(company => <CompanyCard company={company} />);
  }

  function updateCompanies(term) {
    setSearchTerm(term);
  }

  /* Uses effect to make a request to companies API
   * Fetches a list of companies to display
   */
  useEffect(function makeCompaniesAPIRequest() {
    async function makeAPIRequest() {
      return await JoblyApi.getCompanies(searchTerm);
    }
    makeAPIRequest();
  }, [searchTerm]);


  return (
    <div>
      <h2>Companies:</h2>
      <SearchForm handleSubmit={updateCompanies} />
      {renderCompanies()}
    </div>);
}

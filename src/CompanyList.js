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
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  function renderCompanies() {
    return companies.map(company => <CompanyCard key={company.handle} company={company} />);
  }

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
    <div>
      <h2>Companies:</h2>
      <SearchForm handleSearch={updateCompanies} />
      {renderCompanies()}
    </div>);

}

export default CompanyList;

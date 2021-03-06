import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import { useEffect, useState } from "react";
import JoblyApi from "./APIHelper";


/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, SearchForm }
 */

function CompanyList() {
  console.log("CompanyList rendered");
  const [companies, setCompanies] = useState([]);

  /* Renders CompanyCard components based on Companies in state */
  function renderCompanies() {
    return companies.map(company =>
      <CompanyCard 
        key={company.handle} 
        handle={company.handle}
        name={company.name}
        description={company.description}
        numEmployees={company.numEmployees}
         />);
  }

  useEffect(function getCompaniesOnMount() {
    console.debug("CompanyList useEffect getCompaniesOnMount");
    search();
  }, []);

  /** Triggered by search form submit; reloads companies. */
  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <div className="flex flex-grow flex-col items-center CompanyList-page">
        <div className="h-24"></div>
      <h1 className="ml-10 mb-8 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Companies:</h1>
      <SearchForm handleSearch={search} />
      <div className="CompanyList w-full JobList flex flex-grow flex-col items-center justify-between">
        {renderCompanies()}
      </div>
    </div>);

}

export default CompanyList;

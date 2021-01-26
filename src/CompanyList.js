import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import { useState } from "react";

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

  // add effects
}


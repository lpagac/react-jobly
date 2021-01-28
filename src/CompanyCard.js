import { Link } from "react-router-dom";

/** Render card with company info
 *
 * props:
 * - company: object like { handle, name, description, numEmployees, logoUrl }
 */

function CompanyCard({company}) {
  console.log("CompanyCard rendered");
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${company.handle}`} className="CompanyCard-contents">
        <img alt={company.name} src={company.logoUrl}></img>
        <b> {company.name} </b> Total employees: {company.numEmployees}
        <p> {company.description} </p>
      </Link>
    </div>
  )
}

export default CompanyCard;

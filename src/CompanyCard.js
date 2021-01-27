import { Link } from "react-router-dom";
import './CompanyCard.css';
/** Render card with company info
 *
 * props:
 * - company: object like { handle, name, description, numEmployees, logoUrl }
 */

function CompanyCard({company}) {
  return (
    <div className="CompanyCard">
      <img alt={company.name} src={company.logoUrl}></img>
      <b> {company.name} </b> Total employees: {company.numEmployees}
      <p> {company.description} </p>
    </div>
  )
}

export default CompanyCard;

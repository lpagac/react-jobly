/** Alert box notification
 * 
 * props:
 * - error: error message(s) to display
 * 
 * state: None
 * 
 */

function Alert({ error }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold"> Holy smokes! </strong>
      <span className="block sm:inline"> {error} </span>
    </div>
  )
};

export default Alert;
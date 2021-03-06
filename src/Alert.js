/** Alert box notification
 *
 * props:
 * - error: error message(s) to display
 *
 * state: None
 *
 */

function Alert({ type="danger", errors = [] }) {
  if (errors.length){
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">{errors.map(err => (
            <p key={err}>{err}</p>
        ))}
        </strong>
      </div>
    );
  }
  else {
    return null;
  }
};

export default Alert;

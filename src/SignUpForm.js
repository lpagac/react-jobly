import { useHistory } from "react-router-dom";
import { useState } from "react";
import Alert from "./Alert";

/** Render new user form
 *
 * props:
 * - handleSignUp: function to trigger API call for user info in App
 *
 * state:
 * - formData: object like {username, firstName, lastName, password, email}
 * - errors: form errors
 */

function SignUpForm({handleSignUp}) {
  console.log("SignUpForm rendered");
  const history = useHistory();
  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });
  const styles ={input:"appearance-none rounded-none relative block m-4 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"}

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(fData => {
      return {
        ...fData,
        [name]: value,
      }
    });
  };

  async function handleSubmit(evt) {
    console.log("handleSubmit");
    evt.preventDefault();
    const formVals = Object.values(formData);
    if (formVals.some(val => val.trim() === '')) return;
    let resp = await handleSignUp(formData);
    if (resp.success) {
      return history.push("/");
    } else {
      setErrors(resp.error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
      {errors && <Alert error={errors} />}
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up for an account:
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="username" className="sr-only"> Username </label>
            <input onChange={handleChange} id="username" name="username" required autoComplete="current-username"  className={styles.input} placeholder="Username" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input onChange={handleChange} id="password" name="password" type="password" autoComplete="current-password" required className={styles.input} placeholder="Password" />
          </div>


          <div>
            <label htmlFor="firstName" className="sr-only"> First Name </label>
            <input onChange={handleChange} id="firstName" name="firstName" required autoComplete="firstName"  className={styles.input}  placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input onChange={handleChange} id="lastName" name="lastName" type="lastName" autoComplete="current-lastName" required className={styles.input} placeholder="Last Name" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only"> email </label>
            <input onChange={handleChange} type="email" id="email" name="email" required autoComplete="email"  className={styles.input}  placeholder="Email address" />
          </div>
        </div>

        <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 m-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {/* <!-- Heroicon name: lock-closed --> */}
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default SignUpForm;

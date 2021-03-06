import Alert from "../common/Alert";
import UserContext from '../auth/userContext';
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

/** Renders form for updating user info
 *
 * props:
 * - handleUpdate: function to update currentUser in App state
 *
 * state:
 * - formData: object like {firstName, lastName, email, password}
 * - errors: errors from submit if any
 *
 */

function ProfileForm({ handleUpdate }) {
  
  const { currentUser } = useContext(UserContext);
  const history = useHistory();

  const [errors, setErrors] = useState(null);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    password: '',
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
  });

  /* Handles form submit */
  async function handleSubmit(evt) {
    evt.preventDefault();

    const profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let resp = await handleUpdate(profileData);
    if (resp.success) {
      history.push("/");
    } else {
      setErrors(resp.errors);
    }
  }

  // Handle form data changing
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => {
      return {
        ...fData,
        [name]: value,
      }
    });
  };

  const styles = { input: "appearance-none rounded-none relative block m-4 w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" }

  return (
    <div className="min-h-screen shadow-inner flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {errors && <Alert errors={errors} />}
        <div>
          <h2 className="mt-12 text-center text-3xl font-extrabold text-gray-900">
            Edit your profile:
        </h2>
        </div>

        <form className="mt-0 pt-4 pr-8 space-y-6 rounded-lg border-solid border-4  border-gray-900 shadow-inner shadow-2xl" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="ProfileForm-username" className="m-4 font-bold"> Username </label>
              <p className="m-4" id="ProfileForm-username"> {formData.username} </p>
            </div>


            <div>
              <label htmlFor="ProfileForm-firstName" className="ml-4 mt-6 font-bold"> First Name </label>
              <input onChange={handleChange} value={formData.firstName} id="ProfileForm-firstName" name="firstName" required autoComplete="firstName" className={styles.input} placeholder="First Name" />
            </div>
            <div>
              <label htmlFor="ProfileForm-lastName" className="m-4 font-bold">Last Name</label>
              <input onChange={handleChange} value={formData.lastName} id="ProfileForm-lastName" name="lastName" type="lastName" autoComplete="current-lastName" required className={styles.input} placeholder="Last Name" />
            </div>
            <div>
              <label htmlFor="ProfileForm-email" className="m-4 font-bold"> email </label>
              <input onChange={handleChange} value={formData.email} type="email" id="ProfileForm-email" name="email" required autoComplete="email" className={styles.input} placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="ProfileForm-password" className="m-4 font-bold"> Confirm Password to make changes</label>
              <input onChange={handleChange} value={formData.password} id="ProfileForm-password" name="password" type="password" autoComplete="current-password" required className={styles.input} placeholder="Confirm Password" />
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
            Save Changes
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;

import { useState } from "react";
import {useHistory} from "react-router-dom";
/** Renders login form for user
 *
 * props:
 * - logInUser: function to trigger API request for user info in App
 *
 * state:
 * - formData: object like {username, password}
 */

function LoginForm({ handleLogin }) {
  console.log("LoginForm rendered");
  const history = useHistory();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData(fData => {
      return {
        ...fData,
        [name]: value,
      }
    });
  };

  async function handleSubmit(evt){
    evt.preventDefault();
    console.log("handleSubmit");
    try{
      await handleLogin(formData);
      history.push("/");
    }
    catch (e){
      console.error("Error: Could not log in.",e);
    }
  }

  return (
    <div style={{padding: "50px"}}>
      <div className="LoginForm">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username"> Username </label>
            <input
                onChange={handleChange}
                name="username"
                value={formData.username}
                id="username" />
          </div>
          <div>
            <label htmlFor="password"> Password </label>
            <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formData.password}
                id="password" />
            </div>
            <div>
            <button className="LoginForm-submit"> Submit </button>
            </div>
        </form>
      </div>
    </div>
  );
}


export default LoginForm;

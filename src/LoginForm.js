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
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <input 
            onChange={handleChange}
            name="username"
            value={formData.username} 
            id="username" />
        <label htmlFor="password">password</label>
        <input 
            onChange={handleChange}
            type="password" 
            name="password"
            value={formData.password} 
            id="password" />
        <button className="LoginForm-submit">Submit</button>
      </form>
    </div>
  )
}


export default LoginForm;

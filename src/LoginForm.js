import { useState } from "react";
import {useHistory} from "react-router-dom";
/** Renders login form for user
 *
 * props:
 * - handleSubmit: function to trigger API request for user info in App
 *
 * state:
 * - formData: object like {username, password}
 */

function LoginForm({ logInUser }) {
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
      await logInUser(formData);
      history.push("/");
    }
    catch (e){
      console.error("Error: Could not log in.",e);
    }
  }

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <input value={""}></input>
      </form>
    </div>
  )
}


export default LoginForm;

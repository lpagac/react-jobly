import { useHistory } from "react-router-dom";
import { useState } from "react";

/** Render new user form
 * 
 * props:
 * - handleSignUp: function to trigger API call for user info in App
 * 
 * state: 
 * - formData: object like {username, firstName, lastName, password, email}
 */

function SignUpForm({handleSignUp}) {
  console.log("SignUpForm rendered");
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
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

  async function handleSubmit(evt) {
    evt.preventDefault();
    const formVals = Object.values(formData);
    if (formVals.some(val => val.trim() === '')) return;
    try {
      await handleSignUp(formData);
      history.push("/");
    } catch (e) {
      console.error("Could not sign up user", e);
    }
  }
  return (
    <div className="SignUpForm">
      <h1 className="SignUpForm-title">Sign Up</h1>
      <form onSubmit={handleSubmit} className="SignUpForm-form">
        <label htmlFor="username">username:</label>
        <input 
            onChange={handleChange}
            value={formData.username}
            name="username"
            id="username" />
        <label htmlFor="password">password:</label>
        <input 
            onChange={handleChange}
            type="password"
            value={formData.password}
            name="password"
            id="password" />
        <label htmlFor="firstName">First Name:</label>
        <input 
            onChange={handleChange}
            value={formData.firstName}
            name="firstName"
            id="firstName" />
        <label htmlFor="lastName">Last Name:</label>
        <input 
            onChange={handleChange}
            value={formData.lastName}
            name="lastName"
            id="lastName" />
        <label htmlFor="email">email:</label>
        <input 
            onChange={handleChange}
            type="email"
            value={formData.email}
            name="email"
            id="email" />

        <button className="SignUpForm-submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm;
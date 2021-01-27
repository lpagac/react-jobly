import { useState } from "react";
/** Renders login form for user
 * 
 * props: 
 * - handleSubmit: function to trigger API request for user info in App
 * 
 * state: 
 * - formData: object like {username, password}
 */

function LoginForm({ handleSubmit }) {
  console.log("LoginForm rendered");
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

  function handleSubmit(evt)

  return (
    <div className="LoginForm">
      LoginForm
    </div>
  )
}


export default LoginForm;
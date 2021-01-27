/** Render new user form
 * 
 * props:
 * - handleSubmit: function to trigger API call for user info in App
 * 
 * state: 
 * - formData: object like {username, firstName, lastName, password, email}
 */

function SignUpForm({handleSubmit}) {
  console.log("SignUpForm rendered");
  return (
    <div className="SignUpForm">
      SignUpForm
    </div>
  )
}

export default SignUpForm;
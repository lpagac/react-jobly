import { useState } from "react";

/* SearchForm Component
 */
function SearchForm({handleSubmit}){
  const [searchTerm, setSearchTerm] = useState({searchTerm:""});

  /* Helper function to update searchTerm */
  function handleChange(evt){
    const {value} = evt.target;
    setSearchTerm(fData => {return {"searchTerm":value} });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input vlaue={searchTerm.searchTerm} name="query" onChange={handleChange}></input>
      <button type="submit"> Search </button>
    </form>
  );
}

export default SearchForm;

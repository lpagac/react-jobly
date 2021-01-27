import { useState } from "react";

/* SearchForm Component
 */
function SearchForm({handleSearch}){
  console.log("SearchForm rendered");
  const [searchTerm, setSearchTerm] = useState('');

  /** Handle form submit to prevent default  */
  function handleSubmit(evt) {
    evt.preventDefault();
    if(searchTerm.trim() === '') return;
    handleSearch(searchTerm);
    setSearchTerm('');
  }

  /* Helper function to update searchTerm */
  function handleChange(evt){
    const {value} = evt.target;
    console.log("{value} in handle change", value);
    setSearchTerm(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value={searchTerm} name="name" onChange={handleChange}></input>
      <button type="submit"> Search </button>
    </form>
  );
}

export default SearchForm;

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
    setSearchTerm(evt.target.value);
  }
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input value={searchTerm} name="name" onChange={handleChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search..." aria-label="search bar" />
        <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
          Search
        </button>
      </div>
    </form>   
  );
}

export default SearchForm;

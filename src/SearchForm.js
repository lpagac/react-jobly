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
    <div className="flex place-content-center">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-purple-500 py-2">
          <input value={searchTerm} name="name" onChange={handleChange} className="appearance-none bg-purple-50 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Search..." aria-label="search bar" />

          <button className="bg-purple-500 text-sm rounded-lg font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-purple-600 mr-6" type="button">
            Search
          </button>

        </div>
      </form>
    </div>
  );
}

export default SearchForm;

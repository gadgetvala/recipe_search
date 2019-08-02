import React,{useState} from 'react';
import "./css/SearchBar.css";

const SearchBar = props => {

	//Using State
	const [term,setTerm] = useState("");

	//For Updateing searchterm in state
	const onChangeTerm = e => {
    	setTerm(e.target.value);
  	};

  	//When we submit our form
  	const onSubmit = e => {
    	e.preventDefault();
    	props.setSearch(term);
 	};

	return (
		<form onSubmit={onSubmit} className="search-form">
	        <input className="search-bar" value={term} onChange={onChangeTerm}/>
	        <button className="search-button" type="submit">
	          Search
	        </button>
    	  </form>
	);
}

export default SearchBar;
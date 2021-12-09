import React, { useState } from 'react';
import "./css/SearchBar.css";

const SearchBar = props => {


	//Using State
	const [term, setTerm] = useState("");

	//For Updateing searchterm in state
	const onChangeTerm = e => {
		setTerm(e.target.value);
	};

	//When we submit our form
	const onSubmit = e => {
		e.preventDefault();
		if (term === '') {
			props.showAlert('First enter the details', 'danger');
		} else {
			props.showAlert('Items Searching...', 'success');
		}
		props.setSearch(term);
	};

	// Clear Search input text
	const clearText = () => {
		if (term === '') {
			props.showAlert('Nothing to erase', 'info');
		} else {
			setTerm("")
			props.showAlert('Values erased successfully', 'success');
		}

		document.getElementById('search-value').focus();
	};

	return (
		<>
			<div className='searchBar'>
				<form onSubmit={onSubmit} className="search-form">
					<input className="search-bar" id='search-value' value={term} onChange={onChangeTerm} placeholder='enter your ingredients' />
					<button className="search-button" type="submit">
						Search
					</button>
				</form>
			</div>
			<button className="search-button clear-btn" onClick={clearText}>Clear</button>
		</>
	);
}

export default SearchBar;
import React, { useState, Fragment } from 'react';
import { GithubStar } from './components/svgs.js'
const Search = (props) => {

  const [searchInput, updateSearchInput] = useState('')
  let searchList = props.searchFrom

  const handleChange = (e) => {
    let userInput = e.target.value.trim().toLowerCase()
    updateSearchInput(userInput)
  }

  if (searchInput.length > 0) {
    searchList = searchList.filter( elem => elem.name.toLowerCase().match(searchInput))
  }

  return (
    <Fragment>
      <input type="text" value={searchInput} onChange={handleChange} placeholder='JavaScript repos on Github'/>
      <ul>
        {searchList.map(function(obj, index) {
            return <li key={index} className={obj.class}>{obj.name}: <a href={obj.url}>{obj.url}</a> - <GithubStar/> <sup className='sm-font'>{obj.stars}</sup></li>
        }) } 
      </ul>
    </Fragment>
  )
 
}

export default Search
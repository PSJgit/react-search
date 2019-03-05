import React, { useState, Fragment } from 'react';
import { GithubStar } from './components/svgs.js'

const Search = (props) => {

  const [searchInput, updateSearchInput] = useState('')
  const searchList = props.searchFrom

  const handleChange = (e) => {
    let userInput = e.target.value.trim().toLowerCase()
    updateSearchInput(userInput)
  }

  if (searchInput.length > 0) {
    searchList = searchList.filter( elem => elem.name.toLowerCase().match(searchInput))
  }

  return (
    <Fragment>
      <input type="text" placeholder='JavaScript repos on Github' value={searchInput} onChange={handleChange}/>
      <ul>
        {searchList.map(function(obj, index) {
          return <li key={index} className={obj.class}>
            {obj.name}: <a href={obj.url}>{obj.url}</a> - <GithubStar/> <sup className='sm-font'>{obj.stars}</sup>
          </li>
        }) } 
      </ul>
    </Fragment>
  )
}

export default Search
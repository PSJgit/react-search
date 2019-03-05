import React from 'react';
import ReactDOM from 'react-dom';
import searchList from './data/searchList.js'
import Search from './app';
import './scss/index.scss';


ReactDOM.render(
	<Search searchFrom={searchList} />, 
	document.getElementById('root')
);

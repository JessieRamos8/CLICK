/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import '../Styles/Components/SearchBar.scss';

const SearchBar = ({setSearchCondition, filterFunction}) => {

    const [ condition, setCondition ] = useState('');

    useEffect(() => {
        setSearchCondition(condition);
    }, [condition])

    return (
        <div className='search-bar-container'>
            <input 
                className='search-input' 
                onChange={(e) => setTimeout(setCondition(e.target.value), 500)}
                placeholder={'Busca un producto'}
            />
            <button 
                onClick={() => filterFunction()} 
                className='search-button'
            >
                Buscar
            </button>
        </div>
    );
}

export default SearchBar;

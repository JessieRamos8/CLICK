import React from 'react';
import logo from '../assets/images/clicksuscribe.png';
import '../Styles/Components/Header.scss';
import ButtonsNavigation from './ButtonsNavigation';
import SearchBar from './SearchBar';

const Header = ({shoppingCart, setSearchCondition, filterFunction, showAllFunction}) => {
    return (
        <header>
            <div className='header-logo-container'>
                <img src={logo} className='header-logo-img' alt={'click-logo'}/>
            </div>
            <nav className='header-nav'>
                <div className='header-nav-buttons-container'>
                    <ButtonsNavigation showAllFunction={showAllFunction} products={shoppingCart}/>
                </div>
                <div className='header-search-input-container'>
                    <SearchBar filterFunction={filterFunction} setSearchCondition={setSearchCondition} />
                </div>
            </nav>
        </header>
    );
}

export default Header;

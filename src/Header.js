import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img 
                className="header__logo"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Ffreebiesupply%2Flarge%2F2x%2Famazon-logo-white.png&f=1&nofb=1" 
                alt=""/>
            </Link>

        <div className="header__search">
            <input
            className="header__searchInput"
            type="text"

            />

            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">

            <Link to="/login">

                <div onClick={handleAuthentication}>
                    <div className="header__option">
                        <span
                        className="header__optionLineOne">
                            Hello {user?.email}
                        </span>
                        <span
                        className="header__optionLineTwo">
                            {user ? "Sign out" : "Sign In"}
                        
                        </span>                
                    </div>  
                </div>
          
            </Link>


            <Link to="/orders">
                <div className="header__option">
                <span
                    className="header__optionLineOne">
                        Returns
                    </span>
                    <span
                    className="header__optionLineTwo">
                        & Orders
                    </span>     
                </div>
            </Link>



            <div className="header__option">
            <span
                className="header__optionLineOne">
                    your
                </span>
                <span
                className="header__optionLineTwo">
                    Prime
                </span>     
            </div>

            <div className="header__option">


            </div>
        </div>
        
        <Link to="/checkout">
            <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <span
                    className="header__optionLineTwo header__basketCount">
                        {basket?.length}
                    </span>              
            </div>
        </Link>


    </div>



    )
}

export default Header

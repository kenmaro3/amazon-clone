import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-fe.ssl-images-amazon.com/images/G/09/2020/x-site/monthly_deal/08/gw/dayof/081318_GW_DO_10._CB405102350_.jpg" alt=""/>

                <div className="home__row">
                    <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating={5} />
                    <Product />
                </div>

                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>                

                <div className="home__row">
                    <Product />
                </div>                
            </div>
        </div>
    )
}

export default Home

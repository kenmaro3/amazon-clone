import React, { useState } from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer';
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"


function Subtotal() {

    const [{basket}, dispatch] = useStateValue();

    const history = useHistory();
    // const [totalPrice, setTotalPrice] = useState(0);


    // const getBasketTotal = () => {
    //     let tmp = 0;
    //     basket.map(item => {
    //         console.log(item);
    //         tmp += item.price;
    //         console.log(totalPrice);
    //     });



    //     setTotalPrice(tmp);
    // }    
    return (

        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>

                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>

                        <small className="subtotal__gift">
                            <input
                                type="checkbox"
                            />
                            This order contains a gift

                        </small>

                    </>
                )}
                
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

                />
                
                <button onClick={e => history.push("/payment")}>Proceed to Checkout</button>
                
            
        </div>
    )
}

export default Subtotal

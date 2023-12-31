import {MdClose} from "react-icons/md"
import {BsCartX} from "react-icons/bs"
import CartItem from "./CartItem/CartItem"
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
import {loadStripe} from '@stripe/stripe-js';
import { makepaymentrequest } from "../../utils/api";



const Cart = ({setshowcart}) => {
    const {cartItems,cartSubtotal} = useContext (Context) 

     const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

    const handlePayment = async ()=>{

        try {
            const stripe = await stripePromise;
            const res = await makepaymentrequest.post("/api/orders", {
            products:cartItems,
        });

        await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id
        })
        } catch (error) {
            console.log(error);
        } 
    }

    return (

        <div className="cart-pannel">
            <div className="opacity-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=>           setshowcart(false)}>
                        <MdClose/>
                        <span className="text">close</span>
                    </span>
                </div>

                {!cartItems?.length && <div className="empty-cart">
                    <BsCartX/>
                    <span>No product in the cart.</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div>}

                {!!cartItems?.length && <>
                 <CartItem/>
                 <div className="cart-footer">
                    <div className="sub-total">
                        <span className="text">Subtotal</span>
                        <span className="text total">&#8377;{cartSubtotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
                    </div>
                 </div>
                </>}

                
            </div>
        </div>
    )
};

export default Cart;

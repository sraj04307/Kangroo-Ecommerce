import { useEffect,useState,useContext } from "react";
import { useNavigate } from 'react-router-dom';


import {TbSearch} from "react-icons/tb"
import {CgShoppingCart} from "react-icons/cg"
import {AiOutlineHeart} from "react-icons/ai"

import Search from"./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {

    const[showcart,setshowcart] = useState(false);
    const[showsearch,setshowsearch] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    return (
        <>
        <header className="main-header">
            <div className="header-content">
                <ul className="left">
                    <li onClick={()=> navigate("/")}>Home</li>
                    <li onClick={()=> navigate("/category/:id")}>Categories</li>
                    <li>About</li>
                </ul>
                <div className="center" onClick={()=> navigate("/")}>KANGROO</div>
                <div className="right">
                    <TbSearch onClick={()=>setshowsearch(true)}/>
                    <AiOutlineHeart/>
                    <span className="cart-icon" onClick={()=>setshowcart(true)}>
                        <CgShoppingCart/>
                        {!!cartCount && <span>{cartCount}</span>}
                    </span>

                </div>
            </div>
        </header>
    {showcart && <Cart setshowcart={setshowcart}/>}   
    {showsearch && <Search setshowsearch={setshowsearch}/>}
 </>
    )
};

export default Header;

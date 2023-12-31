import "./Home.scss";
import {useEffect, useContext} from "react";
import Banner from "./Banner/Banner";
import Category from "../Home/Category/Category";
import Products from "../Products/Products"; 
import {fetchDataFromApi} from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {

    const {categories, setcategories,products, 
        setproducts} = useContext(Context);

    useEffect(()=>{
        getcategories();
        getproducts();
    },[])

    const getcategories=()=>{
        fetchDataFromApi("/api/categories?populate=*").then((res) => {setcategories(res);
             console.log(res)});
    }

    const getproducts=()=>{
        fetchDataFromApi("/api/products?populate=*").then((res) => {setproducts(res);
             console.log(res)});
    }
    

    return <>
        <div>
            <Banner/>
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories}/>
                    <Products products={products} headingText = "Popular Products"/>
                </div>
            </div>
        </div>
    </>
    
    
};

export default Home;

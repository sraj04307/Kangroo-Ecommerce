import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";


const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsam error pariatur! Assumenda magnam numquam quo repellendus nesciunt quos cum recusandae debitis ipsum laboriosam. In doloribus quo velit tempora necessitatibus!
                </p>
                <div className="ctas">
                    <div className="banner-cta">READ MORE</div>
                    <div className="banner-cta v2">SHOP NOW</div>
                </div>
            </div>
            <img className="banner-image" src={BannerImg} alt=""/>
        </div>
    </div>
    )
};

export default Banner;

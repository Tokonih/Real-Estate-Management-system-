import { useState } from "react";
import { IoBed, IoChevronBackOutline, IoChevronForwardOutline, IoGitCompareSharp, IoHeartSharp } from "react-icons/io5";
import { FaShower } from "react-icons/fa";
import { BiShapeSquare } from "react-icons/bi";
import featuredHousesimg1 from "./Imagess/hollywood boulevard.jpeg";
import featuredHousesimg2 from "./Imagess/merrick way.jpeg";
import featuredHousesimg3 from "./Imagess/Villa-in-Coral-Gables-818x417.jpeg";
import featuredHousesimg4 from "./Imagess/feature2.jpg.webp";
import featuredHousesimg5 from "./Imagess/feature3.jpg.webp";
import featuredHousesimg6 from "./Imagess/feature4.webp";

function FeaturedProperty() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        featuredHousesimg1,
        featuredHousesimg2,
        featuredHousesimg3,
        featuredHousesimg4,
        featuredHousesimg5,
        featuredHousesimg6,
    ];
    const names = [
        "Villa on Hollywood Boulevard",
        "Home in Merrick Way",
        "Villa in Coral Gables",
        "Villa in Los Angeles",
        "Town House in Los Angeles",
        "Town House in Los Angeles",
    ];
    const description = [
        "The very best waterfront location in Harbor Islands complete with private dock and amazing water frontage! Offering panoramic water views,…",
        "Enchanting three bedroom, three bath home with spacious one bedroom, one bath cabana, in-laws quarters. Charming living area features fireplace…",
        "Enjoy serenity of Deering Bay whole day from this spectacular North and South, three bedroom, three and a half bath…",
        "The whole lake is not to be drunk. For it was said that it should be free of charge.",
        "The whole lake is not to be drunk. For it was said that it should be free of charge.",
        "The whole lake is not to be drunk. For it was said that it should be free of charge.",
    ];
    const bathroom = [
        "4",
        "3",
        "3.5",
        "2",
        "2",
        "2",
    ];
    const Area = [
        "4530 sq ft",
        "4300 sq ft",
        "3500 sq ft",
        "120 sq ft",
        "120 sq ft",
        "120 sq ft",
    ];
    const prices = [
        "$10.00",
        "$2.00",
        "2.00",
        "2.00",
        "2.00",
    ];

    const goToNextSlide = () => {
        if (currentIndex + 3 >= images.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prevIndex) => prevIndex + 3);
        }
    };

    const goToPreviousSlide = () => {
        if (currentIndex === 0) {
            setCurrentIndex(images.length - 6);
        } else {
            setCurrentIndex((prevIndex) => prevIndex - 3);
        }
    };


    const renderVisibleImages = () => {
        const visibleImages = [];

        for (let i = currentIndex; i < currentIndex + 3; i++) {
            const image = images[i];
            const name = names[i];
            const descriptions = description[i];
            const bathrooms = bathroom[i];
            const Areas = Area[i];
            const Prices = prices[i];
            visibleImages.push(
                <div key={i} className="featured-carousel-property" style={{ boxShadow: "0 0 5px darkgrey", marginTop: "40px" }}>
                    <div>
                        <img src={image} alt="" />
                        <div className="writeup featured-props">
                            <h2>{name}</h2>
                            <p className="house-locations props-desc">{descriptions}</p>
                            <div className="house-features">
                                <div>
                                    <p>Bedrooms</p>
                                    <div>
                                        <p> <IoBed /></p>
                                        <p style={{fontSize: "small", whiteSpace: "nowrap"}}>4</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Bathrooms</p>
                                    <div>
                                        <p><FaShower /></p>
                                        <p style={{fontSize: "small", whiteSpace: "nowrap"}}>{bathrooms}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Area</p>
                                    <div>
                                        <p><BiShapeSquare /></p>
                                        <p style={{fontSize: "small", whiteSpace: "nowrap"}}>{Areas}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add">
                                <div className="price-tags">
                                    <p>For Sale</p>
                                    <h2>{Prices}</h2>
                                </div>
                                <div>
                                    <p><IoHeartSharp className="wishlist"/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return visibleImages;
    };

    const shouldShowPreviousButton = currentIndex !== 0;
    const shouldShowNextButton = currentIndex + 3 < images.length;
    return (
        <div>
            <div className="featured-properties">
                <div className="featured-props-title">
                    <p>Check out</p>
                    <h1>Featured Properties</h1>
                    <p>View list of our short listed properties</p>
                </div>
                <div className="featured-carousel-wrap">
                    <div className="featured-carousel">
                        {shouldShowPreviousButton && (
                            <button className="carousel-prev" onClick={goToPreviousSlide}>
                                <IoChevronBackOutline />
                            </button>
                        )}
                        <div className="carousel">{renderVisibleImages()}</div>
                        {shouldShowNextButton && (
                            <button className="carousel-next" onClick={goToNextSlide}>
                                <IoChevronForwardOutline />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FeaturedProperty;
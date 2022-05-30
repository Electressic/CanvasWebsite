import {useState} from "react";

const ScrollButton = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    };
    return (
        <button className="scrollbtn" onClick={scrollToTop}>
            Back To Top
        </button>
    );
}
export default ScrollButton;
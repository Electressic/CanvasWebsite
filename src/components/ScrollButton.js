import {useState} from "react";

const ScrollButton = () => {
    const scrollToTop = () => {
        document.getElementsByClassName('split right').scrolltop = 0;
    };
    return (
        <button className="scrollbtn" onClick={scrollToTop}>
            Back To Top
        </button>
    );
}
export default ScrollButton;
import headerimgbg from "../images/Headerbild_ObjProg.png";
import {useCallback} from "react";
import {useRecoilState} from "recoil";
import {welcomeBoxState} from "../services/atoms";

function ViewWelcomeBox() {
    const [header, setTextState] = useRecoilState(welcomeBoxState);
    return (
        <div className="vWelcomeBox">
            <img className="headerimage" src={headerimgbg} />
            {header.map((item, index) => (
                <div className="headline" key={index}>
                    {item}
                </div>
            ))}
            <div className="kursname">
            </div>
        </div>
    );
}
export default ViewWelcomeBox;

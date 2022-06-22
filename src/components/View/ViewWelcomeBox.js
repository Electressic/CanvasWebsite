import headerimgbg from "../images/Headerbild_ObjProg.png";
import {useRecoilState, useRecoilValue} from "recoil";
import {kursnameState, welcomeHeaderState} from "../services/atoms";

function ViewWelcomeBox() {
    const [header, setHeaderState] = useRecoilState(welcomeHeaderState)
    const [kname, setKursnameState] = useRecoilState(kursnameState);
    const deletewText = (id) =>  {
        const newwtext = header.filter((_, item) => item !== id);
        setHeaderState(newwtext);
    }
    const deletekname = (id) =>  {
        const newktext = kname.filter((_, item2) => item2 !== id);
        setKursnameState(newktext);
    }
    return (
        <div className="vWelcomeBox">
            <img className="headerimage" src={headerimgbg} />
            <div className="headline">
                {header.map((item, index) => (
                    <div key={index}>
                        {item}
                        <button onClick={() => deletewText(index)}>
                            X
                        </button>
                    </div>
                ))}
            </div>
            <div className="kursname">
                {kname.map((item2, index) => (
                    <div key={index}>
                        {item2}
                        <button className="deletebutton" onClick={() => deletekname(index)}>
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ViewWelcomeBox;

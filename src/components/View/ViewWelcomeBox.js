import test from "../images/background.png";
import {useCallback} from "react";

function ViewWelcomeBox({welcomeText, setWelcomeText, kursName, setKursName}) {
    const handleWelcomeText = useCallback(event => {
        setWelcomeText(event.target.value)
    }, [setWelcomeText])
    const handleKursName = useCallback(event => {
        setKursName(event.target.value)
    }, [setKursName])

    return (
        <div className="vWelcomeBox">
            <img className="headerimage" src={test} />
            <div className="headline" type="text" onChange={handleWelcomeText} value={welcomeText}>
                {welcomeText ? welcomeText : "BeispielText"}
            </div>
            <div className="kursname" type="text" onChange={handleKursName} value={kursName}>
                {kursName ? kursName : "BeispielText2"}
            </div>
        </div>
    );
}
export default ViewWelcomeBox;

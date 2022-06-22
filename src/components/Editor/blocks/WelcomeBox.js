import {useRecoilState} from "recoil";
import {kursnameState, welcomeHeaderState} from "../../services/atoms"
import {useState} from "react";

function WelcomeBox () {
    const [welcomeText, setWelcomeText] = useState("");
    const [kursName, setKursname] = useState("");
    const [header, setTextState] = useRecoilState(welcomeHeaderState);
    const [kname, setKursnameState] = useRecoilState(kursnameState);

    const addText = (e) => {
        e.preventDefault()
        var wText = document.getElementById("1");
        var wKursname = document.getElementById("2");
        if ( wText && wText.value) {
            setTextState([...header, welcomeText]);
            setWelcomeText("");
        }
        if ( wKursname && wKursname.value) {
            setKursnameState([...kname, kursName]);
            setKursname("");
        }
    }
    return (
        <div className="container">
            <form name="welcomeBox">
                <div className="field">
                    <label>Headline:</label>
                    <input
                        type="text"
                        id="1"
                        value={welcomeText}
                        placeholder="Willkommen"
                        onChange={(e) => setWelcomeText(e.target.value)}
                    />
                    <label>Kursname:</label>
                    <input
                        type="text"
                        id="2"
                        value={kursName}
                        placeholder="Kursname"
                        onChange={(e) => setKursname(e.target.value)}
                    />
                    <button onClick={addText}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default WelcomeBox;

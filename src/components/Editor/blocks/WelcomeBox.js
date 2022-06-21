import {useRecoilState} from "recoil";
import {welcomeBoxState} from "../../services/atoms"
import {useState} from "react";

function WelcomeBox () {
    const [welcomeText, setWelcomeText] = useState("");
    const [kursName, setKursname] = useState("");
    const [header, setTextState] = useRecoilState(welcomeBoxState)
    const addText = (e) => {
        e.preventDefault()
        setTextState([...header, welcomeText]);
        setWelcomeText("");
    }
    const deleteText = (id) =>  {
        const newtext = header.filter((_, item) => item !== id);
        setTextState(newtext);
    }
    return (
        <div className="container">
            <form>
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
                    <button onClick={() => deleteText()}>
                        X
                    </button>
                </div>
            </form>
        </div>
    );
}
export default WelcomeBox;

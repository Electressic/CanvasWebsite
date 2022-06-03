import {useContext} from "react";
import {context} from "../../Layout1";

function WelcomeBox ({kursName, setKursName}) {
    const {welcomeText} = useContext(context)
    const onSubmit = (e) => {
        e.preventDefault()

        welcomeText('')
        setKursName('')
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
                        onChange={(e) => welcomeText(e.target.value)}
                    />
                    <label>Kursname:</label>
                    <input
                        type="text"
                        id="2"
                        value={kursName}
                        placeholder="Kursname"
                        onChange={(e) => setKursName(e.target.value)}
                    />
                    <button onClick={onSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default WelcomeBox;

import rakete from "../images/rakete.png";
import {useCallback} from "react";

function ViewKurseinstieg ({kursBeschreibung, setKursbeschreibung}) {
    const handleKursbeschreibung = useCallback(e => {
        setKursbeschreibung(e.target.value)
    }, [setKursbeschreibung])

    return (
        <div className="vKurseinstieg">
            <img className="rakete" src={rakete} />
            <h1 className="kurseinstiegtitle">
                Kurseinstieg
            </h1>
            <div className="kursbeschreibung" onChange={handleKursbeschreibung} value={kursBeschreibung} >
                {kursBeschreibung ? kursBeschreibung :"BesipielText3"}
            </div>
            <button className="modulbutton">
                Direkt zu den Modulen
            </button>
        </div>
    );
}
export default ViewKurseinstieg;

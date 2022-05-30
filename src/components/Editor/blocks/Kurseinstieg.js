import {useCallback} from "react";

function Kurseinstieg({kursBeschreibung, setKursbeschreibung}) {
    const onSubmit = (e) => {
        e.preventDefault()
        setKursbeschreibung('')
        console.log(kursBeschreibung)
    }
    const handleKursbeschreibung = useCallback(e => {
        setKursbeschreibung(e.target.value)
    }, [setKursbeschreibung])
    return (
      <div className="container">
          <label>Kursbeschreibung:</label>
          <textarea
              id="beschreibung"
              value={kursBeschreibung}
              placeholder="test"
              onChange={(e) => setKursbeschreibung(e.target.value)}
          />
          <button onClick={onSubmit}>
              Submit
          </button>
      </div>
    );
}
export default Kurseinstieg;

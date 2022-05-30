import React, {useState} from "react";
import WelcomeBox from "./blocks/WelcomeBox";
import Kurseinstieg from "./blocks/Kurseinstieg";


function Editor ({welcomeText, setWelcomeText,kursName, setKursName, kursBeschreibung, setKursbeschreibung}){
    const [showWelcomeBox, setShowWelcomeBox] = useState(false);
    const [showDescriptionBox, setShowDescriptionBox] = useState(false);
    const [showModulplan, setShowModulplan] = useState(false);
    return (
      <div className="navbar">
          <ul>
              <li onClick={() => setShowWelcomeBox(!showWelcomeBox)}>
                  WelcomeBox
              </li>

              {showWelcomeBox &&
                  <WelcomeBox
                      welcomeText={welcomeText}
                      setWelcomeText={setWelcomeText}
                      kursName={kursName}
                      setKursName={setKursName}
                  />
              }

              <li onClick={() => setShowDescriptionBox(!showDescriptionBox)}>
                  Kurseinstieg
              </li>

              {showDescriptionBox &&
                  <Kurseinstieg
                      kursbeschreibung={kursBeschreibung}
                      setKursbeschreibung={setKursbeschreibung}
                  />}

              <li onClick={() => setShowModulplan(!showModulplan)}>
                  Modulplan
              </li>
          </ul>
      </div>
    );
}
export default Editor;

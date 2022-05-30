import React, {useState} from "react";
import WelcomeBox from "./blocks/WelcomeBox";
import Kurseinstieg from "./blocks/Kurseinstieg";
import Modulplan from "./blocks/Modulplan";
import Overview from "./blocks/Overview";
import CanvasNeu from "./blocks/CanvasNeu";

function Editor ({
                     welcomeText, setWelcomeText,
                     kursName, setKursName,
                     kursBeschreibung, setKursbeschreibung,
                     modulplan, setModulplan,
                     ovDuration, setOvDuration,
                     ovTitle, setOvTitle,
                     ovChapter, setOvChapter})
{
    const [showWelcomeBox, setShowWelcomeBox] = useState(false);
    const [showDescriptionBox, setShowDescriptionBox] = useState(false);
    const [showModulplan, setShowModulplan] = useState(false);
    const [showOverview, setShowOverview] = useState(false);
    const [showCanvas, setShowCanvas] = useState (false);
    const [showAnsprechperson, setShowAnsprechperson] = useState(false);

    return (
      <div className="navbar">
          <ul className="navbar-ul">
              <li className="navbar-li" onClick={() => setShowWelcomeBox(!showWelcomeBox)}>
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

              <li className="navbar-li" onClick={() => setShowDescriptionBox(!showDescriptionBox)}>
                  Kurseinstieg
              </li>

              {showDescriptionBox &&
                  <Kurseinstieg
                      kursbeschreibung={kursBeschreibung}
                      setKursbeschreibung={setKursbeschreibung}
                  />}

              <li className="navbar-li" onClick={() => setShowModulplan(!showModulplan)}>
                  Modulplan
              </li>

              {showModulplan &&
                  <Modulplan
                      modulplan={modulplan}
                      setModulplan={setModulplan}
                  />}

              <li className="navbar-li" onClick={() => setShowOverview(!showOverview)}>
                  Inhaltsübersicht
              </li>
              {showOverview &&
                  <Overview
                      ovDuration={ovDuration}
                      setOvDuration={setOvDuration}
                      ovTitle={ovTitle}
                      setOvTitle={setOvTitle}
                      ovChapter={ovChapter}
                      setOvChapter={setOvChapter}

                  />}

              <li className="navbar-li" onClick={() => setShowCanvas(!showCanvas)}>
                  Neu bei Canvas
              </li>
              {showCanvas &&
                  <CanvasNeu />
              }
              <li className="navbar-li" onClick={() => setShowAnsprechperson(!showAnsprechperson)}>
                  Ansprechpersonen
              </li>
          </ul>
      </div>
    );
}
export default Editor;

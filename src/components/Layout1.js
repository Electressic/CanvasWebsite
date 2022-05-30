import Editor from "./Editor/Editor";
import ViewWelcomeBox from "./View/ViewWelcomeBox";
import ViewKurseinstieg from "./View/ViewKurseinstieg";
import React from "react";
import {useState} from "react";
import ViewCanvasNeu from "./View/ViewCanvasNeu";
import ViewOverView from "./View/ViewOverView";

function Layout1() {
    const [welcomeText, setWelcomeText] = useState('');
    const [kursName, setKursName] = useState('')
    const [kursBeschreibung, setKursbeschreibung] = useState('');
    const [modulplan, setModulplan] = useState('');
    const [ovDuration, setOvDuration] = useState('');
    const [ovTitle, setOvTitle] =useState('');
    const [ovChapter, setOvChapter] =useState('');

    return (
        <div className="App">
            <div className="split">
                <div className="split left">
                    <Editor
                        welcomeText={welcomeText}
                        setWelcomeText={setWelcomeText}
                        kursName={kursName}
                        setKursName={setKursName}

                        kursBeschreibung={kursBeschreibung}
                        setKursbeschreibung={setKursbeschreibung}

                        modulplan={modulplan}
                        setModulplan={setModulplan}

                        ovDuration={ovDuration}
                        setOvDuration={setOvDuration}
                        ovTitle={ovTitle}
                        setOvTitle={setOvTitle}
                        ovChapter={ovChapter}
                        setOvChapter={setOvChapter}
                    />
                </div>
                <div className="split right">
                    <ViewWelcomeBox
                        welcomeText={welcomeText}
                        setWelcomeText={setWelcomeText}
                        kursName={kursName}
                        setKursName={setKursName}
                    />
                    <ViewKurseinstieg
                        kursBeschreibung={kursBeschreibung}
                        setKursbeschreibung={setKursbeschreibung}
                    />
                    <ViewOverView
                        ovDuration={ovDuration}
                        setOvDuration={setOvDuration}
                        ovTitle={ovTitle}
                        setOvTitle={setOvTitle}
                        ovChapter={ovChapter}
                        setOvChapter={setOvChapter}
                    />
                    <ViewCanvasNeu/>
                </div>
            </div>
        </div>
    );
}
export default Layout1;

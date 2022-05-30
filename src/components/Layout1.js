import Editor from "./Editor/Editor";
import ViewWelcomeBox from "./View/ViewWelcomeBox";
import ViewKurseinstieg from "./View/ViewKurseinstieg";
import React from "react";
import {useState} from "react";

function Layout1() {
    const [welcomeText, setWelcomeText] = useState('');
    const [kursName, setKursName] = useState('')
    const [kursBeschreibung, setKursbeschreibung] = useState('');

    return (
        <div className="App">
            <div className="split">
                <div className="split left">
                    <Editor
                        welcomeText={welcomeText}
                        setWelcomeText={setWelcomeText}
                        kursName={kursName}
                        setKursName={setKursName}
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
                </div>
            </div>
        </div>
    );
}
export default Layout1;

import Editor from "./Editor/Editor";
import ViewWelcomeBox from "./View/ViewWelcomeBox";
import ViewKurseinstieg from "./View/ViewKurseinstieg";
import React, {useState} from "react";
import ViewCanvasNeu from "./View/ViewCanvasNeu";
import ViewOverView from "./View/ViewOverView";
import ScrollButton from "./ScrollButton";
import ViewContacts from "./View/ViewContacts";

export const context = React.createContext(null);

function Layout1() {
    const [welcomeText, setWelcomeText] = useState('');
    const [kursName, setKursName] = useState('')
    const [kursBeschreibung, setKursbeschreibung] = useState('');
    const [modulplan, setModulplan] = useState('');
    const [ovDuration, setOvDuration] = useState('');
    const [ovTitle, setOvTitle] =useState('');
    const [ovChapter, setOvChapter] =useState('');
    const [showCanvas, setShowCanvas] =useState(false);
    return (
        <context.Provider value={(welcomeText)}>
            <div className="App">
                <div className="split">
                    <div className="split left">
                        <Editor
                            kursName={kursName}
                            setKursName={setKursName}

                            kursBeschreibung={kursBeschreibung}
                            setKursbeschreibung={setKursbeschreibung}

                            modulplan={modulplan}
                            setModulplan={setModulplan}

                            showCanvasNeu={showCanvas}
                            setShowCanvasNeu={setShowCanvas}

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
                        <ViewCanvasNeu
                            showCanvas={showCanvas}
                            setShowCanvas={setShowCanvas}
                        />
                        <ViewContacts

                        />
                        <ScrollButton />
                    </div>
                </div>
            </div>
        </context.Provider>
    );
}
export default Layout1;

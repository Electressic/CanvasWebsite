import Editor from "./Editor/Editor";
import ViewWelcomeBox from "./View/ViewWelcomeBox";
import ViewKurseinstieg from "./View/ViewKurseinstieg";
import React, {useState} from "react";
import ViewCanvasNeu from "./View/ViewCanvasNeu";
import ViewOverView from "./View/ViewOverView";
import ScrollButton from "./ScrollButton";
import ViewContacts from "./View/ViewContacts";
import ViewModulplan from "./View/ViewModulplan";

function Layout1() {
    const [kursBeschreibung, setKursbeschreibung] = useState('');
    const [modulplan, setModulplan] = useState('');
    const [ovDuration, setOvDuration] = useState('');
    const [ovTitle, setOvTitle] =useState('');
    const [ovChapter, setOvChapter] =useState('');
    const [showCanvas, setShowCanvas] =useState(false);
    return (
            <div className="App">
                <div className="split">
                    <div className="split left">
                        <Editor

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
                        />
                        <ViewKurseinstieg
                            kursBeschreibung={kursBeschreibung}
                            setKursbeschreibung={setKursbeschreibung}
                        />
                        <ViewModulplan />
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
    );
}
export default Layout1;

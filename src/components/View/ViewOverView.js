import {useCallback} from "react";
import Kapitel1 from "../images/Kapitel1.png";
function ViewOverView ({ovDuration,setOvDuration,
                           ovTitle,setOvTitle,
                           ovChapter,setOvChapter})
{
    const handleOvTitle = useCallback(event => {
        setOvTitle(event.target.value)
    }, [setOvTitle])
    const handleOvChapter = useCallback(event => {
        setOvChapter(event.target.value)
    }, [setOvChapter])
    const handleOvDuration = useCallback(event => {
        setOvDuration(event.target.value)
    }, [setOvDuration])

    return (
        <div className="vOverView">
            <div className="ovgoldcolor">
                1
            </div>
                <img src={Kapitel1} className="kapitel" />
                <h1 className="ovTitle" type="text" onChange={handleOvTitle} value={ovTitle}>
                    {ovTitle}
                </h1>
                <label className="ovChapter" type="text" onChange={handleOvChapter} value={ovChapter}>
                    {ovChapter}
                </label>
                <label className="ovDuration" type="text" onChange={handleOvDuration} value={ovDuration}>
                    {ovDuration}
                </label>
        </div>
    );
}
export default ViewOverView;

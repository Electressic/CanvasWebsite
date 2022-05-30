import backgroundmix from "../images/backgroundmix.png";
import {useCallback} from "react";

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
            <img className="bgmix" src={backgroundmix} />
            <form>
                <div>
                    <button className="btntesting">
                        JOA
                    </button>
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
            </form>
        </div>
    );
}
export default ViewOverView;
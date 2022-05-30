import backgroundg from "../images/backgroundg.png";

function ViewCanvasNeu () {

    return (
        <div className="vCanvasNeu">
            <img className="canvasneubg" src={backgroundg} />
            <h1 className="canvasneutitle">
                Neu bei Canvas?
            </h1>
            <div className="moreinfos" >
                Weitere Informationen zu Canvas finden Sie hier:
            </div>
            <button className="canvasbtn">
                Zu Canvas Modul?
            </button>
        </div>
    );
}
export default ViewCanvasNeu;
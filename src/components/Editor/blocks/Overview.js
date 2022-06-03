import {useState} from "react";

function Overview({ovDuration,setOvDuration,ovTitle,setOvTitle,ovChapter,setOvChapter}) {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    return (
        <div className="container">
                <ul className="overview-ul">
                    <li className="overview-li">
                        <button className="standardbtn" onClick={() => {setShow1(!show1)}}>1</button>
                        {show1 && <form className="dropdown-form">
                            <label>Duration: </label>
                            <input
                                type="text"
                                id="1"
                                value={ovDuration}
                                placeholder="TestDuration"
                                onChange={(e) => setOvDuration(e.target.value)}
                            />
                            <label>Title: </label>
                            <input
                                type="text"
                                id="2"
                                value={ovTitle}
                                placeholder="TestTitle"
                                onChange={(e) => setOvTitle(e.target.value)}
                            />
                            <label>Nuggets: </label>
                            <input
                                type="text"
                                id="3"
                                value={ovChapter}
                                placeholder="TestTitle"
                                onChange={(e) => setOvChapter(e.target.value)}
                            />
                            <button className="submitbtn">Submit</button>
                        </form>
                        }
                    </li>

                    <li className="overview-li">
                        <button className="standardbtn" onClick={() => {setShow2(!show2)}}>2</button>
                        {show2 && <form className="dropdown-form">
                            <label>Duration: </label>
                            <input
                                type="text"
                                id="1"
                                value={ovDuration}
                                placeholder="TestDuration"
                                onChange={(e) => setOvDuration(e.target.value)}
                            />
                            <label>Title: </label>
                            <input
                                type="text"
                                id="2"
                                value={ovTitle}
                                placeholder="TestTitle"
                                onChange={(e) => setOvTitle(e.target.value)}
                            />
                            <label>Nuggets: </label>
                            <input
                                type="text"
                                id="3"
                                value={ovChapter}
                                placeholder="TestTitle"
                                onChange={(e) => setOvChapter(e.target.value)}
                            />
                        </form>
                        }
                    </li>
                    <li className="overview-li">
                        Test3
                    </li>
                    <li className="overview-li">
                        Test3
                    </li>
                    <li className="overview-li">
                        Test3
                    </li>
                    <li className="overview-li">
                        Test3
                    </li>
                    <li className="overview-li">
                        Test3
                    </li>
                    <li className="overview-li">
                        Test3
                    </li>
                </ul>

        </div>
    );
}
export default Overview;
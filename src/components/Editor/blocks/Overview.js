import {useState} from "react";

function Overview({ovDuration,setOvDuration,ovTitle,setOvTitle,ovChapter,setOvChapter}) {
    const [show, setShow] = useState(false);
    return (
        <div className="container">
                <ul className="overview-ul">
                    <li className="overview-li">
                        <button onClick={() => {setShow(!show)}}>1</button>
                        {show && <form className="dropdown-form">
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
                        Test2
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
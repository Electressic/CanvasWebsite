import {useState} from "react";
import WelcomeBox from "./Editor/blocks/WelcomeBox";

function States() {
    const [welcomeText, setWelcomeText] = useState('');

    return(
        <WelcomeBox
            welcomeText={welcomeText}
            setWelcomeText={setWelcomeText}
        />
    )
}

export default States;

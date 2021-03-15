import React,{ useState } from "react";
import { useSpeechSynthesis} from "react-speech-kit";

function Speech(props) {

    const [text, setText] = useState(props.text);
    // const [voiceType, setVoice] = useState(17);

    const { speak } = useSpeechSynthesis();

    return(
        
        <div onClick={() => speak({ text: text })}>
                { props.children }
        </div>
        
    );
}

export default Speech;
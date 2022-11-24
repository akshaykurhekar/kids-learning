import React,{ useEffect, useState } from "react";
import { useSpeechSynthesis} from "react-speech-kit";

function Speech(props) {

    const [text, setText] = useState();
    // const [voiceType, setVoice] = useState(17);

    useEffect(()=>{
        setText(props.text);
    },[props.text])

    const { speak } = useSpeechSynthesis();

    return(
        
        <div onClick={() => speak({ text: text })}>
                { props.children }
        </div>
        
    );
}

export default Speech;
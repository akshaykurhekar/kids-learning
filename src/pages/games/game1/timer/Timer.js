import React from "react";
// import { useHistory} from 'react-router-dom';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./Timer.css";

const Timer = (props) =>{
  
    // const history = useHistory();

    const renderTime = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60)
        const seconds = remainingTime % 60
        if (remainingTime === 0) {
           // history.push('/game');
           props.setTimeRemain(false);
          return <div className="timer">Time Done</div>;
        }
      
        return (
          <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{minutes}:{seconds}</div>
            <div className="text">seconds</div>
          </div>
        );
      };

    return (
    <div className="App">
     
      <div className="timer-wrapper" style={{height:'200px'}}>
        <CountdownCircleTimer
          isPlaying
          duration={20}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          //onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
     
    </div>
  );
}

export default Timer;
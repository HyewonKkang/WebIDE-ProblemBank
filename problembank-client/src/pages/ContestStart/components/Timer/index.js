import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom';

const Timer = (props, { mm, ss }) => {
  const [minutes, setMinutes] = useState(parseInt(40));
  const [seconds, setSeconds] = useState(parseInt(0));

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
            clearInterval(countdown);
            alert("시험이 종료되었습니다!")
            props.history.push({
              pathname: '/contestFinish',
              state: {
                  incorrect: null
              }
          })
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  // const CURRENT_DATE = new Date();
  // console.log(CURRENT_DATE);

  return (
    <div>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default withRouter(Timer);
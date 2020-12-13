import React, { useState, useEffect } from 'react'

const Timer = ({startTime, getSnapShot, captureFinishTime}) => {
    const [time, updateTime] = useState({ mins: "00", secs: "00" });

    // set the interval, whenerver the start time changes(on new game)
    useEffect(() => {
        const it = setInterval(() => {
            const now = new Date().getTime();
            updateTime({
                ...time,
                mins: getMinutes(now - startTime),
                secs: getSecond(now - startTime)
            })
        }, 1000);
        return () => {
            clearInterval(it);
        }
    }, [startTime]);

    // send the snapshot 
    useEffect(() => {
        if(getSnapShot) {
            console.log("Get snapshot");
            captureFinishTime(`${time.mins} : ${time.secs}`);
            getSnapShot = false;
        }
    }, [getSnapShot]);

    // calc seconds
    const getSecond = (timeDiff) => {
        timeDiff = Math.floor((timeDiff % (1000 * 60)) / 1000)
        return formatTime(timeDiff);
    }

    // calc minutes 
    const getMinutes = (timeDiff) => {
        timeDiff = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        return formatTime(timeDiff);
    }

    const formatTime = (timeDiff) => timeDiff.toString().padStart(2, '0');

    return (
        <div className="timer">
            <h3 className="time">{`${time.mins} : ${time.secs}`}</h3>
        </div>
    )
}

export default Timer

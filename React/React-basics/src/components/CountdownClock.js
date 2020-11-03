
import React, { Component } from 'react'

const text = {
      color: 'blueviolet', 
      textDecoration: 'underline',
}

class CountdownClock extends Component {
      constructor(props) {
            super(props)
            this.state = {
                   days : 0, 
                   hours : 0,
                   minutes : 0,
                   seconds : 0,
            }
      }
      
      componentDidMount() {
            this.timerID = setInterval(() => {
                  this.updateCountdown()
            }, 1000)
      }
      componentWillUnmount() {
            clearInterval(this.timerID)
      }

      updateCountdown() {
            this.timediff = this.props.target - new Date(); 
            const timeArr = this.dhm(this.timediff);
            this.setState({
                  days: timeArr[0],
                  hours: timeArr[1],
                  minutes: timeArr[2],
                  seconds: timeArr[3]
            })
      }

      dhm(ms){
            const days = Math.floor(ms / (24*60*60*1000));
            const daysms=ms % (24*60*60*1000);
            const hours = Math.floor((daysms)/(60*60*1000));
            const hoursms=ms % (60*60*1000);
            const minutes = Math.floor((hoursms)/(60*1000));
            const minutesms=ms % (60*1000);
            const sec = Math.floor((minutesms)/(1000));
            return [days, hours, minutes, sec]
      }

      render() {
            const {days, hours, minutes, seconds} = this.state;
            return (
                  <div>   
                        <h1>{this.props.event}</h1>
                        <div style={text}>
                              <h1>{days} DAYS</h1>
                              <h2>{hours} HRS</h2>
                              <h3>{minutes} MINS</h3>
                              <h4>{seconds} SECS</h4>
                              <h5>to</h5>
                              <h3>{this.props.target.toLocaleString()}</h3>
                              {this.state.timediff}
                        </div>
                  </div>
            )
      }
}

export default CountdownClock

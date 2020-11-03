
import React, { Component } from 'react'

class Form extends Component {
      constructor(props) {
            super(props)
      
            this.state = {
                  username: '',
                  yourStory: '',
                  car: 'audi',
            }
      }
      
      handleUsernameChange = (event) => {
            this.setState({
                  username: event.target.value
            })
      }
      handleYouStory = (event) => {
            this.setState({
                  yourStory: event.target.value
            })
      }
      handleChangeCar = (event) => {
            this.setState({
                  car: event.target.value
            })
      }
      handleSubmit = (event) => {
            // page does not refresh
            event.preventDefault();
            console.log("submitted")
            alert("Form data can be obtained from this.state")
      }

      render() {
            // destructure the this.state object
            const {username, yourStory, car}= this.state
            
            return (
                  // form can be submitted using this too
                  <form /*onSubmit={this.handleSubmit}*/>
                        <div>
                              <label>Username</label>
                              <input 
                                    type='text' 
                                    value={username} 
                                    onChange={this.handleUsernameChange}
                              />
                        </div>
                        <br />
                        
                        <div>
                              <label>Your Story</label>
                              <textarea 
                                    value={yourStory}
                                    onChange={this.handleYouStory}
                              />
                        </div>
                        <br />
                        
                        <label>Chooose a car:</label>
                        <select 
                              name="cars" 
                              value={car} 
                              onChange={this.handleChangeCar}
                        >
                              <option value="volvo">Volvo</option>
                              <option value="saab">Saab</option>
                              <option value="mercedes">Mercedes</option>
                              <option value="audi">Audi</option>
                        </select>

                        <button 
                              type='submit'
                              onClick={this.handleSubmit}
                        >Submit</button>
                 </form>
            )
      }
}

export default Form

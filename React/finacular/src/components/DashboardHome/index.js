import React from 'react'
import SideBox from '../SideBox';
import learnImg from '../images/pic6.png'
import trackImg from '../images/pic7.png'
import Chart from '../Charts'
import CenterBox from '../CenterBox'
import statsImage from '../images/pic5.png';
import growthImage from '../images/pic3.png'; 
import cycleImage from '../images/pic4.png';
import TopNav from './TopNav';

function Dashboard() {
    return (
        <>
            <TopNav />
            <div className="main-container">   
            <div className="sidenav-left">
                <div className="side-link-container">
                    <div className="side-link" style={{background: 'linear-gradient(45deg, var(--color-2), var(--color-1))', color: 'white'}}>
                        <i style={{color: 'white'}} className="fa fa-th-large" aria-hidden="true"></i>
                        <p>Dashboard</p>
                    </div>
                    <div className="side-link">
                        <i className="fa fa-pie-chart" aria-hidden="true"></i>
                        <p>Assets</p>
                    </div>
                    <div className="side-link">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                        <p>Tracker</p>
                    </div>
                    <div className="side-link">
                        <i className="fa fa-calculator" aria-hidden="true"></i>
                        <p>Planning & Advisory</p>
                    </div>
                </div>   
                <div className="side-link-container">
                    <div className="side-link" style={{background: 'linear-gradient(45deg, var(--color-2), var(--color-1))', color: 'white', borderRadius: 0}}>
                        <i style={{color: 'white'}} className="fa fa-user" aria-hidden="true"></i>
                        <p>Tom Cruise</p>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="chartbox">
                    <Chart duration={ 20 } />
                </div>
                <div className="infobox-container">
                    <CenterBox 
                      title = "Asset Balance"
                      heading = "Enter Amount"
                      value = "$1,25,000"
                      status = "Last Updated: 1 Dec"
                      image = { statsImage }
                    />
                    <CenterBox 
                      title = "Growth Rate"
                      heading = "Enter Growth Rate"
                      value = "9.3%"
                      status = "Inflation 6%"
                      image = { growthImage }
                    />
                    <CenterBox 
                      title = "Major Invetment"
                      heading = "Returns per month"
                      value = "$1,25,000"
                      status = ""
                      image = { statsImage }
                    />
                    <CenterBox 
                      title = "Financial Independence"
                      heading = "Age"
                      value = "45 years"
                      status = "Optimized Yes|No"
                      image = { statsImage }
                    />
                    <CenterBox 
                      title = "Average Expenses"
                      heading = "Amount"
                      value = "$25,000"
                      status = "3 months average $4000"
                      image = { cycleImage }
                    />  
                </div>
            </div>
            
            <div className="sidenav-right">
                <SideBox 
                  buttonText = "Learn Now"
                  image = { learnImg }
                />
                <SideBox 
                  buttonText = "Track Now"
                  image = { trackImg }
                />
            </div>
        </div>
        </>
    )
}

export default Dashboard

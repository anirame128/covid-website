import React, {Component} from 'react'
import './TitleInfo1.css'

class TitleInfo1 extends Component {
    render() {
        return (
            <div className="move-adjust">
            <div className="card text-white bg-primary mb-3" style={{width:"400px" }}>
                <div className="card-header">Website Goal</div>
                    <div className="card-body">
                        <h5 className="card-title">To Inform and Learn</h5>
                <p className="card-text">This website was created to provide insight about the Covid-19 virus as well as how to stay safe during these unfamiliar times. 
                The website is purely for information to inform those that want to learn more about the pandemic. Any sources used are credited towards their creators</p>
                </div>
            </div>
            </div>
        )
    }
}

export default TitleInfo1;
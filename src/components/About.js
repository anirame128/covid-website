import React, {Component} from 'react'
import './About.css'

class About extends Component {

    constructor() {
        super()
        this.state = {
            message: ''
        }
    }

    changeInitial() {
        this.setState({
            message: <div className="adjust-card"><div className="card"  style={{width: "602px", float: "right", right: "20px"}}>
                 <img  src="covid-19 logo.png" alt="Card image cap" style={{width:"602px"}}></img>
            <div className="card-body" >
            <p className="card-text" >The above image shows the Covid-19 structure provided by the CDC, Centers for Disease Control and Prevention.
            The biology and Covid-19 virus structure is still in development as researchers do not completely understand what makes up the virus. 
            The general overview of the virus are RNA strands enclosed in protein. This is enveloped in a lipid membrane that serves as regulatory agents in the cell growth and adhesion of the virus.
            Strewn about the lipid membrane are spike protein, which makes this virus efficient in invading human cells making this virus highly pathogenic.   </p>
            </div>
          </div>
          </div>
        })
    }
    
    // refreshPage() {
    //     this.setState({
    //     action: window.location.reload(false)
    //     })
    // }
    render() {
        return(
            <div>
              <button className="btn btn-primary" onClick={() => {this.changeInitial();}}>Covid-19 Virus</button>   
              <div>{this.state.message}</div>
            </div>
        )
    }
}

export default About
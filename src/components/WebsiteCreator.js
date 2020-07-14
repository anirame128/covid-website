import React, {Component} from 'react'

class WebsiteCreator extends Component  {

        constructor() {
            super()
            this.state = {
                message: ''
            }
        }

    
        changeInitial() {
            this.setState({
                message:           <div className="top-adjust">
                <div className="card text-white bg-primary mb-3" style={{width:"400px"}}>
      <div className="card-header">Website Creator</div>
      <div className="card-body">
        <h5 className="card-title">Anirudh Ramesh</h5>
        <p className="card-text"> School: BHS </p>
        <p className="card-text"> Interests: Computer Science </p>
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
                  <button className="btn btn-primary" onClick={() => {this.changeInitial();}}>Website Creator</button>   
                  <div>{this.state.message}</div>
                </div>
            )
        }
    }
    
    export default WebsiteCreator 

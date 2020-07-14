import React, { Component } from 'react'
import './Home.css'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            action:''
        }
    }

    // changeState() {
    //     this.setState({
    //         message:<div>
    //                     <div class="card">
    //                     <div class="card-header">Covid-19</div>
    //                     <div class="card-body" >
    //                         <h5 class="card-title">The fight against the Cornavirus</h5>
    //                         <p class="card-text">Starts with you</p>
    //                     </div>
    //                     </div>
    //                 </div>
    //     }) 
    // }
    refreshPage() {
        this.setState({
        action: window.location.reload(false)
        })
    }
    render() {
        return(
            <div>
            <div>{this.state.message}</div>  
              <button className="btn btn-primary" onClick={() => this.refreshPage()}>Home</button> 
            </div>
        )
    }
}

export default Home
import React, {Component} from 'react'
import './Contact.css'

class Contact extends Component {
    constructor() {
        super() 
        this.state = {
            message:''
        }
    }

    changeState() {
        this.setState({
            message:<div className="move-down"><div className="card">
            <div className="card-header">
              Contact Info
            </div>
            <div className="card-body">
              <h5 className="card-title">Covid-19 Links</h5>
              <p className="card-text">Following links are for more information on Covid-19</p>
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" class="btn btn-primary">CDC</a>
              <div className="space-down">
              <a href="https://www.worldometers.info/coronavirus/" class="btn btn-primary" >Covid-19 Statistics</a>
              </div>
              <div className="space-down">
              <a href="https://www.nytimes.com/2020/05/31/world/coronavirus-news.html?action=click&auth=login-google&context=storylines_menu&module=styln-coronavirus-national&pgtype=Article&region=TOP_BANNER&state=default&variant=show" class="btn btn-primary" >New York Times Live Updates</a>
              </div>
              <div className="space-down">
              <a href="https://www.fidelitycharitable.org/articles/three-ways-you-can-help-during-the-covid-19-pandemic.html" class="btn btn-primary" >How you can help</a>
              </div>
            </div>
          </div>
          </div>
        })
    }
    render() {
        return (
            <div>
               <button className="btn btn-primary" onClick={() => {this.changeState()}}>Contact</button>  
               <div>{this.state.message}</div>
            </div>
        )
    }
}

export default Contact
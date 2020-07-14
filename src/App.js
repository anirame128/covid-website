import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Video from './components/Video';
import TitleInfo1 from './components/TitleInfo1';
import TitleInfo2 from './components/TitleInfo2';
import Image from './components/Image';
import WebsiteCreator from './components/WebsiteCreator';
import LiveData from './components/LiveData/LiveData';

import { fetchData } from './api'



class App extends Component {
  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }
  render() {
    const { data } = this.state;

  return (
    <div className="App">
        <Title/>
      <div className="Component">
        <About/>
      </div>
      <div >
        <LiveData data={data}/>
      </div>
      <div className="Align">
        <Contact/>
      </div>
      <div className="Align-up">
        <Home/>
      </div>
      <div className="Align-video">
        <Video/>
      </div>
      <div className="Align-button">
        <WebsiteCreator/>
      </div>
      <div>
      <Image/>
      </div>
      <div>
        <TitleInfo1/>
      </div>
      <div >
      {/* <TitleInfo2/> */}
      </div>
      </div>
  );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Slider from './Slider/Slider';
import HomeIntro from './HomeIntro/HomeIntro';
import About from './About/About';
import Woodwork from './Woodwork/Woodwork';
import Artwork from './Artwork/Artwork';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          showWoodwork:true
        }
        this.toggleWork = this.toggleWork.bind(this);
    }
    toggleWork = () => {
      this.setState((prevState, props) => ({
        showWoodwork: !prevState.showWoodwork
      }));
    }
    render(){
      let showWork = <></>;
      if(this.state.showWoodwork){
        showWork = <Woodwork/>
      }else{
        showWork = <Artwork/>
      }
        return(
          <div className="App">
            <HomeIntro/>
            <About/>
            <Slider toggle={this.toggleWork}/>
            {showWork}
          </div>
        );
    }
}
export default App;
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
        this.showWood = this.showWood.bind(this);
        this.showArt = this.showArt.bind(this);
    }
    showWood = () => {
      this.setState({
        showWoodwork: true
      });
    }
    showArt = () => {
      this.setState({
        showWoodwork: false
      });
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
            <Slider showWood={this.showWood} showArt={this.showArt}/>
            {showWork}
          </div>
        );
    }
}
export default App;
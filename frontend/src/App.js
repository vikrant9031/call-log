import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Register from './Register';
import Signin from './signin';
import Pop from './pop';
import Contacts from './contacts';
import Info from './info';
import Forgot from './forgot';
import Cardlist from './cardlist';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component {

constructor(props){
  super(props);
  this.state={

     route:'home',
     name:'',
     users:[]
  }
}
    componentDidMount=()=>{
      if (sessionStorage.getItem('id')) {
        this.setState({route:'contact'});
      }else{
        this.setState({route:'home'});
      }
    }

onRouteChange=(random)=>{
  this.setState({route:random});
}

onNameChange=(random)=>{
  this.setState({name:random});
}

  render() {
    return (
       
      <div>
      {

       this.state.route ==='register' 
         ?
        <Register register={this.onRouteChange} />
        :(
          this.state.route ==='signin'
         ?
          <Signin sign={this.onRouteChange} onName={this.onNameChange}/>
 
         : (
            this.state.route ==='home'
            ?
            <Pop pop={this.onRouteChange}/>
            :(
              this.state.route ==='contact' 
              ?
                <Contacts contact={this.onRouteChange} name={this.state.name}/>
              :(
                this.state.route==='forgot'
                ?
                <Forgot forgot={this.onRouteChange}/>
                :
                
                <Info info={this.onRouteChange} />

                )
                  
              )
            
     )
  )
    
  
   }
     </div>
    );
  }
}

export default App;

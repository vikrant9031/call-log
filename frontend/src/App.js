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

class App extends Component {

constructor(props){
  super(props);
  this.state={
     route:'home',
     name:'',
     users:[]
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

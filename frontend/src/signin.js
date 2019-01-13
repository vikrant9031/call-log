import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import 'tachyons' ;
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Signin extends React.Component{
   
   constructor(props){
   	super(props);
   	this.state={
   		name:'unknown',
   		password:'',
   		emailError:'                                      ',
   		message:'',
   		opactity:'none'
   	}
   }


   onInputName=(event)=>{
   	 this.setState({name:event.target.value})
   }
 
   onInputPassword=(event)=>{
   	 this.setState({password:event.target.value})
   }
   onInputMessage=()=>{
   	 this.setState({message:'hello'})
   }

  validate=()=>{

  let isError=false;
  const errors={};
  if(this.state.password.length===0 && this.state.name.length===0){
      isError= true;
      errors.emailError="Please fill the Email & password fields !";
     }
     else if(this.state.password===this.state.name){
    isError= true;
       errors.emailError="Email & password can't be the same !";
     }
  else if(this.state.name.length<8){
    isError= true;
    errors.emailError="Your password should have atleast 8 characters!";
  }
  if(isError){
    this.setState({
      ...this.state,
      ...errors
    });
  }
  return isError;
 }

onFillentry=()=>{

        const err=this.validate();
        console.log(this.state.emailError);
        if(!err){
	    fetch('https://obscure-ocean-94951.herokuapp.com/signin',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:this.state.name,
            password:this.state.password
   })
    })
        .then(function(response){
        return	response.json();
        }).
        then(data=>{
        if(data){
          sessionStorage.setItem('id',JSON.stringify(data[0].id));
        	this.props.sign('contact');
        }/*else if(data ==='error'){
        		this.onInputMessage;
        }*/
      
})
          console.log(this.state.name);
	        this.props.onName(this.state.name);
}
      
}

	render(){
		 const {sign,onName}=this.props;
		return (

      
 
		<Bounce left cascade>
	<div id="signinbox">
<article className="o-90    pa4 black-80   bw5 br4 pa4  mw6 " >
  <form className="measure center" id="seed">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend id="signintop">Sign In</legend>
      <div className="mt3">
        <label id="labelemail" className="db fw6 lh-copy f6" for="email-address" >Email</label>
        <input type="email" onChange={this.onInputName} id="email" name="email-address"  id="email-address" />
      </div>
      <div className="mt3">
        <label id="labelpassword" className="db fw6 lh-copy f6" for="password" >Password</label>
        <input type="password"  onChange={this.onInputPassword} id="password" name="password"  id="password" />
      </div>
      <label id="checkbox"><input type="checkbox" /> Remember me</label>
    </fieldset>
    <div>
      <div id="signinbtn" onClick={this.onFillentry}>signIn</div>
    </div>
    <div class="lh-copy mt3">
      <p  id="signup"  onClick={()=>sign('register')} className="f6 link grow  white db pointer">Sign up</p>
      <a  id="forgotpass" href="#0" onClick={()=>sign('forgot')} className="f6 link grow underline white db">Forgot your password?</a>
    </div>
    <div style={{display: this.state.opacity}}>{this.state.message}
    </div>
    <div>
    <label style={{paddingLeft:20,width:380 ,height:28,marginLeft:0 ,marginTop:25,color:'#E7040F'}} >{this.state.emailError}</label>
  </div>
  </form>
  
</article>
</div>
</Bounce>


		);

	}
	
}
 export default Signin;
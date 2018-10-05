import React from 'react';
import 'tachyons' ;
import Zoom from 'react-reveal/Zoom';
import Check from './popup';

 class Register extends React.Component{

    constructor(props){
    super(props);
    this.state={
      email:'',
      emailError:'                   INPUT CREDENTIALS           ',
      password:''
    }
   }

  OnEmailChange=(event)=>{
    this.setState({email:event.target.value})
    console.log(this.state.email);
  }

  OnPasswordChange=(event)=>{
    this.setState({password:event.target.value})
    console.log(this.state.password);
  }

 validate=()=>{

  let isError=false;
  const errors={};
  if(this.state.email.length<8){
    isError= true;
    errors.emailError="Your password should have atleast 8 char.";
  }else if(this.state.password===this.state.name){
    isError= true;
       errors.emailError="Email & password can't be the same";
     }else if(this.state.password.length===0 && this.state.name.length===0){
      isError= true;
      errors.emailError="Please fill the Email & password fields .";
     }
  if(isError){
    this.setState({
      ...this.state,
      ...errors
    });
  }
  return isError;
 }

  onRegister=()=>{
        const err=this.validate();
        console.log(this.state.emailError);
        if(!err){
        fetch('https://damp-lake-30158.herokuapp.com/register',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email:this.state.email,
             password:this.state.password

   })
    }).then(function(response){
        return  response.json();

        })
        .then(data=>{
      if(data==='successfully'){
        console.log("successfully inserted");
        this.props.register('home');
      }
      else{
        console.log("error in insertion");
         this.props.register('register');
      }
    })
      }
 }

	render(){

    const {register}=this.props;

    return (
    <Zoom right cascade>
    <div  className="registerpos">
    <article className="o-90    pa4 black-80   bw5 br4 pa4  mw6 " >
  <form action="sign-up_submit" method="get" accept-charset="utf-8"  id="grass">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend id="Registerlabel" className="ph5 mh5 i f3  fw6" >Register</legend>
      <div className="mt3">
        <label className="db fw4 lh-copy f6 pointer" for="email-address " style={{color:'white'}}>Email address</label>
        <input  onChange={this.OnEmailChange} Title ="email"
        className="field pa2 input-reset ba bg-transparent w-100 measure ttc  bg-transparent hover-bg-black hover-white w-100" 
        type="email" name="email-address"  id="regemail-address" />
      </div>
      <div class="mt3">
        <label className="db fw4 lh-copy f6 pointer" for="password" style={{color:'white'}}>Password</label>
        <input  onChange={this.OnPasswordChange}  
        className="field b pa2 input-reset ba bg-transparent ttc  bg-transparent hover-bg-black hover-white w-100" 
        type="password" name="password"  id="regpassword" ></input>
      </div>
    </fieldset>
    <div className="mt3"><div onClick={this.onRegister} id="regsignup" className="b  ph3 pv2 hover-bg-green bg-white input-reset ba b--black bg-transparent grow pointer f6"  value="Sign Up">Sign up</div></div>
      <div>
  <textarea id="textarea" className="bg-silver" value={this.state.emailError}/>
  </div>
  </form>
</article>
</div>
</Zoom>

    );
  }
}
 export default Register;
import React from 'react';
import './forgot.css';

class Forgot extends React.Component{

 constructor(props){
 	super(props);
 	this.state={
 		email:'',
    security:''

 	}
 }

onEmailChange=(event)=>{
	this.setState({email:event.target.value});
	console.log(event.target.value);
}
OnSecurity=(event)=>{
  this.setState({security:event.target.value});
}

onCheck=()=>{
  var passwordfield= document.getElementById('passwordField');
	 fetch('https://limitless-oasis-36046.herokuapp.com/forgot',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email :this.state.email,
            security:this.state.security

   })
    }).then(response=>{
   	  return response.json();
   	
   }).then(data=>{
    passwordfield.innerHTML=data ;
  console.log(data);
   		console.log(this.state.password);
   })
    
}
	render(){

   const {forgot}=this.props;

		return (
		<div> 
		<article id="forgothome" onClick= {()=>forgot('home')} className="f2 fl w-3 bg-light-pink  dim pointer hover-dark-blue mv1 ph5 right shadow-3">Home</article>
		<form className="pt5 pl3 black-80 o-90 ba  shadow-3 b--dashed b--blue center mv0 dt w-100 br4 mw5">
  <div>
   <legend id="recover" className="f1  mh5 fw6 ph0 mh5 "> Recover Password</legend>
    <label id="forgotemail" for="comment" className="f3 b db mb2">Email <span className="normal black-60">(Required)</span></label>
    <textarea id="forgotemailfield" onChange={this.onEmailChange}  id="comment" name="comment" className="db grow border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
   </div>
    <div>
     <label id="forgotsecurity" for="comment" className="f3 b db mb2">Security Code<span className="normal black-60">(Required)</span></label>
    <textarea   id="comment" className="db grow border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"  type="text" onChange={this.OnSecurity}/>
    <label  id="forgotpassword"for="comment" className="f3 b db mb2">Password</label>
    <div   className="db grow border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" id="passwordField"></div>
   </div>
   <div>
   <p  id="forgotsubmit" onClick={this.onCheck} className="f5 dib link grow pointer left-1  br3 ph5 mh6 mv3 pv2 mb2  white bg-dark-blue">Submit</p>
   </div>
</form>


</div>
		);
	}
	
}
 export default Forgot;
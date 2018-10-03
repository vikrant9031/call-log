import React from 'react';

class Forgot extends React.Component{

 constructor(props){
 	super(props);
 	this.state={
 		password:'',
 		email:''

 	}
 }

onEmailChange=(event)=>{
	this.setState({email:event.target.value});
	console.log(event.target.value);
}

onCheck=()=>{
	 fetch('http://localhost:3000/forgot',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email :this.state.email

   })
    }).then(response=>{
   	  return response.json()
   	  console.log(response);
   }).then(data=>{
   	this.setState({password:data})
   		console.log(this.state);
   })
    
}
	render(){

   const {forgot}=this.props;

		return (
		<div> 
		<article  onClick= {()=>forgot('home')} className="f2 fl w-3 bg-light-pink  dim pointer hover-dark-blue mv1 ph5 right shadow-3">Home</article>
		<form className="pa5 black-80 o-90 ba  shadow-3 b--dashed b--blue center mv0 dt w-100 br4 mw5">
  <div>
   <legend className="f1  mh5 fw6 ph0 mh5 "> Recover Password</legend>
    <label  for="comment" className="f3 b db mb2">Email <span className="normal black-60">(Required)</span></label>
    <textarea onChange={this.onEmailChange}  id="comment" name="comment" className="db grow border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
   </div>
    <div>
    <label for="comment" className="f3 b db mb2">Password<span className="normal black-60">(optional)</span></label>
    <input  className="db grow border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"  type="text" Value={this.state.password} />
   </div>
   <div>
   <p   onClick={this.onCheck} className="f5 dib link grow pointer left-1  br3 ph5 mh6 mv3 pv2 mb2  white bg-dark-blue">Submit</p>
   </div>
</form>


</div>
		);
	}
	
}
 export default Forgot;
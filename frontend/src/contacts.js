import React from 'react';
import ReactPlayer from 'react-player';
import 'tachyons';
import './contact.css';

class Contacts extends React.Component{
  constructor(props){
    super(props);
    this.state={
      src:'https://pbs.twimg.com/profile_images/681337437226938368/31sRHb4V_400x400.jpg',
      name:'',
      
      work:'',
      mobile:'',
      email:'',
      sid:sessionStorage.getItem('id')
      
    }
  this.onFile = this.onFile.bind(this);
  }

  onPut=(event)=>{
    this.setState({src:event.target.value});
    console.log(event.target.files);
  }

  onNameChange=(event)=>{
  this.setState({name:event.target.value})
 }
  onCompanyChange=(event)=>{
  this.setState({company:event.target.value})
 }
  onWorkChange=(event)=>{
  this.setState({work:event.target.value})
 }
  onMobileChange=(event)=>{
  this.setState({mobile:event.target.value})
 }
  onEmailChange=(event)=>{
  this.setState({email:event.target.value})
 }
 onSignout =(event)=>{
  this.props.contact('home');
  sessionStorage.clear();

 }

onSubmit=()=>{
  const data = new FormData();
  data.append('name',this.state.name);
  
    data.append('work',this.state.work);
     data.append('mobile',this.state.mobile);
     data.append('email',this.state.email);
     data.append('id',sessionStorage.getItem('id'));
    fetch('https://obscure-ocean-94951.herokuapp.com/contact',{
        method:'post',
       
        body:data
    }).then(function(response){
         return response.json();
    }).then(data=>{
        if(data==='successfully'){
          console.log("successfully inserted");
          console.log(sessionStorage.getItem('id'));
          this.props.contact('info');
        }else{
          console.log("error submission");
        }
    })
}

onFile=()=>{
  const data=new FormData;
  var a= document.getElementById('fileid');
  data.append('file',a.files[0]);
    fetch('https://obscure-ocean-94951.herokuapp.com/',{
        method:'post',
        body:data
    }).then(function(response){
      return response.json()
    }).then(data=>{
      this.setState({src:`https://obscure-ocean-94951.herokuapp.com/${data.file}`})
    })

}
  render(){
    const {contact,name}=this.props;
      return (

<div id="section2">
<article  onClick= {this.onSignout} id="consign" className="f2 fl w-3 bg-light-pink  dim pointer hover-dark-blue mv1 ph5 right shadow-3">Signout</article>
<article onClick={()=>contact('info')} id="concon" className="f2 fl w-3 bg-dark-blue  dim pointer  mv1 ph5 right shadow-3">My Contacts</article>
<div id="profile-container">
<img src={this.state.src} className="o-95"/>
<label className="b " style={{marginLeft:10}}>{name}</label>
<input id="fileid" className="b " style={{marginLeft:-10}} type="file"/>
<button onClick={this.onFile} Title="Click to upload image" className="b grow"  style={{marginTop:10 }}>Click </button>

</div>
<article  className="f2 fl w-3 bg-transparent mv1 ph5 right shadow-3" id="conarticle">
  <div>
   <legend className="f1  mh5 fw6 ph0 mh5 " id="contitle"> Fill Your Contact</legend>
    <label for="comment" id="conlabel" className="f3 b db mb2">Name <span className="normal black-60">(Required)</span></label>
    <textarea onChange={this.onNameChange} id="comment" name="comment" className="db grow border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
   </div>
    
    <div>
    <label for="comment" id="conlabel" className="f3 b db mb2">Work<span className="normal black-60">(optional)</span></label>
    <textarea onChange={this.onWorkChange} id="comment" name="comment" className="db grow border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
   </div>
    <div>
    <label for="comment" id="conlabel" className="f3 b db mb2">Mobile<span className="normal black-60">(Required)</span></label>
    <textarea onChange={this.onMobileChange} id="comment" name="comment" className="db grow border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
   </div>
    <div>
    <label for="comment" id="conlabel" className="f3 b db mb2">Email<span className="normal black-60">(Required)</span></label>
    <textarea onChange={this.onEmailChange} id="comment" name="comment" className="db grow border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
   </div>
   
         <div id="conbutton" >
   <a  onClick= {this.onSubmit} className="f5 dib link grow pointer left-1  br3 ph5 mh6 mv3 pv2 mb2  white bg-dark-blue">Submit</a>
   </div>

</article>
 
    </div>           
            
    );
  }

}
 export default Contacts;
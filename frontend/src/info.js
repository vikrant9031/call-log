import React from 'react';
import TextLoop from 'react-text-loop';

class Info extends React.Component{
  constructor(props){
    super(props);
    this.state={
      users:[]
    }
  }
  componentDidMount(){
   fetch('https://damp-lake-30158.herokuapp.com/info',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
   })
    }).then(function(response){
       return response.json();
    }).then(data=>{
        this.setState({users:data})
        console.log(this.state.users);
        
    })
  }

render(){
  const {info}=this.props;
  if(this.state.users.length===0){
      return <h1>loading.....</h1> 
  }else{

  
    return (
   <div> 
 <article  onClick= {()=>info('contact')} className="f2 bg-light-pink dim pointer hover-black fl w-1 mv1 ph5 red shadow-3" id="infotitle">Back to form</article>
<div className="pa1">
  <div className="overflow-x:auto;" id="scroll">
    <table id="infotable" className="f6 w-100 mw8 center" cellspacing="40">
    
      <div>
      {
        this.state.users.map((count,i)=>{
          console.log(count);

return(
 <tbody>
        <tr>
          <td className="space">{count.id}</td>
          <td className="space">{count.name}</td>
          <td className="space">{count.work}</td>
          <td className="space">{count.email}</td>
          <td className="space">{count.mobile}</td>
          <td className="space">{count.company}</td>
        </tr>
        
      </tbody>


  )

        })
     
    }
    </div>
    </table>
  </div>
</div>
</div>
    );

  }
}
}
 export default Info;
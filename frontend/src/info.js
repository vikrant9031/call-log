import React from 'react';
import TextLoop from 'react-text-loop';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './info.css';


class Info extends React.Component{
  constructor(props){
    super(props);
    this.state={
      users:[]
     // sendId:sessionStorage.getItem('id')
    }
  }
  componentDidMount(){
    const data  = new FormData();
    data.append('id',sessionStorage.getItem('id'));
   fetch('https://limitless-oasis-36046.herokuapp.com/info',{
        method:'post',
       
        body:data
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
    <div id="section">
   
 <article  onClick= {()=>info('contact')} className="f2 bg-light-pink dim pointer hover-black fl w-1 mv1 ph5 red shadow-3" id="infotitle">Back to form</article>
<Paper id="paper">
      <Table>
        <TableHead>
          <TableRow id="row">
             <TableCell style={{color:"white"}}>Name</TableCell>
             <TableCell align="right"  style={{color:"white"}}>Work</TableCell>
             
             <TableCell align="right"  style={{color:"white"}}>Email</TableCell>
             <TableCell align="right"  style={{color:"white"}}>Mobile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.users.map(row => {
            return (
              <TableRow  key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                
                <TableCell align="right">{row.work}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.mobile}</TableCell>
              </TableRow>
            );
          })
        }
        </TableBody>
   </Table>
    </Paper>
    </div>
    );

  }
}
}
 export default Info;
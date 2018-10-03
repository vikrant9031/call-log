import React from 'react';
import TextLoop from 'react-text-loop';
import Flip from 'react-reveal/Flip';
import Shake from 'react-reveal/Shake';
import Popup from "reactjs-popup";

const Pop=({pop})=>{
	return (
		<div  > 
		  <div className="hide-child absolute hover-red b ttu pointer f2 w-10">
		  <Flip left>
		  <Shake>
            <div className="pa4 tc" >
  <img id="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS330mqBzBGv0WAH-Hwbur40wrh5TDyqfgGifdg1WzvN2-0umNyRg"
      className="br-100 h3 w3 dib" alt="avatar"/>
</div>
</Shake>
</Flip>

    <div id="sidelogo" className="child  shadow-3">
  <div> 
            <article  id="sidelogo1" className="f3 h3 bg-lightest-blue br dim pointer georgia hover-black  bw fl w-3 mv2 pv3  ph5  black shadow-3" 
                onClick={()=>pop('signin')}>Signin</article>
     </div>
   <div >
            <article  id="sidelogo2" className="f3 h3 b--green  bg-light-pink dim pointer georgia hover-black fl w-3 mv2 pv3  ph5 red shadow-3" 
                onClick={()=>pop('register')}>Signup</article>
 
         </div>
        
    </div>
  </div>
<article className="br3 pa5 mt5 mw7 bb b--white br5 center white f3   " style={{marginTop:200}}>
  <TextLoop springConfig={{ stiffness: 480, damping: 20 }}>
  <p id="text1" className="shadow-4 b center ttu ws-pre">Welcome To Our Official Website . Try It Now Itself.</p>
  <p id="text2" className="shadow-4 b center ttu ws-pre">Integrate all your Contacts in a single loop</p>
</TextLoop>
</article>
</div>
		);
}
 export default Pop;
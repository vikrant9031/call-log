import React from 'react';
import TextLoop from 'react-text-loop';
import Info from './info'

const Cardlist =({table})=>{
 return (
  <div>
    {

      table.map((user,i)=>{
        return (
        <Info name={table[i].name} work={table[i].work} company={table[i].company} email={table[i].email} mobile={table[i].mobile}/>
        );
      })
    }
</div>
    );

}
 export default Cardlist;
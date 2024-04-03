import React from "react";


export function Select ({defaultValue, options, value, onChange}){

    
return(
  <select style={{marginTop:'15px', width:'250px'}}
  value={value}
  onChange={e=>onChange(e.target.value)}
  >
    <option>{defaultValue}</option>
    {
      options.map(o=>
       <option key={o.value} value={o.value}>{o.name}</option> )
    }  
  </select>
)

}
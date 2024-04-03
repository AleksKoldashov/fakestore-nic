import React from "react";
import { Select } from "../UI/Select";
import './filter.css'

export function Filter ({input, setInput,setSort, sort}){

    return(
        <div className="filter">
          <div className="input-filter">
             <input  type='number' onChange={e=>setInput({...input, id: e.target.value})}/>
             <input  onChange={e=>setInput({...input, name: e.target.value})}/>   
          </div>
        <Select
        value={sort}
          onChange={(e)=>setSort(e)}
          defaultValue={"Сортировать по категориям"}
          options={[
            { value: "железо", name: "железо" },
            { value: "пластик", name: "пластик" },
            { value: "дерево", name: "дерево" },     
          ]}
        />
            
        </div>
    )
}
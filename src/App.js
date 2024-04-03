import { useMemo, useState } from 'react';
import './App.css';
import { Filter } from './components/Filter';

const data = [
  {id:1, name: 'уголок', categories: 'железо'},
  {id:2, name: 'профтруба', categories: 'железо'},
  {id:3, name: 'швелер', categories: 'железо'},
  {id:4, name: 'панель', categories: 'пластик'},
  {id:5, name: 'труба', categories: 'пластик'},
  {id:6, name: 'заглушка', categories: 'пластик'},
  {id:7, name: 'брусок', categories: 'дерево'},
  {id:8, name: 'доска', categories: 'дерево'},
  {id:9, name: 'наличник', categories: 'дерево'},
  {id:10, name: 'дверь', categories: 'дерево'},
]


function App() {
 const [state, setState] = useState([])

 const [input, setInput] = useState({name:'', categories:'', id: +0});

 const [sort, setSort] = useState('');

 console.log(sort);

 const Sorted = useMemo(()=>{
  if(sort !== ''){
    console.log(sort);
    const arr = data.filter(item=>item.categories === sort)
    console.log(arr);
    return setState(arr)
  }
 }, [sort])
 const Search = ()=>{
  if(input.name !== ''){
    const arr = data.filter(item=>item.name === input.name.toLocaleLowerCase())
    console.log(arr);
    return setState(arr)
  }
  else if ( input.id >= 1) {
    const arr = data.filter(item=>Number(item.id) === Number(input.id))
    return setState(arr)
  }
  else{
    setState(data)
  }
 }

  return (
    <div className="App">
          <h2>Web-страница создана с использование базового HTML, CSS, React JS</h2>
         <Filter input={input} setInput={setInput} Sorted={Sorted} sort={sort} setSort={setSort}/>
         <button onClick={()=>{Search()}}>Найти товар</button>
         <table>
            <caption>Список товаров</caption>
            <thead>
              <tr>
                <th>Id</th>
                <th style={{width:'250px'}}>Название товара</th>
                <th style={{width:'150px'}}>Категория</th>
              </tr>
            </thead >
            <tbody >
                  {state.map((item)=>
                  <tr key={item.id}> 
                  <td >{item.id}</td> 
                  <th style={{width:'250px'}}>{item.name}</th> 
                  <td style={{width:'150px'}}>{item.categories}</td>
                  </tr>
                  )}
            </tbody>
          </table>
      
     
       
        
    </div>
  );
}

export default App;

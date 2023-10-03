import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItems from './AddItems';
import SearchItem from './SearchItem';


function App() {

  const [search,setSearch]=useState('')

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Shopping list')));

const setAndSaveItems=(newItems)=>{
  setItems(newItems);
  localStorage.setItem('Shopping list',JSON.stringify(newItems));
}

const [newItem,setNewItem]=useState('');

const handleSubmit=(e)=>{
  e.preventDefault();
  if(!newItem) return;
  //add Item
  addItem(newItem);
  setNewItem('');
}

const addItem=(item)=>{
  const id=items.length ? items[items.length-1].id + 1:1;
  const myNewItem={id,checked:false,item};
  const listItems=[...items,myNewItem];
  setAndSaveItems(listItems);
}

const handleChecked =(id)=>{
  const listItems=items.map((item)=> item.id ===id?{...item,checked:!item.checked}:item );
  setAndSaveItems(listItems);
}
const handleDelete= (id)=>{
  const listItem=items.filter((item)=>item.id!==id)
  setAndSaveItems(listItem);

}


  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItems
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <Content
      items={items.filter(item=>((item.item).toLowerCase().includes(search.toLowerCase())))}
      handleChecked={handleChecked}
      handleDelete={handleDelete}
      />
      <Footer
      length={items?items.length:0}
      />
    </div>
  );
}

export default App;

import {FaPlus} from "react-icons/fa";
import { useRef } from "react";
const AddItems=({newItem,setNewItem,handleSubmit})=>{
    const inputRef=useRef();

    return(
    
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="AddItem">Add Item</label>
        <input 
        type="text"
        id="addItem"
        autoFocus
        placeholder="Add item" 
        value={newItem}
        ref={inputRef}
        onChange={(e)=>setNewItem(e.target.value)}
        />
        <button type="submit"
        aria-label="Add Item"
        onClick={()=>inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
)
}
export default AddItems;
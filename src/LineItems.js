import { FaTrashAlt } from 'react-icons/fa';

const LineItems=({item,handleChecked,handleDelete})=>{
    return(
        <li className='item' >
        <input type='checkbox'
        onChange={()=>handleChecked(item.id)} 
        checked={item.checked}

   />
       <label style={(item.checked)?{textDecoration:'line-through',cursor:'pointer'}:{cursor:'pointer'}}
       onDoubleClick={()=>handleChecked(item.id)}
       >{item.item}</label>
       
       <FaTrashAlt 
       role='button'
       onClick={()=>handleDelete(item.id)}
       tabIndex="0"
       aria-label={`Delete ${item.item}`}
       />
   </li>
    )
}
export default LineItems;
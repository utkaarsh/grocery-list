import LineItems from './LineItems';
const ItemList=({items,handleChecked,handleDelete})=>{
return(
    <ul>
                {items.map((item)=>(
                <LineItems
                key={item.id}
                item={item}
                handleChecked={handleChecked}
                handleDelete={handleDelete}
                />                       
                       
                    
                ))}
            </ul>
)
}

export default ItemList;
import ItemList from './ItemList';
const Content = ({items,handleChecked,handleDelete}) => {
    return (
        <main>
            {items.length?(
            <ItemList 
            items={items}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
             />
            ):(
                <p>Empty List</p>
            )}
        </main>
    )
}

export default Content

import {useState, useEffect} from 'react';

export default function PostList(){
    const [items, setItems] = useState([]);

    useEffect(() => {
       refreshList();
    }, [])

    const refreshList = (e) => {
        console.log("Refreshing the list");
        fetch('/posts')
        .then(res => res.json())
        .then((result) => {
            setItems(result);
        })
    }

    return (
        <div>
            <ul>
               {items.map(item => (
                   <li key={item.id}>{item.title} : {item.content}</li>
               ))}
            </ul>

            <button onClick={refreshList}>Refresh</button>
        </div>
    )

}
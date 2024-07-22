import { useState } from "react";
import Details from "./detail";
import Form from "./form";

function List() {
    const [list, setList]=useState([]);
    const [selected, setselected]=useState(null);
    const adddata=(obj)=>{
        setList([...list,obj]);
    }
    return ( 
        <div>
            <h1>Component Level Interaction</h1>
            <ul>
                {
                    list.map(item=>(
                        <li key={item.id} onClick={()=>setselected(item)}>{item.name}</li>
                    ))
                }
            </ul>
            <Form adddata={adddata} />
            { selected && <Details data={selected} /> }
        </div>
     );
}

export default List;
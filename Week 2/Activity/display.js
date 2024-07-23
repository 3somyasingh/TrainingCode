function Display({data}) {
    return ( 
        <div className="m-2 p-2">
            
            <h3>Name: {data.name}</h3>
            <h3>Email: {data.email}</h3>
            <h3>Phone: {data.phone}</h3>
            <h3>Gender: {data.gender}</h3>
        </div>
     );
}

export default Display;



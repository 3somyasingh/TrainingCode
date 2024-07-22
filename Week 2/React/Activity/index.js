import { useState } from "react";
import Display from "./display";

function NewUser() {
    const [user, setUser]=useState({name:'', email:'', phone:'',Gender:''});
    const [list, setList]=useState([]);
    const [selected, setselected]=useState(null);
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setUser({
            ...user,[name]:value 
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        setList([...list,user]);
        e.target.reset();
    }
    const adddata=(obj)=>{
        setList([...list,obj]);
    }

    return ( 
        <>
        <h3>Users List</h3>
            <table className="table table-bordered table-hover">
                <thead><tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>phone No.</th>
                    <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(user=>(
                            <tr key={user.email} >
                                <td >{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.gender}</td>
                                <button onClick={()=>setselected(user)}>👁️‍🗨️</button>
                                </tr>
                        ))
                    }
                </tbody>
            </table>


        <div class="row">
            <div class="col">
            <h3>Enter New User</h3> 
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-3">
                    <label>Name</label>
                    <input type="text" placeholder="John doe" name="name" className="form-control" onChange={handleChange}/>
                </div>
                <div className="form-group mt-3">
                    <label>Email</label>
                    <input type="email" placeholder="John.doe@gmail.com" name="email" className="form-control" onChange={handleChange}/>
                </div>
                <div className="form-group mt-3">
                    <label>phone</label>
                    <input type="number" placeholder="9876543234" name="phone" className="form-control" onChange={handleChange}/>
                </div>
                <div className="form-group mt-3">
                    <label>Gender</label>
                    <input type="text" placeholder="Male/Female" name="gender" className="form-control"onChange={handleChange}/>
                </div>
                <button className="btn btn-primary w-100 mt-3">Add</button>
            </form>
            </div>
            <div class="col">
            <h3>Details</h3>
            { selected && <Display data={selected} /> }
            </div>
        </div>
        </>
     );
}

export default NewUser;
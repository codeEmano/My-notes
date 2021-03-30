import {useState,useEffect} from 'react';
import './myStyle.css'
import axios from 'axios';
function CreateUser()
{
    const [name, setName] = useState('');
    const onchangeHandleName= (e) =>{
        setName(e.target.value);
    }
    const onSubmit= (e) =>{
        e.preventDefault();
        const displayuser={
            name
        }
        console.log(displayuser);
        axios.post('http://localhost:5000/users/add',displayuser)
        .then((res) => {console.log(res.data);
            setName("");
            window.location='/';
        })
    }
    useEffect(() =>{
        setName("")
    },[])
    return (
        <form onSubmit={onSubmit}>
         <div className="mb-3">
  <label className="form-label">Name:</label>
  <input type="text" className="form-control" 
  value={name} 
  onChange={onchangeHandleName} placeholder="Your name"/>
  <br/>
  <button type="button" className="btn btn-primary"
  onClick={onSubmit}>Create User</button>

</div>
        </form>
    )
}

export default CreateUser
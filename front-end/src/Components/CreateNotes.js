import {useState,useEffect,useRef} from 'react';
import axios from 'axios';
function CreateNotes()
{
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    const [users, setUsers] = useState([]);
    const ref=useRef('userInput');
    const onchangeHandleName= (e) =>{
        setName(e.target.value);
    }
    useEffect(() =>{
        axios.get('http://localhost:5000/users/')
        .then((res) => {
            if(res.data.length > 0)
            {
                setUsers(res.data.map((user) => user.name));
                setName(res.data[0].name)
            }
        })
    },[])
    const onSubmit= (e) =>{
        e.preventDefault();
        const displaynotes={
            name,
            notes,
            users
        }
        console.log(displaynotes);
        axios.post('http://localhost:5000/notes/add',displaynotes)
        .then((res) => console.log(res.data))
        window.location='/';
    }
    const handlechangeNotes= (e) =>{
        setNotes(e.target.value);
    }
    return( 
    <div>
        <h3>Create a new note</h3>
        <form onSubmit={onSubmit}>
        <div className="mb-3">
  <label className="form-label">Name</label>
  <select ref={ref} required
  className='form-control'
  value={name}
  onChange={onchangeHandleName}>
      {
          users.map((user) =>{
              return <option value={user} key={user}>
                  {user}
              </option>
          })
      }
  </select>
</div>
<div className="mb-3">
  <label className="form-label">Your notes</label>
  <textarea className="form-control" value={notes} 
  onChange={handlechangeNotes} rows="3"></textarea>
</div>
<button type="button" className="btn btn-primary"
onClick={onSubmit} >Create Notes</button>
        </form>    
    </div>)
}

export default CreateNotes;
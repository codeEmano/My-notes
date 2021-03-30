import {useState,useEffect,useRef} from 'react';
import axios from 'axios';
import './myStyle.css';
function EditNotes(props)
{
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    const [users, setUsers] = useState([]);
    const ref=useRef('userInput');
    useEffect(() =>{
        console.log(props.match)
        axios.get('http://localhost:5000/notes/'+props.match.params.id)
        .then(res =>{
            console.log(res.data.name);
            setName(res.data.name);
            setNotes(res.data.notes);
        })
        axios.get('http://localhost:5000/notes/')
        .then((res) => {
            if(res.data.length > 0)
            {
                setUsers(res.data.map((user) => user.name));
            }
        })
    },[props.match.params.id])
    const onSubmit= (e) =>{
        e.preventDefault();
        const displaynotes={
            name,
            notes,
            users
        }
        console.log(displaynotes);
        axios.post('http://localhost:5000/notes/update/'+props.match.params.id,displaynotes)
        .then((res) => console.log(res.data))
        setNotes("");
        window.location='/';
    }
    const handlechangeNotes= (e) =>{
        setNotes(e.target.value);
    }
    return( 
    <div>
        <form onSubmit={onSubmit}>
        <div className="mb-3">
        <h3>Edit notes</h3>
        
  <label className="form-label">Name</label>
  <select ref={ref} required
  className='form-control'
  value={name}
  disabled>
      {
          users.map((user,id) =>{
              return <option value={name} key={id}>
                  {name}
              </option>
          })
      }
  </select>
  <label className="form-label">Your notes</label>
  <textarea className="form-control" value={notes} 
  onChange={handlechangeNotes} rows="3"></textarea>
</div>
<button type="button" className="btn btn-primary"
onClick={onSubmit} >Edit Notes</button>
        </form>    
    </div>)
}

export default EditNotes;
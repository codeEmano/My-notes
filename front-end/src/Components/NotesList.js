import {Link} from 'react-router-dom';
import axios from 'axios';
import {useState,useEffect} from 'react';

function Note({note,delNote}) 
{
    return (<tr>
        <td>{note.name}</td>
        <td>{note.notes}</td>
        <td>
            <Link to={'/edit/'+note._id}>
            <button type="button" className="btn btn-warning">
                Edit
            </button>    
            </Link> {"     "} 
            <button type="button" className="btn btn-danger"
            onClick={() => delNote(note._id)}>Delete</button>

        </td>
    </tr>  )  
}


function NotesList()
{
    const [NotesList, setNotesList] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:5000/notes/')
        .then((res) =>{
            console.log("You are in http://localhost:5000/notes/ ",res.data);
            setNotesList(res.data)
        })
    },[])
    const deleteNotes= (id) =>{
        axios.delete('http://localhost:5000/notes/'+id)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
        setNotesList(NotesList.filter(el => el._id!==id))
    }
    const ListOfNotes=() => {
       const listOfNotes= NotesList.map((currentnote) => {
            return <Note note={currentnote} delNote={deleteNotes} key={currentnote._id} />
        });
        return listOfNotes;
    }
    return (
        <div>
            <h3>List of Notes</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Notes</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {ListOfNotes()} 
                </tbody>
            </table>
        </div>
    )
}

export default NotesList;
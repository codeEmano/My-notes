import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import NotesList from './Components/NotesList';
import EditNotes from './Components/EditNotes';
import CreateNotes from './Components/CreateNotes';
import CreateUser from './Components/CreateUser';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path='/' exact component={NotesList}/>
        <Route path='/edit/:id' exact component={EditNotes}/>
        <Route path='/create' exact component={CreateNotes}/>
        <Route path='/user' exact component={CreateUser}/>
      </Router>
    </div>
  );
}

export default App;

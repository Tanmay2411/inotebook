import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import NoteState from './context/notes/NoteState';
import { Alert } from '@mui/material';


function App() {
    return (
        <div className="App">
            <NoteState>
                <Router>
                    <Navbar />
                    <Alert />
                    <div className='container'>
                        <Routes>
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/home" element={<Home />} />
                            <Route exact path="/login" element={<Login />} />
                            <Route exact path="/signup" element={<SignUp />} />
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </div>
    );
}

export default App;

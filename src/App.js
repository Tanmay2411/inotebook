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
import Alert from './components/Alert';
import { useState } from 'react';


function App() {
    const [alert, setAlert] = useState(null);
    const showAlert = (typ, msg) => {
        setAlert({
            message: msg,
            type: typ
        });
        setTimeout(() => {
            setAlert(null)
        }
            , 1500);
    }
    return (
        <div className="App">
            <NoteState>
                <Router>
                    <Navbar />
                    <Alert alert={alert} />
                    <div className='container fullPage'>
                        <Routes>
                            <Route exact path="/about" element={<About />} />

                            <Route exact path="/" element={<Home showAlert={showAlert} />} />
                            <Route exact path="/home" element={<Home showAlert={showAlert} />} />
                            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
                            <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </div>
    );
}

export default App;

import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
const AddNote = (props) => {
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const context = useContext(NoteContext)
    const { addNote } = context;

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert("success", "Note Added Successfully...")
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
        console.log(note);
    }
    return (
        <div className='container my-3'>
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className="form-group">
                    <label htmlFor="title">Enter Title</label>
                    <input type="text" className="input1 form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter title" onChange={onChange} value={note.title} />

                </div>
                <div className="form-group">
                    <label htmlFor="description">Enter Description</label>
                    <input type="text" className="input1 form-control" id="description" name="description" placeholder="Description" onChange={onChange} value={note.description} />
                </div>
                <div className="form-group">
                    <label htmlFor="tag">Enter tags</label>
                    <input type="text" className="input1 form-control" id="tag" name="tag" placeholder="Tag" onChange={onChange} value={note.tag} />
                </div>
                <button className="btn btn-primary my-3" onClick={handleClick}>Add note</button>
            </form></div>
    )
}

export default AddNote
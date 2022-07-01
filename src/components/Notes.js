import React, { useState, useContext, useEffect, useRef } from 'react'
import NoteContext from '../context/notes/NoteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const context = useContext(NoteContext)
    const { notes, getAllNotes, editNote } = context;
    const ref = useRef(null);
    const refClose = useRef(null);

    useEffect(() => {
        getAllNotes();
        // eslint-disable-next-line
    }, [])

    const updateNote = (getnote) => {
        ref.current.click();
        setNote(getnote);
    }

    const handleClick = (e) => {
        // e.preventDefault();   
        editNote(note._id, note.title, note.description, note.tag);
        refClose.current.click();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
        // console.log(note);
    }

    return (
        <div>
            <AddNote />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">

            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="form-group">
                                    <label htmlFor="title">Enter Title</label>
                                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter title" onChange={onChange} value={note.title} />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Enter Description</label>
                                    <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={onChange} value={note.description} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="tag">Enter tags</label>
                                    <input type="text" className="form-control" id="tag" name="tag" placeholder="Tag" onChange={onChange} value={note.tag} />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={handleClick} className="btn btn-primary">Edit changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Your Notes</h2>
            <div className=' row'>
                {notes.map((note) => {
                    return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                })}
            </div>
        </div>
    )
}

export default Notes
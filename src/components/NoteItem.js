import React, { useContext } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NoteContext from '../context/notes/NoteContext'
const NoteItem = (props) => {
    const { note, updateNote } = props;

    const context = useContext(NoteContext)
    const { deleteNote, editNote } = context;

    return (
        <div className='col-md-3  mx-3'>
            <div className="card my-3" style={{ width: "18rem" }}>
                <div className="card-body" >
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <span className="ni-button" ><EditIcon color="dark" onClick={async () => {
                        await updateNote(note);
                        // props.showAlert("success", "Note Updated Successfully...")
                    }} /> </span>
                    <span className="ni-button ni-delete" onClick={() => {
                        deleteNote(note._id);
                        props.showAlert("success", "Note Deleted Successfully...")
                    }}>
                        <DeleteIcon color='dark' />
                    </span>


                </div>
            </div>
        </div>
    )
}

export default NoteItem
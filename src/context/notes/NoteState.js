import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000";
    // UseState hook
    const [notes, setNotes] = useState([]);

    const getAllNotes = async () => {

        let url = `http://localhost:5000/api/notes/fetchallnotes`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            }
        });
        const result = await response.json();
        setNotes(result)
    }

    // Add a note
    const addNote = async (prop) => {
        const title = prop.title;
        const description = prop.description;
        const tag = prop.tag;

        const url = `${host}/api/notes/addnote`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();
        console.log(json)

        const note = json;
        setNotes(notes.concat(note));
    }

    const deleteNote = async (props) => {
        const url = `${host}/api/notes/deletenote/${props}`
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
        });
        const json = await response.json();
        console.log(json);
        console.log(`Deleting note with id = ${props}`)
        const newNote =
            notes.filter((note) => {
                return props !== note._id
            })
        setNotes(newNote);
    }

    const editNote = async (id, title, description, tag) => {
        // API CALL
        const url = `${host}/api/notes/updatenote/${id}`
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })

        });
        const json = await response.json();
        // EDITING
        // console.log(json)
        // console.log(notes);
        // const updatedNotes = notes;
        // for (const note of updatedNotes) {
        //     console.log(note._id)
        //     if (note._id === id) {
        //         console.log("found");
        //         note.title = title;
        //         note.description = description;
        //         note.tag = tag;
        //         console.log(note)
        //         break;
        //     }
        // }
        // console.log(updatedNotes);
        // setNotes(updatedNotes)

        let newNotes = JSON.parse(JSON.stringify(notes))

        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
            }
            break;
        }
        setNotes(newNotes)

    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;



import React, { useContext } from 'react'
// import pic from "./homepage.png"
import Notes from "./Notes"
import Login from "./Login"
const Home = (props) => {

    return (
        <div >
            {!localStorage.getItem('token') && <>

                <div className="d-flex flex-row mb-3">
                    <div className="p-2">
                        <div className='col60-heading'>
                            <h1 className="display-3"> Welcome to i-NoteBook</h1>

                            <h1 className="display-6 col70-sub"> iNoteBook is a platform where you can save all your notes with full privacy.</h1>


                        </div>
                    </div>
                    <div className="p-2 login-home"><Login showAlert={props.showAlert} /> </div>
                </div>

            </>
            }
            {localStorage.getItem("token") && <>

                <Notes showAlert={props.showAlert} />
            </>
            }



        </div >
    )
}

export default Home
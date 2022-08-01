import React, { useContext } from 'react'
// import NoteContext from '../context/notes/NoteContext'

const About = () => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What do we do?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            We save all your notes in our database. They are fully secured and no one can see your notes other than you :)
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Wchich database do we use?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            We use MongoDB which is one of the leading DBMS in our industry. It provides very fast access to information. It is a Non-SQL type DBMS.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            About the developer
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            I am Tanmay Aggarwal. I am pursuing Computer Science Engineering from NSUT, Dwarka.<br />
                            If you wanna write to me feel free to contact ;)
                            <br />
                            <br />

                            Email: <a href="mailto:tanmayt3g@gmail.com">tanmayt3g@gmail.com</a>, <a href="mailto:tanmay.aggarwal.ug20@nsut.ac.in">tanmay.aggarwal.ug20@nsut.ac.in</a>
                            <br />

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
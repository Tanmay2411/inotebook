import React from 'react'

function Alert(props) {
    return (
        <div style={{
            height: "50px",
            // "transition": "2s"
        }}>
            {
                props.alert &&
                <div>
                    <div className={`alert alert-${props.alert.type} alert-dismissible fade show alertBar`} role="alert">
                        {props.alert.message}
                    </div>
                </div>
            }
        </div >
    )
}

export default Alert
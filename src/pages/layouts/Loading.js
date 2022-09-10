import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
function Loading() {
    return (
        <div className="center"
            style={{
                zIndex: "1000", position: 'fixed',
                top: '0', left: '0', right: '0', height: '100vh',
                width: '100%', backgroundColor: 'rgba(0,0,0,0.4)'
            }}>
            <Spinner animation="grow" variant="primary" />
        </div>
    )
}

export default Loading
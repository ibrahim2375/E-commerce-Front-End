import React from 'react'
//bootstrap components
import Container from 'react-bootstrap/Container'
//timeago
import TimeAgo from 'timeago-react';
function AccountInfo({ user }) {
    return (
        <div className='bg-light p-5 position-relative' style={{ height: '200px', zIndex: '-1' }}>
            <Container>
                <p className='position-absolute bottom-0 left-2'>Created From : {<TimeAgo datetime={`${user?.createdAt}`} />}  </p>
            </Container>
        </div>
    )
}
export default AccountInfo
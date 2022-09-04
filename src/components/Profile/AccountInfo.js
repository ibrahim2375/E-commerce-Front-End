import React from 'react'
//bootstrap components
import Container from 'react-bootstrap/Container'
//time TimeAgo
import TimeAgo from 'react-timeago'
import enStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const formatter = buildFormatter(enStrings)

// in your react component

function AccountInfo({ user }) {
    return (
        <div className='bg-light p-5 position-relative' style={{ height: '200px', zIndex: '-1' }}>
            <Container>
                <p className='position-absolute bottom-0 left-2'>Created From :   < TimeAgo date={`${user?.createdAt}`} formatter={formatter} /></p>
            </Container>
        </div>
    )
}
export default AccountInfo
import React from 'react'
import Request from '../Profile/Request/Request'
import RequestProductHeader from './RequestProductHeader'

const RequestProductParent = () => {
    return (
        <div className='request-container'>
            <RequestProductHeader />
            <Request />
        </div>
    )
}

export default RequestProductParent

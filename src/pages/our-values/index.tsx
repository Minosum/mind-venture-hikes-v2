import React from 'react'
import MainContent from '../../../components/MainContent/MainContent'
import { pageData } from '../../../data/pageData' 


const page = () => {
    return (
        <div style={{ height: 'auto' }}>
            <MainContent heading={pageData.values.heading} description={pageData.values.items} />
        </div>
    )
}

export default page
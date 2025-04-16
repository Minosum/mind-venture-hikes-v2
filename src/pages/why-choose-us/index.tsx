import React from 'react'
import MainContent from '../../../components/MainContent/MainContent'
import { pageData } from '../../../data/pageData' 

const page = () => {
    return (
        <div style={{ height: 'auto' }}>
            <MainContent heading={pageData.whyChooseUs.heading} description={pageData.whyChooseUs.points} />
        </div>
    )
}

export default page
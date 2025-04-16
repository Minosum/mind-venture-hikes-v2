import React from 'react'
import MainContent from '../../../components/MainContent/MainContent'
import { pageData } from '../../../data/pageData' 


const page = () => {
  return (
    <div style={{ height: 'auto' }}>
            <MainContent heading={pageData.whatWeDo.heading} descriptionTwo={pageData.whatWeDo.description} description={pageData.whatWeDo.features} />
        </div>
  )
}

export default page
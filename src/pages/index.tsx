import React from 'react'
import MainContent from '../../components/MainContent/MainContent';
import { pageData } from '../../data/pageData'
import JoinUs from '../../components/JoinUs/JoinUs';
import ToursSection from '../../components/ToursSection/ToursSection';

export default function Home() {
    return (
        <>
            <div style={{ height: '700px' }}>
                <MainContent heading={pageData.title} description={pageData.introduction.description} />
            </div>
            <ToursSection />
            <JoinUs />
        </>

    );
}

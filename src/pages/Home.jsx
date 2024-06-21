import React, { useState } from 'react'
import Form from '../components/Form'
import Summary from '../components/Summary';

const Home = () => {
    const [fData, setFData] = useState('');
    const [showSummary, setShowSummary] = useState(false);

    const handleSummaryDetails = (values) => {
        setFData(values);
        console.log(values.name);
        setShowSummary(true);
    }

    const handleShowSummary = () => {
        setShowSummary(false);
    }

    return (
        <main className='w-full h-[100vh] flex items-center justify-center bg-blue-200'>
            {showSummary ? (
                <Summary summaryDetails={fData} closeSummary={handleShowSummary} />
            ) : (
                <Form handleSummary={handleSummaryDetails}/>
            )}
        </main>
    )
}

export default Home
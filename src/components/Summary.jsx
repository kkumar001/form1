import React from 'react'

const Summary = ({ summaryDetails, closeSummary }) => {

    console.log(summaryDetails);
  return (
    <div className='flex flex-col p-2 bg-white gap-2 rounded-lg w-[95%] max-w-[500px] items-center'>
            <h3 className='text-2xl font-medium text-red-500'>Summary</h3>
            <hr className='border border-red-500 w-full' />
            <div className='w-full p-2'>
                <div
                    className='flex flex-col gap-6'
                >
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl font-medium'>Name</p>
                        <p className='text-xl font-medium text-purple-500'>{summaryDetails.name}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl'>Email</p>
                        <p className='text-xl font-medium text-purple-500'>{summaryDetails.email}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl'>Age</p>
                        <p className='text-xl font-medium text-purple-500'>{summaryDetails.age}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-xl'>Are you attending with a guest?</p>
                        <p className='text-xl font-medium text-purple-500'>{summaryDetails.isGuest === true ? "True" : "False"}</p>
                    </div>
                    {summaryDetails.isGuest ? (
                        <div className='flex flex-col gap-1'>
                        <p className='text-xl'>Name</p>
                        <p className='text-xl font-medium text-purple-500'>{summaryDetails.guest}</p>
                    </div>
                    ) : ''}
                    <button
                        onClick={() => closeSummary()}
                        className='bg-red-400 rounded-lg p-2 text-xl text-white font-medium hover:bg-red-500'
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Summary
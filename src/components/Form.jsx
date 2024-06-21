import React, { useState } from 'react'

const Form = ({ handleSummary }) => {
    const [data, setData] = useState({ name: '', email: '', age: '', isGuest: false, guest: '' });

    const handleNameChange = (e) => {
        const input = e.target.value;
        const regex = /^[a-zA-Z]*$/;
        if (regex.test(input)) setData({ ...data, name: e.target.value });
    }

    const handleEmailChange = (e) => {
        setData({ ...data, email: e.target.value });
    }

    const handleAgeChange = (e) => {
        const input = e.target.value;
        const regex = /^\d*$/;
        if (regex.test(input)) setData({ ...data, age: e.target.value });
    }

    const handleIsGuestChange = (e) => {
        setData({ ...data, isGuest: e.target.value === 'true' ? true : false })
    }

    const handleGuestChange = (e) => {
        const input = e.target.value;
        const regex = /^[a-zA-Z]*$/;
        if (regex.test(input)) setData({ ...data, guest: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSummary(data);
        setData({ name: '', email: '', age: '', isGuest: false, guest: '' });
    }

    console.log(data);
    return (
        <div className='flex flex-col p-2 bg-white gap-2 rounded-lg w-[95%] max-w-[500px] items-center'>
            <h3 className='text-2xl font-medium text-blue-500'>Form Level 1</h3>
            <hr className='border border-blue-500 w-full' />
            <div className='w-full p-2'>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-4'
                >
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='text-xl'>Name</label>
                        <input
                            type="text"
                            id='name'
                            value={data.name}
                            onChange={handleNameChange}
                            className='px-2 py-1 rounded-lg outline-none focus:bg-blue-50 border-2 border-blue-500'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-xl'>Email</label>
                        <input
                            type="email"
                            id='email'
                            value={data.email}
                            onChange={handleEmailChange}
                            className='px-2 py-1 rounded-lg outline-none focus:bg-blue-50 border-2 border-blue-500'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="age" className='text-xl'>Age</label>
                        <input
                            type="number"
                            min="0"
                            id='age'
                            value={data.age}
                            onChange={handleAgeChange}
                            className='px-2 py-1 rounded-lg outline-none focus:bg-blue-50 border-2 border-blue-500'
                            required
                        />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text-xl'>Are you attending with a guest?</p>
                        <div className='w-full flex gap-[100px] items-center'>
                            <label htmlFor="isGuest" className='text-xl flex gap-2'>
                                <input
                                    type="radio"
                                    value={true}
                                    checked={data.isGuest}
                                    id='isGuest'
                                    onChange={handleIsGuestChange}
                                    className='cursor-pointer'
                                />
                                <span>Yes</span>
                            </label>
                            <label htmlFor="isGuest" className='text-xl flex gap-2'>
                                <input
                                    type="radio"
                                    value={false}
                                    checked={!data.isGuest}
                                    id='isGuest'
                                    onChange={handleIsGuestChange}
                                    className='cursor-pointer'
                                />
                                <span>No</span>
                            </label>
                        </div>
                    </div>
                    {data.isGuest ? (
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="guest" className='text-xl'>Guest Name</label>
                            <input
                                type="text"
                                id='guest'
                                value={data.guest}
                                onChange={handleGuestChange}
                                className='px-2 py-1 rounded-lg outline-none focus:bg-blue-50 border-2 border-blue-500'
                                required
                            />
                        </div>
                    ) : ''}
                    <button
                        type='submit'
                        className='bg-green-400 rounded-lg p-2 text-xl text-white font-medium hover:bg-green-500'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form
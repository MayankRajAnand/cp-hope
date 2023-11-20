import React from 'react'

const LandingLayout = ({ children }) => {
    return (
        <main className='h-full bg-[#111827] overflow-auto '>
            <div className='mx-auto max-w-screen-xl h-90 w-full'>
                {children}
            </div>

        </main>
    )
}

export default LandingLayout
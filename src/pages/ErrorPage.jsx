import React from 'react'

function ErrorPage() {

    return (
        <div className='flex flex-col h-screen w-screen items-center justify-center'>
            <h1 className='text-9xl font-bold'>404</h1>
            <h1 className='text-3xl font-semibold'>Page Not Found</h1>
            <h2
                onClick={() => window.history.back()}
                className='text-2xl font-semibold'>
                Go Back
            </h2>
        </div>
    )
}

export default ErrorPage
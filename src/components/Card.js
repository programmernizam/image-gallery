import React from 'react';

const Card = () => {
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img src="https://source.unsplash.com/random" alt="" className='w-full' />
            <div className='px-6 py-4'>
                <h3 className='text-xl text-purple-600 font-semibold'>Photo by John Deo</h3>
                <ul>
                    <li><span className='font-bold'>Views:</span> 4000</li>
                    <li><span className='font-bold'>Download:</span> 300</li>
                    <li><span className='font-bold'>Likes:</span> 400</li>
                </ul>
            </div>
            <div className="px-6 py-4">
                <span className='inline-block rounded-full bg-gray-200 px-3 py-1 mr-2 text-sm text-gray-700 font-semibold'>#tag1</span>
            </div>
        </div>
    );
};

export default Card;
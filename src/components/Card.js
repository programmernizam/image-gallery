import React from 'react';

const Card = ({ image }) => {
    const { previewURL, user, views, tags, likes, downloads } = image
    const tag = tags.split(",")

    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img src={previewURL} alt={user} className='w-full' />
            <div className='px-6 py-4'>
                <h3 className='text-xl text-purple-600 font-semibold'>Photo by {user}</h3>
                <ul>
                    <li><span className='font-bold'>Views:</span> {views}</li>
                    <li><span className='font-bold'>Download:</span> {downloads}</li>
                    <li><span className='font-bold'>Likes:</span> {likes}</li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tag.map(tag => <span key={Math.random()} className='inline-block rounded-full bg-gray-200 px-3 py-1 mr-2 text-sm text-gray-700 font-semibold'>#{tag}</span>)}
            </div>
        </div>
    );
};

export default Card;
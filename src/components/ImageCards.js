import React from 'react';
import Card from './Card';

const ImageCards = ({ images }) => {

    return (
        <div className='my-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {images.map(image => <Card key={image.id} image={image} />)}
            </div>
        </div>
    );
};

export default ImageCards;
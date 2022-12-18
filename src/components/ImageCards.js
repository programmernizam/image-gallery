import React from 'react';
import Card from './Card';
import Loader from './Loader';

const ImageCards = ({ images, loading }) => {

    return (
        <div className='my-6'>
            {!loading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>}
            {loading ? <Loader /> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {images.map(image => <Card key={image.id} image={image} />)}
            </div>}
        </div>
    );
};

export default ImageCards;
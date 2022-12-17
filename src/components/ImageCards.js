import React from 'react';
import useImages from '../hooks/useImages';
import Card from './Card';
import Loader from './Loader';

const ImageCards = () => {
    const [images, isLoading] = useImages();
    console.log(images);
    return (
        <>
            {isLoading ? <Loader /> : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {images.map(image => <Card key={image.id} image={image} />)}
            </div>}
        </>
    );
};

export default ImageCards;
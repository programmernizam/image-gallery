import React from 'react';
import useImages from '../hooks/useImages';

const ImageCards = () => {
    const [images] = useImages();
    console.log(images);
    return (
        <div>

        </div>
    );
};

export default ImageCards;
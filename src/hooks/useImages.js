import { useEffect, useState } from 'react';

const useImages = () => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [terms, setTerms] = useState("")
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${terms}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
                setImages(data.hits)
                setIsLoading(data.false)
            })
            .catch(err => console.log(err))
    }, [terms])

    return [images, setImages, isLoading, setIsLoading, terms, setTerms]
};

export default useImages;
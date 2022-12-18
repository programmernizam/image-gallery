import React, { useEffect, useState } from 'react';
import ImageCards from './components/ImageCards';
import Search from './components/Search';

const App = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [terms, setTerms] = useState("")
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${terms}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setImages(data.hits)
      })
      .catch(err => console.log(err))
  }, [terms])
  return (
    <div className='container mx-auto'>
      <Search searchText={text => setTerms(text)} />
      <ImageCards images={images} loading={loading} />
    </div>
  );
};

export default App;
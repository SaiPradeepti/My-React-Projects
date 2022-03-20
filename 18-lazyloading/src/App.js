import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const App = () => {
  const [images,setImages] = useState([])

  const getImages = () => {
    Axios.get('https://api.unsplash.com/photos/random?client_id=-PdgaGufsXvD4fs_2medXWeI6jtJgUYIOxP8IOvv8WI&count=30').then((response)=>{
      setImages(response.data)
    })
  }

  useEffect(() => {
    getImages()
  }, [])

  if(images.length === 0){
    return <section className='loading'>
      <p>Loading...</p>
    </section>
  }

  return (
    <>
    <section className='heading'>
      <p>Scroll to see lazy loading</p>
    </section>
    <section className="images">
      {
        images.map((item) => {
          const {id, urls: {regular: url}, alt_description: desc} = item;
          return(
            <div className='image' key={id}>
              <LazyLoadImage effect='blur' src={url} alt={desc} height="400px" width="300px" className='img'/>
            </div>
          )
        })
      }
    </section>
    </>
  )
}

export default App
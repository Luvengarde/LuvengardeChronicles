import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card'


const SlideShow = () => {
  const [images, setImages] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://google-photos-album-demo2.glitch.me/fQBFbso5NJ59hMnv6',
      );
 
      setImages(result.data.map(url => ({
        original: `${url}=w1024`,
        thumbnail: `${url}=w100`
      })))
    };
 
    fetchData();
  }, []);
   
  function changePic(e){
      e.target.setAttribute('src', `${images[getRandomPic(1, images.length)].original}`);
  }

  function getRandomPic(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }

    return (
      <div className='container'>
        {images != null  &&
        <Card style={{ width: '100%'}}>
        <Card.Body>
        <Card.Title>BfliesInJuly</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" src={images[getRandomPic(1, images.length)].original} onClick={changePic} alt='woopsie'/>
        </Card>
        }       
      </div>
      
    );
};

export default SlideShow
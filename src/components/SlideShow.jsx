import React, {useState, useEffect} from "react";
import axios from "axios";
import magicbook from '../assets/magicbook4.png';
import './slideStyle.css';


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
      <div className='containeru'>
        <h5 className="chroniclesTitle">LuvenChronicles</h5>
          <div className='spellbook'>
            <img src={magicbook} alt='magicbook'></img>
              {/* <div className='chapter'> */}
                {/* <h2 className="chapterTitle">{title}</h2> */}
                  {/* <div className="story">
                    <p>{firstParagraph}</p>
                    <p>{secondParagraph}</p>
                    <p>{thirdParagraph}</p>
                    <p>{fourthParagraph}</p>
                    <p>{fifthParagraph}</p>
                    <p>{sixthParagraph}</p>
                    <p>{seventhParagraph}</p>
                    <p>{eighthParagraph}</p>
                    <p>{herFinal}</p>
                    <p>{hisFinal}</p>
                  </div> */}
              {/* </div> */}
        {images != null  &&
        <div className="card">
            <div className="adhesive">
        <img className="card-img-bottom" src={images[getRandomPic(1, images.length)].original} onClick={changePic} alt='woopsie'/>
            </div>
        </div>
        }       
        </div>
      </div>
      
    );
};

export default SlideShow
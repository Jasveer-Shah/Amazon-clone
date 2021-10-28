import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import React from 'react'
import { useState, useEffect } from 'react';
import './Slider.css'

const Slider = ({bannerImages}) => {
    // console.log(bannerImages)
    const [index, setIndex] = useState(0);
    
    useEffect(()=>{
        let lastIndex = bannerImages.length - 1;
        if(index > lastIndex){
            setIndex(0);
        }if(index < 0){
            setIndex(lastIndex)
        }
    }, [index, bannerImages]);

    useEffect(()=>{
        let slider = setInterval(()=>{  // if user is not clicking on the bannerImages then slider will move forwrd and show next image
            setIndex(index + 1);
        }, 5000);

        return () => {
           clearInterval(slider)
        }
    }, [index]);  // it will apply only when index is changing

    return (
        <div className='section'>
            <div className='section-center'>
                {bannerImages.map((image, indexImage)=>{
                    let position = 'nextSlide';
                    if(indexImage === index){
                        position  = 'activeSlide';
                    }
                    if(indexImage === index - 1 || (index === 0 && indexImage === bannerImages.length - 1)){
                        position = "lastSlide" // user has reached over the last slide
                    }
                    return (
                        <article className={position} key={indexImage}>
                               <img src={image} alt='banner_img' className='banner-img'/>
                        </article>
                    );
                })}
                <p className='prev' onClick={() => setIndex(index - 1)}>
                    <ArrowBackIos/>
                </p>
                <p className='next' onClick={() => setIndex(index + 1)}>
                   <ArrowForwardIos/>
               </p>
            </div>
        </div>
    )
}

export default Slider

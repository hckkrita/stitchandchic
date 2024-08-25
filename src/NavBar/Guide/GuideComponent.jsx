import React from 'react'
import hand1 from './hand1.png';
import hand2 from './hand2.png';
import hand3 from './hand3.png';
import hand4 from './hand4.png';
import hand5 from './hand5.png';



const GuideComponent = () => {
  
    return (
      <div className='font-serif text-center m-14 '>

        <div className="flex flex-col items-center mt-4  bg-[#FFE7E3] w-full h-[full] rounded-xl">
        <h1 className='text-5xl my-4'>A simple Guide for Beginner</h1>


        {/* first step */}
          <div className=' w-full h-96 flex'>
            <p className='text-center text-2xl m-36'>
              There are no hard and fast rules about
              the best way to hold the hook and yarn.
              Choose whichever way you find the
              most comfortable. You may prefer the
              "pencil grip". The hook is held in the
              right hand as if holding a pencil.
            </p>

            <img className="w-[500px] h-[400px] " src={hand1} alt="hand1" />  

          </div>

          {/* second step */}
          <div className=' w-full h-96 flex'>

            <img className="w-[500px] h-[400px] " src={hand2} alt="hand1" />  

            <p className='text-center text-2xl m-36'>
            Another hold is the "knife grip". The
            hook is held in the right hand as if holding a dinner knife ready to cut.
            </p>

          </div>

          {/* third step */}
          <div className=' w-full h-96 flex'>
            <p className='text-center text-2xl m-36'>
            To maintain the slight tension in the
            yarn necessary for easy, even stitches,
            you may find it helpful to wrap the yarn
            around the fingers of the hand opposite
            the one holding the hook. Try one of
            these ways, or find another way that
            feels comfortable to you.
            </p>

            <img className="w-[500px] h-[400px] " src={hand3} alt="hand1" />  

          </div>

           {/* forth step */}
           <div className=' w-full h-96 flex'>

            <img className="w-[500px] h-[400px] " src={hand4} alt="hand1" />  

            <p className='text-center text-2xl m-36'>
            In the illustration below, the left hand
            holds your crochet work and at the
            same time controls the tension of the
            yarn. The left-hand middle finger is used
            to manipulate the yarn, while the index
            finger and thumb hold on to the work. 

            </p>

          </div>

          {/* fifth step */}
          <div className=' w-full h-96 flex'>
            <p className='text-center text-2xl m-36'>
            You may find it more comfortable to manipulate the yarn with the index finger
            and hold the project with your thumb
            and middle finger. While you're learning,
            if one ways feels awkward, try another
            way until you find the one that suits you.
            </p>

            <img className="w-[500px] h-[392px] " src={hand5} alt="hand1" />  

          </div>

       
        </div>
      </div>
      
    );
  };
  
  export default GuideComponent;
import React, { useState } from 'react'
import BookShowcaseCard from './BookShowcaseCard';
import SingleBook from './SingleBook';

// const [books,useBooks]=useState ();
// useEffect(() => {
    // getreadbooksbyid( localStorage.setItem("currentUser"))
//   },[]);    
    var books = [];
    for (var i = 0; i < 10; i++) {
      books.push(<BookShowcaseCard/>);
    }
    console.log("active recommended")

  const slideLeft = () => {
    var slider = document.getElementById('slider' );
    console.log(slider)
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider' );
    slider.scrollLeft = slider.scrollLeft + 500;
  };


const Alreadyread = () => {
  return (
    <div>
       <div className='mt-6'>
                  <div className="flex h-[400px]  w-full p-5">                                      
                         <div className=' text-white flex items-center group w-full'>
                            <box-icon name='left-arrow-alt' onClick={slideLeft} size={15} className='bg-white/10 rounded-full opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' ></box-icon>
                              
                                <div id={'slider'}  className=' flex mx-2 overflow-x-scroll  scrollbar-hide  whitespace-nowrap  scroll-smooth'>
                                { books.map((data)=>(
                                      
                                      <SingleBook data={{  name: "bookname" , writer : "auther"}}/>
                                  ))}  
                                </div>

                                <box-icon name='right-arrow-alt' onClick={slideRight} size={15} className='mr-1 bg-white/10 rounded-full opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' ></box-icon>
                                
                            </div>
                  </div>   
                
            </div>
            <p>read</p>
    </div>
  )
}

export default Alreadyread

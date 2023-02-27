import React from 'react'
import { useAuthState } from '../context/AuthContext'
import BookShowcaseCard from './BookShowcaseCard';
import BookContainer from './Home/BookContainer';
import LandingPageHeroComponent from './LandingPageHeroComponent';

function Home() {
    const state = useAuthState();
    
  return (
    <div className='w-full min-h-screen'>
      <LandingPageHeroComponent/>

      <BookContainer/>    

    </div>
  )
}

export default Home
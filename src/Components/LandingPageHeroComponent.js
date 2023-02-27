import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
export default function LandingPageHeroComponent() {
  const navigate = useNavigate();
  return (
    <div className="static  bg-hero w-full bg-cover">
      <div className="w-full h-[25rem] flex justify-center items-center bg-black/50   flex-col">
        <div className='w-10/12  my-5 text-xl '>
          <span className="font-italic my-2.5 text-3xl text-white">
            A Book is a dream that you hold in your hand
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="font-[Parisienne] text-[4xl] text-white">
            ~ Neil Gaiman
          </span>
          <button className='bg-red' onClick={navigate('/profile')}>
            profile
          </button>
        </div>

        <SearchBar />
      </div>
    </div>
  );
}
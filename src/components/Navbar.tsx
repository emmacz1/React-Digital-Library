import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, Providers } from '../config/firebase';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  const signOutOnClick = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  const signInOnClick = async () => {
    try {
      const response = await signInWithPopup(auth, Providers.google);
      if (response.user) {
        window.location.reload();
      }
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  const dropDown = () => {
    setIsVisible(!isVisible);
  };

  const clicked = () => {
    setIsVisible(false);
  };

  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link to='/' className='font-semibold text-xl tracking-tight'>
          Digital Library
        </Link>
      </div>
      <div className='block'>
        <button
          onClick={dropDown}
          className='flex items-center px-3 py-2 text-teal-200 border rounded border-teal-400 hover:text-white hover:border-white'>
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {isVisible && (
        <div className='w-full block flex-grow items-center'>
          <div className='text-sm lg:flex-grow'>
            <Button className='p-3 m-5 bg-teal-400 justify-center'>
              <Link to='/' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                Home
              </Link>
            </Button>
            <Button className='p-3 m-5 bg-teal-400 justify-center'>
              <Link to='/about' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                About
              </Link>
            </Button>
            <Button className='p-3 m-5 bg-teal-400 justify-center'>
              <Link to='/dashboard' onClick={clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'>
                Dashboard
              </Link>
            </Button>
            {!auth.currentUser ? (
              <Button className='p-3 m-5 bg-teal-400 justify-center'>
                <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                  Login
                </Link>
              </Button>
            ) : (
              <Button className='p-3 m-5 bg-teal-400 justify-center'>
                <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
                  Sign Out
                </Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

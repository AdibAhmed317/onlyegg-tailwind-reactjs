import React from 'react';
import ImageOne from '../images/egg.jpg';
import ImageTwo from '../images/egg-2.jpg';

const Content = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-white h-screen py-40'>
        <img src={ImageOne} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>Egg Muffins</h2>
          <p className='mb-2'>This is dish one</p>
          <span>$20</span>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center bg-white h-screen py-40'>
        <img src={ImageTwo} alt='egg' className='h-full rounded mb-20 shadow' />
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl mb-2'>Egg Salad</h2>
          <p className='mb-2'>This is dish two</p>
          <span>$25</span>
        </div>
      </div>
    </>
  );
};

export default Content;

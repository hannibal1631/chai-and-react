import React from 'react';

function Card({ username, subHeading = `don't look at me`, paraText=`look deep inside you boy and you'll see me buddy, hahahahahahaha 💀💀💀💀` }) {
  console.log(username);

  return (
    <div className='max-w-xs p-6 rounded-md shadow-md bg-black'>
      <img
        src='https://images.pexels.com/photos/12986991/pexels-photo-12986991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt=''
        className='object-cover object-center w-full rounded-md h-72 bg-gray-500'
      />
      <div className='mt-6 mb-2'>
        <span className='block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400'>
          {username}
        </span>
        <h2 className='text-xl font-semibold tracking-wide'>{subHeading}</h2>
      </div>
      <p className='text-gray-300'>
        {paraText}
      </p>
    </div>
  );
}

export default Card;

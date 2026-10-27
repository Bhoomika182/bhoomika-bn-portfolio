




import React from 'react';

const Projectcard = ({ title, description, stack, image }) => {
  return (
    <div className='bg-dark-300/80 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer border border-gray-700/50 backdrop-blur-sm'>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2 text-white'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>

        <div className='flex flex-wrap gap-2 mb-4'>
          {stack.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-dark-400 border border-pink-500/30 text-pink-400 rounded-full text-sm'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
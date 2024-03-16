import React from 'react';
import Image from 'next/image';
import  Crop1 from '../../public/rice.png';
import  Crop2 from '../../public/wheat.png';

import '.././styles/pricing.css'

const PricingComponent = () => {
  const plans = [
    {
      title: 'Basic',
      price: 50,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'],
      imageSrc: Crop1,
      bgColor: 'animate-border-blink animate-border',
    },
    {
      title: 'Pro',
      price: 150,
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5', 'Feature 6'],
      imageSrc: Crop2,
      bgColor: 'animate-border-blink animate-border animate-plexa',
    },

  ];

  return (
    <>
      <div className=" justify-center items-center flex flex-col">
        <h1 className='text-6xl text-black font-extrabold mt-24'>Pricing Plans  <span className='text-plexacolor-300'>
          
          </span>
        </h1>
        <h3 className='text-black text-xl mt-5 '></h3>
      </div>
      <div className='flex flex-wrap justify-center items-center border-plexacolor-500 pt-12 mb-10'>
        {plans.map((plan, index) => (
          <div key={index} className={`relative rounded-lg overflow-hidden shadow-lg border-2 m-4 w-96 ${plan.bgColor}`}>
            <div className="absolute top-0 right-0 mt-2 mr-2">
              <Image src={plan.imageSrc} width={80} height={80} alt={plan.title} />
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-6xl text-black mb-2">{plan.title}</div>
              <p className="text-base text-black ">${plan.price}/month</p>
              <ul className="mt-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a1 1 0 01-.707-.293l-7-7A1 1 0 013 10V4a1 1 0 011-1h4a1 1 0 010 2H5v4h4a1 1 0 110 2H5v4h4a1 1 0 010 2h.5a.5.5 0 00.5-.5V18H10z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M16.707 9.293a1 1 0 010 1.414l-8 8A1 1 0 017.414 19a1 1 0 01-.707-.293l-8-8a1 1 0 111.414-1.414L8 14.586V5a1 1 0 011-1h2a1 1 0 011 1v9.586l6.293-6.293a1 1 0 111.414 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-black mt-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 pt-4 pb-2">
              {/* <button className="bg-white hover:bg-plexacolor-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-6">
                Choose Plan
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingComponent;
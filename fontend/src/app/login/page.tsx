'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'
import Google from 'next-auth/providers/google';
const Page = () => { 
    const { data: session } = useSession(); 


    if (session) {
        console.log(session);
    }

    return (
        <>
            <div className="relative py-16 bg-gradient-to-br from-plexacolor-100 to-plexacolor-500">
                <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                    <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                        <div className="rounded-xl bg-white shadow-2x ">
                            <div className="p-6 sm:p-16 ">
                                <div className="space-y-4">
                                    <h2 className="text-4xl text-cyan-900 font-bold text-center">Sign Up <br /> Crop Connect</h2>
                                </div>
                                <div className="mt-16 grid space-y-4">
                                    <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                    hover:border-plexacolor-400 focus:bg-plexacolor-50 active:bg-plexacolor-100">
                                        <div className="relative flex items-center space-x-4 justify-center">
                                            <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5" alt="google logo" />
                                            <span onClick={() => signIn("google")} className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-plexacolor-600 sm:text-base">Continue with Google</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
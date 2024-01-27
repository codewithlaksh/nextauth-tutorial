import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image';
import { AiFillGithub } from "react-icons/ai";

const Home = () => {
    const { data: session } = useSession();
    if (session) {
        return (
            <div className='h-[100vh] flex flex-col items-center justify-center'>
                <div className='border border-gray-400 p-4 rounded w-1/2 h-auto'>
                <div className='mx-auto w-fit'>
                    <Image src={session.user.image} width={128} height={128} alt='user' className='rounded-full' />
                </div>
                <h1 className='text-center text-3xl text-blue-500 font-bold'>Welcome {session.user.name}</h1>
                <button onClick={() => signOut()} className='p-2 bg-gray-900 hover:bg-slate-800 w-full mt-8 text-white rounded flex items-center justify-center'>
                    <AiFillGithub className='text-4xl mr-3' />
                    Sign Out
                </button>
                </div>
            </div>
        )
    }
    return (
        <div className='h-[100vh] flex flex-col items-center justify-center'>
                <div className='border border-gray-400 p-4 rounded w-1/2 h-auto'>
                <h1 className='text-center text-3xl text-blue-500 font-bold'>Login With Github</h1>
                <button onClick={() => signIn("github")} className='p-2 bg-gray-900 hover:bg-slate-800 w-full mt-8 text-white rounded flex items-center justify-center'>
                    <AiFillGithub className='text-4xl mr-3' />
                    Sign In
                </button>
                </div>
            </div>
    )
}

export default Home
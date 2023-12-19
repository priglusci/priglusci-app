"use client";

import Link from 'next/link'
import { useState } from 'react';
import {signIn} from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('invalid details');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await signIn('credentials', {
                email, password, redirect:false,
            });

            if(res.error){
                setError("Invalid Credentials");
                return;
            }
            router.replace('login');
        }catch(error){
            console.log(error);
        }
    };

    return(
        <section className="mt-[4rem]">
            <div className="grid grid-cols-2">
                <div>
                    <p className="text-secondary font-bold text-5xl">
                        Welcome Page
                    </p>
                    <p className="text-secondary mt-4">
                    Join to get notifications for new offers!
                    </p>
                    <img 
                            src="/register.png" 
                            alt="3dillustration"
                            className='h-auto w-[30rem]'
                    />
                </div>
                
                <div className="card-style w-auto rounded-[3rem] p-8 my-auto">
                    <div className="text-center font-bold text-secondary text-5xl">
                        Create Your<br/>
                        Account
                    </div>
                    <form
                    onSubmit={handleSubmit} 
                    className='block max-w-xs mx-auto mt-[2rem]'>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type='text' placeholder='Email'
                        />
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type='password' placeholder='Password'
                        />
                        
                        <div className='flex items-center justify-center mt-[2rem]'>
                            <button type='submit' className='flex items-center card-style2 text-primary px-4 py-2 rounded-2xl font-bold group hover:bg-secondary/50 transition-all'>Login
                            </button>
                        </div>
                        
                        <div className='text-center mt-3'>
                            <Link className="text-white text-sm text-right"href={'/register'}>
                                Don't have an account? <span className='underline'>Register</span>
                            </Link>
                        </div>

                        {error && (
                        <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-3 mx-auto'>
                            {error}
                        </div>
                        )}
                        
                    </form>
                    
                    
                    </div>
            </div>
        </section>
    )
}
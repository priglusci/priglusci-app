"use client";

import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All fields are necessary.")
            return;
        }
        try{
            const resUserExists = await fetch("api/userExists",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            })

            const {user} = await resUserExists.json();

            if (user){
                setError("User already exists.");
                return;
            }

            const res = await fetch("api/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if (res.ok){
                const form = e.target;
                form.reset();
                router.push("/login");

            }else{
                console.log("User registration failed.");

            }
        }catch(error){
            console.log("Error during registration: ", error);
        }
    };

    return(
        <section className="mt-[4rem]">
            <div className="grid grid-cols-2">
                <div>
                    <p className="text-secondary font-bold text-5xl">
                        Create Your Account
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
                
                <div className="card-style w-auto rounded-[3rem] p-8">
                    <div className="text-center font-bold text-secondary text-5xl">
                        Sign Up
                    </div>
                    <form
                    onSubmit={handleSubmit} 
                    className='block max-w-xs mx-auto mt-[2rem]'>
                        <input 
                            onChange={(e) => setName(e.target.value)}
                            type='text' placeholder='Full Name'
                        />
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type='text' placeholder='Email'
                        />
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type='password' placeholder='Password'
                        />
                        <div className='flex items-center justify-center mt-[2rem]'>
                            <button type='submit' className='flex items-center card-style2 text-primary px-4 py-2 rounded-2xl font-bold group hover:bg-secondary/50 transition-all'>Register
                            </button>
                        </div>

                        
                        <div className='text-center mt-3'>
                            <Link className="text-white text-sm text-right"href={'/login'}>
                                Already have an account? <span className='underline'>Login</span>
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
import Image from 'next/image';
import Link from 'next/link'
export default function Header(){
    return(
        <header className='flex items-center justify-between mt-4 card-style gap-[5rem] py-4 px-8 rounded-[2rem]'>
            <Link href='/'>
                    <img 
                        src="/logoo.png" 
                        alt="logo"
                        className='w-10 h-10'
                    />
            </Link>
            <nav className='flex items-center gap-8 text-white font-semibold'>
                
                <Link href='/'> Home</Link>
                <Link href='/product'> Product</Link>
                <Link href=''> About</Link>
                <Link href=''> Contact</Link>
            </nav>
            {/* <nav className='flex items-center gap-4'>
                <Link href="" className='card-style rounded-full px-8 py-2 text-white font-semibold'>Login</Link>
                <Link href='/register' className='card-style2 text-primary rounded-full px-8 py-2 font-semibold'> Register</Link>
            </nav> */}
        </header>
    )
}
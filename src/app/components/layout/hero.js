import Image from 'next/image';
import Right from '../icons/right';

export default function Hero(){
    return(
        <section className='grid grid-cols-2'>
            <div className='mt-[2rem]'>
                <h1 className='text-white text-5xl font-semibold mt-20'>
                    It Smells<br/>
                    Like an<br/>
                    <span className='text-secondary underline'>Unforgettable</span>
                </h1>
                <p className='text-white my-4 mt-[2rem] pr-2'>
                    This perfume is the art of fragrance that invites laughter, making your every day a private stage for unexpected fragrant comedy.<br/>
                    <span className='text-primary bg-secondary'>
                        Enjoy a refreshing and cheerful sensation every time you wear it.
                    </span>
                </p>
                <div className='flex gap-4 text-sm mt-[2rem]'>
                    <button className='flex gap-2 items-center text-primary px-4 py-2 rounded-full font-bold card-style2 hover:bg-secondary/50 transition-all'>Order Now <Right />
                    </button>
                    <button className='font-semibold text-white flex gap-2 items-center py-2'>
                        Learn More
                        <Right/>
                    </button>
                </div>
            </div>
            <div className='text-right'>
            <img 
                src="/parfum-home.png" 
                alt="parfum"
                className='ml-20 mt-10'
            />
                {/* <Image className='mt-8' src={'/parfum-home.png'} layout={'fill'} objectFit={'contain'} alt={'parfume'}/> */}
            </div>
        </section>
    )
}
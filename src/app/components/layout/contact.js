export default function Testimoni(){
    return(
    <section className="mt-[4rem]">
        <div className="text-center text-white">
            <p className="text-white font-bold text-5xl">
                Contact Us
            </p>
        </div>

        <div className="flex items-center place-content-center mt-[2rem]">
            
            <div className="px-4">
                <button className='flex gap-2 p-3 items-center text-white rounded-full font-bold card-style hover:bg-gradient-to-t from-[#3e65cf] via-[#c91c16bb]   to-[#08851b] transition-all'>
                    <img 
                        src="/gmail.png" 
                        alt="gmail"
                        className='h-6 w-6'
                    />
                </button>
            </div>
            <div className="px-4">
                <button className='flex gap-2 p-3 items-center text-white rounded-full font-bold card-style hover:bg-gradient-to-r from-[#ece5dd] via-[#dcf8c6] to-[#075e54] transition-all'>
                    <img 
                        src="/whatsapp.png" 
                        alt="whatsapp"
                        className='h-6 w-6'
                    />
                </button>
            </div>
            <div className="px-4">
                <button className='flex gap-2 p-3 items-center text-white rounded-full font-bold card-style hover:bg-gradient-to-r from-[#405de6] via-[#833AB4] to-[#fd1d1d] transition-all'>
                    <img 
                        src="/instagram.png" 
                        alt="instagram"
                        className='h-6 w-6'
                    />
                </button>
            </div>
            
        </div>
    </section>
    )
}
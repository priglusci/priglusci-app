export default function Testinya(){
    return(
        <div className="grid grid-cols-2 rounded-[2rem] card-style text-white p-4">
            <img 
                src="/profilepict.jpg" 
                alt="profilepicture"
                className='rounded-[2rem]'
            />
            <div className="grid grid-rows-2 mt-4 max-h-[12rem] w-auto pl-4 pr-2">
                <div className="">
                    <p className="text-left font-semibold text-xl ">
                        @rezkymndr<br/> <br/>
                    </p>
                    <p className="italic">
                        Parfumnya enak banget, worth it dengan harganya euy.
                    </p>      
                </div>
                
            </div>
        </div>
    )
}

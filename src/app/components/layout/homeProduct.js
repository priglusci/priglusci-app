import ProductItem from "../product/productItem";

export default function HomeProduct() {
    return(
        <section className="mt-[4rem]">
            <div className="text-right text-white">
                <p className="font-semibold text-5xl">
                    Check Our
                </p>
                <p className="text-secondary font-bold text-5xl">
                    Products
                </p>
                <p className="font-semibold text-5xl">
                    Below!
                </p>
            </div>
            <div className="grid grid-cols-2 gap-[5rem] mt-[2rem]">
                <ProductItem/>
                <ProductItem/>
            </div>
            <div className='flex items-center justify-center mt-[2rem]'>
                    <button className='flex items-center card-style2 text-primary px-4 py-2 rounded-full font-bold group hover:bg-secondary/50 transition-all'>See More
                    </button>
            </div>
        </section>
    )
}
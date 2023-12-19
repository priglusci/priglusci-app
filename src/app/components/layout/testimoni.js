import Testinya from "../product/testinya";
export default function Testimoni(){
    return(
    <section className="mt-[4rem]">
        <div className="text-center text-white">
            <p className="text-secondary font-bold text-5xl">
                Testimonials
            </p>
        </div>
        <div className="grid grid-cols-2 gap-[2rem] mt-[2rem]">
            <Testinya/>
            <Testinya/>
            <Testinya/>
            <Testinya/>
        </div>
    </section>
    )
}
import React from "react"
import mainImg from "../assets/mainimg.png"

const Main = () => {

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <img src={mainImg} alt="Photo" />
                    <div className="flex flex-col gap-28 items-start w-[40%]">
                        <h3 className="text-[#462E6A] font-bold text-[36px]">Leading healthcare provider</h3>
                        <p className="text-[#7D7987] font-light text-[18px]">Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
                        in the solutions we deliver</p>
                        <button className="border border-[#458FF6] text-[#458FF6] py-[15px] px-[30px] rounded-full">
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main
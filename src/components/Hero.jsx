import React from "react"
import HeroImg from "../assets/image 4.png"

const Hero = () => {

    return (
        <section className="w-full py-20">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="flex flex-col w-[40%] h-full gap-10 items-start">
                        <h1 className="text-[#3C567B] font-bold text-[48px]">
                            Virtual healthcare Saviour for you
                        </h1>
                        <b className="text-[#93C1F9] text-[19px] font-medium">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </b>
                        <button className="bg-[#458FF6] rounded-full px-[30px] py-[15px] text-white justify-self-end">
                            Consult today
                        </button>
                    </div>
                    <div>
                        <img src={HeroImg} alt="PHOTO" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
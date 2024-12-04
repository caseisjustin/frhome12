import React from "react"
import Card from "./Cards/Card"
import CardImg1 from "../../assets/cardsimages/Frame-1.png"
import CardImg2 from "../../assets/cardsimages/Frame-2.png"
import CardImg3 from "../../assets/cardsimages/Frame-3.png"
import CardImg4 from "../../assets/cardsimages/Frame-4.png"
import CardImg5 from "../../assets/cardsimages/Frame.png"
import CardImg6 from "../../assets/cardsimages/Group.png"

const Services = () => {

    return (
        <section className="w-full py-20">
            <div className="container mx-auto">
                <div className="flex flex-col gap-20 items-center">
                    <div className="flex flex-col gap-7 items-center">
                        <h2 className="text-[#462E6A] font-bold text-[45px] before:w-5 border-b">
                            Services we Offer
                        </h2>
                        <p className="font-medium text-[19px] text-[#CCD2E9]">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                    </div>
                    <div className="grid gap-4 grid-cols-3">
                        <Card icon={CardImg1} title="Search doctor" desc="Choose your doctor from thousands of specialist, general, and trusted hospitals" />
                        <Card icon={CardImg2} title="Online pharmacy" desc="Buy  your medicines with our mobile application with a simple delivery system" />
                        <Card icon={CardImg3} title="Consultation" desc="Free consultation with our trusted doctors and get the best recomendations" />
                        <Card icon={CardImg4} title="Details info" desc="Free consultation with our trusted doctors and get the best recomendations" />
                        <Card icon={CardImg5} title="Emergency care" desc="You can get 24/7 urgent care for yourself or your children and your" />
                        <Card icon={CardImg6} title="Tracking" desc="Track and save your medical history and health data " />
                    </div>
                    <div>
                        <button className="border-[#458FF6] border rounded-full px-10 py-5 text-[#458FF6]">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
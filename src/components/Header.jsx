import React from "react"
import Logo from "../assets/logo.svg"

const Header = () => {

    return (
        <header className="w-full h-[80px] flex items-center">
            <div className="container mx-auto">
                <div className="flex justify-between w-full h-full">
                    <img src={Logo} alt="Saviour Care" />
                    <nav className="">
                        <ul className="list-none flex gap-5 ">
                            <li className="pb-3 hover:border-b border-hdrBdrCl cursor-pointer">
                                <a href="#" className="text-hdrNavCl text-txtSizPrm transition duration-300 hover:text-hdrNavClHvr">
                                    Home
                                </a>
                            </li>
                            <li className="pb-3 hover:border-b border-hdrBdrCl cursor-pointer">
                                <a href="#" className="text-hdrNavCl text-txtSizPrm transition duration-300 hover:text-hdrNavClHvr">
                                    Find a doctor
                                </a>
                            </li>
                            <li className="pb-3 hover:border-b border-hdrBdrCl cursor-pointer">
                                <a href="#" className="text-hdrNavCl text-txtSizPrm transition duration-300 hover:text-hdrNavClHvr">
                                    Apps
                                </a>
                            </li>
                            <li className="pb-3 hover:border-b border-hdrBdrCl cursor-pointer">
                                <a href="#" className="text-hdrNavCl text-txtSizPrm transition duration-300 hover:text-hdrNavClHvr">
                                    Testimonials
                                </a>
                            </li>
                            <li className="pb-3 hover:border-b border-hdrBdrCl cursor-pointer">
                                <a href="#" className="text-hdrNavCl text-txtSizPrm transition duration-300 hover:text-hdrNavClHvr">
                                    About us
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
"use client"
import { useAuth } from "@clerk/nextjs"
import TypewriterComponent from "typewriter-effect"

import Link from "next/link"
import { Button } from "./ui/button"

const LandingHero = () => {

    const {isSignedIn}=useAuth()

    return (
        <div className=" font-bold py-5 text-center">
            <div className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold space-y-5 mb-14">
                <h1 className="text-white">The Best DSA Sheet with</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to bg-pink-600">
                   <TypewriterComponent
                   options={{
                    strings:[
                        "Handpicked Best DSA Questions",
                        "Premium Quality Solutions",
                        "Voice controlled Navigation",
                        "24*7 Customer Support",
                        "Discussion Section"
                    ],
                    autoStart:true,
                    loop:true
                   }}
                   />
                </div>

            </div>

            <div className="text-sm md:text-2xl font-light text-zinc-400 mb-3">
                <p> Boost your Placement Preparation</p>
            </div>

            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold ">
                        Start for Free
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingHero
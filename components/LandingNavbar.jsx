"use client"
import { useEffect, useState } from "react"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs"

import { cn } from "../lib/utils.js"
import { Button } from "./ui/button"





const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const LandingNavbar = () => {
    const { isSignedIn } = useAuth();
    return (
        <nav className="pt-2 mt-1  flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-16 w-16 mr-4">
                    <Image fill alt="logo" src="/hope-black.png" sizes="(max-width:300px) 100vw, 33vw" />
                </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}> CP-Hope</h1>
            </Link>

                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="rounded-full ">Get Started</Button>
                </Link>
        </nav>
    )
}

export default LandingNavbar
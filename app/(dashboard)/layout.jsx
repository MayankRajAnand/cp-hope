"use client"
import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"


import DashboardNavbar from "../../components/DashboardNavbar"

import { useRouter } from 'next/navigation'
const alanKey = process.env.NEXT_PUBLIC_ALAN_KEY

const DashboardLayout = ({ children }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            //fire the animation
            mainControls.start("visible")
        }
    }, [isInView])

    const router = useRouter()
    useEffect(() => {
        const alanBtn = require('@alan-ai/alan-sdk-web');
        alanBtn({
            key: alanKey,
            onCommand: ({ command, t, link }) => {
                if (command === 'NavigateToTopic') {
                    router.push(`/dashboard/${t}`)
                }
                else if (command == 'goBack()') {
                    router.push(`/dashboard`)
                }
                else if (command == 'randomQues') {
                    console.log(link)
                    window.location.href = link
                }
                else if (command == 'randomQuesWithStatus') {
                    console.log(link)
                    window.location.href = link
                }

            },
            rootEl: document.getElementById('alan-btn'),
        });
    }, []);

    return (
        <div>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <main className="app" ref={ref}>
                <DashboardNavbar />
                <motion.div variants=
                    {{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.75, delay: 0.25 }}
                >
                    {children}
                    <div id="alan-btn" ></div>



                </motion.div>
            </main>
        </div>

    )

}
export default DashboardLayout
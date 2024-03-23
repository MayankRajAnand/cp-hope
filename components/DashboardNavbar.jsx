"use client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

import { UserButton, auth } from "@clerk/nextjs";

import { Montserrat } from "next/font/google";
import { cn } from "../lib/utils";

import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

import { loadStripe } from "@stripe/stripe-js";
import { checkoutOrder } from "@/lib/checkout.action";
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const DashboardNavbar = () => {
  const [toggle, setToggle] = useState(false);
  let pathname = usePathname();

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Bought the coffee");
    }

    if (query.get("canceled")) {
      console.log("Payment Cancelled");
    }
  }, []);

  const oncheckout = async () => {
    await checkoutOrder();
  };

  return (
    <nav className="flex justify-between w-full mb-16 pt-3">
      <Link href="/" className="flex items-center ">
        <div className="relative h-16 w-16 mr-4">
          <Image
            fill
            alt="logo"
            src="/hope-white.png"
            sizes="(max-width:300px) 100vw, 33vw"
          />
        </div>
        <h1 className={cn("text-2xl font-bold ", font.className)}> CP-Hope</h1>
      </Link>

      {/* Desktop Navigation */}
      <div className=" items-center  md:flex hidden">
        <div className="flex gap-x-5 md:gap-x-16 items-center ">
          <Link href="/dashboard">
            <p
              className={`text-xl text-zinc-500 font-bold hover:opacity-70 ${
                pathname === "/dashboard" ? "active" : ""
              } `}
            >
              {" "}
              Home
            </p>
          </Link>
          <Link href="/alan-ai-guide">
            <p
              className={`text-xl text-zinc-500 font-bold hover:opacity-70 ${
                pathname === "/alan-ai-guide" ? "active" : ""
              } `}
            >
              Alan-AI Guide
            </p>
          </Link>

          <Button variant="premium" onClick={oncheckout}>
            Buy me Coffee
          </Button>

          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex relative">
        <div className="flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? <X /> : <Menu />}
          </Button>

          {toggle && (
            <div className="dropdown">
              <Link
                href="/dashboard"
                className="dropdown_link"
                onClick={() => setToggle(false)}
              >
                Home
              </Link>
              <Link
                href="/alan-ai-guide"
                className="dropdown_link"
                onClick={() => setToggle(false)}
              >
                Alan AI Guide
              </Link>
              <Button variant="premium" onClick={oncheckout}>
                Buy me Coffee
              </Button>
              <Link href="/">
                <UserButton afterSignOutUrl="/" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;

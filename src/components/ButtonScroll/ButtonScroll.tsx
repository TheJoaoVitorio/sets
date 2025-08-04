"use client"

import { useState, useEffect } from "react"
import { Button } from "@dxdns/feflow-react"
import Icons from "../Icons/Icons"

export default function ButtonScroll() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        const scrollPorcentage = window.innerHeight * 0.20
        if (window.scrollY > scrollPorcentage) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <Button
            variant="outlined"
            style={{
                position: "fixed",
                bottom: "1rem",
                right: "1rem",
                zIndex: 1000,
                borderRadius: "16px",
                cursor: "pointer",
                opacity: isVisible ? 1 : 0,
                visibility: isVisible ? "visible" : "hidden",
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 300ms ease-in-out, transform 300ms ease-in-out",
            }}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <Icons.ChevronUp size={24} />
        </Button>
    )
}
"use client"

import { useEffect, useRef, useState } from "react"

interface FadeInProps {
    children: React.ReactNode
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(entry.target)
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [])

    const getTransform = () => {
        switch (direction) {
            case "up":
                return "translateY(30px)"
            case "down":
                return "translateY(-30px)"
            case "left":
                return "translateX(30px)"
            case "right":
                return "translateX(-30px)"
            default:
                return "none"
        }
    }

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "none" : getTransform(),
                transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
            }}
        >
            {children}
        </div>
    )
}

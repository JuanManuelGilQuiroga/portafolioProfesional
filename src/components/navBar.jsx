"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Inicio", href: "#inicio" },
        { name: "Acerca de mí", href: "#acercaDeMi" },
        { name: "Proyectos", href: "#proyectos" },
        { name: "Habilidades", href: "#habilidades" },
        { name: "Valores y Objetivos", href: "#objetivos" }
    ]

    return (
        <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
        >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
            <Link href="#inicio" className="text-xl font-bold text-amber-50">
            JMG<span className="text-red-500">.</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-amber-50/80 hover:text-amber-50 transition-colors">
                {link.name}
                </Link>
            ))}
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-950 border-zinc-800 p-0">
                <div className="flex flex-col h-full">
                <div className="p-6">
                    <Link href="#inicio" className="text-xl font-bold text-amber-50">
                    JMG<span className="text-red-500">.</span>
                    </Link>
                </div>
                <nav className="flex flex-col px-6 py-8 space-y-6">
                    {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="text-xl text-amber-50/80 hover:text-amber-50 transition-colors"
                    >
                        {link.name}
                    </Link>
                    ))}
                </nav>
                </div>
            </SheetContent>
            </Sheet>
        </div>
        </header>
    )
}
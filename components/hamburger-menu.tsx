'use client'

import { ArrowUpRight, Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Logo } from "./logo"
import Link from "next/link"

export default function HamburgerMenu() {
	const [showMenu, setShowMenu] = useState(false)
	const menu = useRef<HTMLDivElement>(null)

	useEffect(() => {

		function handleClickOutside(event: MouseEvent) {
			if (menu.current && !menu.current.contains(event.target as HTMLDivElement)) {
				setShowMenu(false)
			}
		}
		// Bind the event listener
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};

	}, [menu])

	return (
		<>
			<button onClick={() => setShowMenu(true)} aria-label="Menú" aria-expanded={showMenu} className="block lg:hidden p-2"><Menu size={32} absoluteStrokeWidth /> </button>

			{showMenu && (
				<div className="fixed z-50 inset-0 w-screen h-screen flex justify-end">
					<div className="fixed inset-0 bg-slate-950 opacity-80 animate-fade"></div>
					<div ref={menu} className="w-80 text-slate-900 bg-white relative overflow-hidden animate-appear">
						<div className="p-6">
							<div aria-hidden><Logo className="absolute scale-[8] bottom-36 left-1/2 -translate-x-1/2 text-slate-200/20" /></div>

							<button aria-label="Cerrar menú" onClick={() => setShowMenu(false)} className="absolute text-slate-400 right-6 top-14"><X size={32} absoluteStrokeWidth /></button>

							<nav className="relative z-10">
								<ul className="mt-24 font-serif text-3xl font-semibold flex flex-col gap-4">
									<li><Link className="flex gap-2" href="/"><div aria-hidden className="text-xs text-slate-600">01</div>Inicio</Link></li>
									<li><Link className="flex gap-2 whitespace-nowrap" href="/quienes-somos"><div aria-hidden className="text-xs text-slate-600">02</div>Quiénes somos</Link></li>
									<li><Link className="flex gap-2" href="/servicios"><div aria-hidden className="text-xs text-slate-600">03</div>Servicios</Link></li>
									<li><Link className="flex gap-2" href="/publicaciones"><div aria-hidden className="text-xs text-slate-600">04</div>Publicaciones</Link></li>
									<li><a onClick={() => setShowMenu(false)} className="flex gap-2" href="#contacto"><div aria-hidden className="text-xs text-slate-600">05</div>Contacto</a></li>
								</ul>
							</nav>

							<div className="mt-36 absolute bottom-24 z-10">
								<div className="flex gap-4 text-xl mt-10">
									<a className="flex gap-1 items-center" href="https://www.linkedin.com/company/espacio-constitucional" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="text-slate-600" size={20} /></a>
									<a className="flex gap-1 items-center" href="https://www.instagram.com/espacioconstitucional" target="_blank" rel="noopener noreferrer">Instagram <ArrowUpRight className="text-slate-600" size={20} /></a>
								</div>
								<a className="block text-slate-700 text-lg mt-3" href="mailto:info@espacioconstitucional.com">info@espacioconstitucional.com</a>
							</div>
						</div>
					</div>
				</div>
			)}
		</>

	)
}
import { Logo } from "./logo";
import HamburgerMenu from "./hamburger-menu";
import Link from "next/link";

export default function Navigation({ darkMode = true }: { darkMode?: boolean }) {
	return (
		<div>
			<header className={`${darkMode ? 'text-white' : 'text-slate-950'} flex items-center justify-between`}>
				<Link href="/" className="flex items-center gap-3">
					<Logo className={`${darkMode ? 'text-primary-200' : 'text-primary-600'}`} />
					<div className="font-serif leading-none">ESPACIO <br /><span className="font-semibold">CONSTITUCIONAL</span></div>
				</Link>

				<HamburgerMenu />

				<nav className="hidden lg:block">
					<ul className="flex gap-3">
						<li>
							<Link className={`${darkMode ? "hover:border-primary-200" : "hover:border-primary-600"} px-3 py-2 border-b-2 border-transparent duration-200`} href="/">Inicio</Link>
						</li>
						<li>
							<Link className={`${darkMode ? "hover:border-primary-200" : "hover:border-primary-600"} px-3 py-2 border-b-2 border-transparent duration-200`} href="/quienes-somos">Quiénes somos</Link>
						</li>
						<li>
							<Link className={`${darkMode ? "hover:border-primary-200" : "hover:border-primary-600"} px-3 py-2 border-b-2 border-transparent duration-200`} href="/servicios">Servicios</Link>
						</li>
						<li>
							<a className={`${darkMode ? "hover:border-primary-200" : "hover:border-primary-600"} px-3 py-2 border-b-2 border-transparent duration-200`} href="#">Publicaciones</a>
						</li>
						<li>
							<a className={`${darkMode ? "border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-black" : "border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"} px-4 py-2 border duration-200`} href="#contacto">Contacto</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
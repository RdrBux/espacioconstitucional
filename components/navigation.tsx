import { Logo } from "./logo";

export default function Navigation() {
	return (
		<div>
			<header className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Logo className="text-primary-200" />
					<div className="font-serif leading-none">ESPACIO <br /><span className="font-semibold">CONSTITUCIONAL</span></div>
				</div>
				<nav className="hidden lg:block">
					<ul className="flex gap-3">
						<li>
							<a className="px-3 py-2 border-b-2 border-transparent hover:border-primary-200 duration-200" href="#">Inicio</a>
						</li>
						<li>
							<a className="px-3 py-2 border-b-2 border-transparent hover:border-primary-200 duration-200" href="#">Quiénes somos</a>
						</li>
						<li>
							<a className="px-3 py-2 border-b-2 border-transparent hover:border-primary-200 duration-200" href="#">Servicios</a>
						</li>
						<li>
							<a className="px-3 py-2 border-b-2 border-transparent hover:border-primary-200 duration-200" href="#">Publicaciones</a>
						</li>
						<li>
							<a className="px-4 py-2 border border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-black duration-200" href="#">Contacto</a>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
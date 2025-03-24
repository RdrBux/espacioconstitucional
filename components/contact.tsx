import { Instagram, Linkedin, Mail } from "lucide-react"
import { getImageProps } from "next/image"
import { Logo } from "./logo"
import Link from "next/link"
import { getBackgroundImage } from "@/utils/utils"
import ContactForm from "./contact-form"

export default function Contact() {

	const {
		props: { srcSet },
	} = getImageProps({ alt: 'background', width: 2400, height: 1600, src: '/assets/bg-contact.jpg' })
	const backgroundImage = getBackgroundImage(srcSet)
	const style = { backgroundImage }

	return (
		<div style={style} className="bg-black bg-cover bg-center">
			<section id="contacto" className="py-20 lg:py-24 px-8 lg:px-4">
				<h2 className="text-center font-semibold text-2xl lg:text-4xl font-serif text-white">Realizá tu consulta de manera <br /> gratuita y sin compromisos</h2>

				<div className="bg-white py-10 lg:py-12 mt-12 lg:mt-16 grid lg:grid-cols-2 gap-16 max-w-4xl mx-auto">

					<ContactForm />

					<div className="flex flex-col gap-8 justify-center mx-auto">
						<div className="flex items-center gap-4">
							<Mail className="text-primary-600" size={40} absoluteStrokeWidth />
							<div>
								<h4 className="font-serif text-lg font-semibold">Correo electrónico</h4>
								<a className="text-slate-700 block -mt-1" href="mailto:info@espacioconstitucional.com">info@espacioconstitucional.com</a>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<Linkedin className="text-primary-600" size={40} absoluteStrokeWidth />
							<div>
								<h4 className="font-serif text-lg font-semibold">LinkedIn</h4>
								<a className="text-slate-700 block -mt-1" href="https://www.linkedin.com/company/espacio-constitucional" target="_blank" rel="noopener noreferrer">Espacio Constitucional</a>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<Instagram className="text-primary-600" size={40} absoluteStrokeWidth />
							<div>
								<h4 className="font-serif text-lg font-semibold">Instagram</h4>
								<a className="text-slate-700 block -mt-1" href="https://www.instagram.com/espacioconstitucional" target="_blank" rel="noopener noreferrer">@espacioconstitucional</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="border-t border-white/20">
				<footer className="container mx-auto px-4 text-white">
					<div className="flex flex-col lg:flex-row gap-3 justify-between items-center text-whit py-3">
						<div className="flex gap-2 items-center">
							<Logo className="h-7 w-7 text-primary-200" />
							<p className="font-serif">Espacio Constitucional</p>
						</div>

						<nav className="text-xs lg:text-sm">
							<ul className="flex gap-4">
								<li><Link className="hover:underline" href="/">Inicio</Link></li>
								<li><Link className="hover:underline" href="/quienes-somos">Quiénes somos</Link></li>
								<li><Link className="hover:underline" href="/servicios">Servicios</Link></li>
								{/* <li><Link className="hover:underline" href="/publicaciones">Publicaciones</Link></li> */}
							</ul>
						</nav>
					</div>
				</footer>
			</div>
		</div>
	)
}
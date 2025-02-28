import Image from "next/image";
import { Quotes } from "./icons";

export default function About() {
	return (
		<div className="bg-[#F8FAFC]">
			<section className="container mx-auto px-4 py-20 lg:py-24">
				<div className="flex items-center gap-40">
					<div className="text-lg max-w-3xl">
						<div className="relative">
							<h2 className="text-4xl leading-tighter lg:text-5xl font-semibold font-serif">Nuestra misión y compromiso</h2>
							<div className="absolute h-1.5 w-44 lg:w-80 bg-primary-200 -bottom-2"></div>
						</div>

						<p className="text-slate-800 mt-8">Espacio Constitucional nació con una visión clara: convertir el derecho en un aliado estratégico, no en una barrera. En un entorno normativo, político, económico y social en constante evolución, ofrecemos soluciones que aportan claridad y seguridad a actores tanto del sector público como privado.</p>
						<p className="text-slate-800 mt-6">Creemos en el valor de un asesoramiento estratégico alineado con los estándares internacionales. Nuestro compromiso es proporcionar respuestas precisas y efectivas, siempre con una visión de futuro.</p>
						<div className="flex mt-10 lg:mt-6 items-center gap-4 relative">
							<Image className="block lg:hidden w-20 h-20 rounded-full object-cover" src={"/assets/avatar.jpg"} alt="Facundo Osuna" width={640} height={960} />
							<div>
								<p className="font-serif font-semibold text-xl italic">Facundo Osuna</p>
								<p className="text-slate-800">Titular de Espacio Constitucional</p>
							</div>

							<Quotes className="block lg:hidden absolute top-0 right-0" />
						</div>
					</div>

					<div className="hidden lg:block relative shrink-0">
						<Image className="w-56 relative z-10" src={"/assets/avatar.jpg"} alt="Facundo Osuna" width={640} height={960} />
						<Image className="absolute w-48 -top-9 -left-9" aria-hidden src={'/assets/dot-grid.png'} width={320} height={320} alt="dot grid" />
					</div>
				</div>
			</section>
		</div>
	)
}
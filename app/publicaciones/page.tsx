import Contact from "@/components/contact";
import Navigation from "@/components/navigation";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Publicaciones | Espacio Constitucional",
	description: "",
};

export default function Publicaciones() {
	return (
		<>
			<Navigation darkMode={false} />
			<div id="content-container" className="container mx-auto px-4 pt-24">

				<main className="my-24">
					<div className="relative">
						<h1 className="text-5xl lg:text-6xl font-semibold text-center font-serif">Publicaciones</h1>
						<div className="w-44 h-1.5 bg-primary-200 absolute left-1/2 -translate-x-1/2 -bottom-3"></div>
					</div>

					<div className="py-16 grid lg:grid-cols-2 gap-16 lg:gap-24 gap-y-24 lg:gap-y-32">

						<article className="relative w-fit h-fit">
							<Image src="/assets/law.jpg" width={1920} height={1281} alt="" className="h-[22.5rem] lg:h-[25rem] bg-black object-cover" />
							<div className="bg-white p-6 shadow-[0_5px_30px_0] shadow-[#0F172B18] absolute left-8 right-8 lg:left-12 lg:right-12 -bottom-8 lg:-bottom-12">
								<p className="text-sm text-slate-500">3 de marzo de 2025</p>
								<h3 className="mt-1 font-serif text-xl lg:text-2xl font-semibold leading-tight">Cambios en la Normativa Laboral 2025</h3>
								<p className="text-slate-700 mt-3">Reformas clave y su impacto en empresas y trabajadores</p>
								<button className="mt-5 px-4 py-2 bg-primary-600 hover:bg-primary-700 duration-200 text-white font-semibold">Descargar informe</button>
							</div>
						</article>

						<article className="relative w-fit h-fit">
							<Image src="/assets/law.jpg" width={1920} height={1281} alt="" className="h-[22.5rem] lg:h-[25rem] bg-black object-cover" />
							<div className="bg-white p-6 shadow-[0_5px_30px_0] shadow-[#0F172B18] absolute left-8 right-8 lg:left-12 lg:right-12 -bottom-8 lg:-bottom-12">
								<p className="text-sm text-slate-500">3 de marzo de 2025</p>
								<h3 className="mt-1 font-serif text-xl lg:text-2xl font-semibold leading-tight">Cambios en la Normativa Laboral 2025</h3>
								<p className="text-slate-700 mt-3">Reformas clave y su impacto en empresas y trabajadores</p>
								<button className="mt-5 px-4 py-2 bg-primary-600 hover:bg-primary-700 duration-200 text-white font-semibold">Descargar informe</button>
							</div>
						</article>
					</div>
				</main>
			</div>
			<Contact />
		</>
	);
}
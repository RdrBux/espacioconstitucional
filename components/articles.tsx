import Image from "next/image";

export default function Articles() {
	return (
		<section className="container mx-auto px-4 pt-20 lg:pt-24 pb-12 lg:pb-20">
			<div className="relative">
				<h2 className="text-5xl lg:text-6xl font-semibold font-serif">Publicaciones</h2>
				<div className="w-44 h-1.5 bg-primary-200 absolute -bottom-3"></div>
			</div>

			<div className="py-16 flex gap-16 lg:gap-24 overflow-auto">
				<article className="relative w-fit h-fit">
					<Image src="/assets/law.jpg" width={1920} height={1281} alt="" className="w-[240px] lg:w-[360px] h-[360px] lg:h-[400px] bg-black object-cover" />
					<div className="bg-white p-6 shadow-[0_5px_30px_0] shadow-[#0F172B18] w-64 lg:w-80 absolute left-8 lg:left-24 -bottom-8 lg:-bottom-12">
						<h3 className="font-serif text-xl lg:text-2xl font-semibold leading-tight">Cambios en la Normativa Laboral 2025</h3>
						<p className="text-slate-700 mt-3">Reformas clave y su impacto en empresas y trabajadores</p>
						<button className="mt-5 px-4 py-2 bg-primary-600 hover:bg-primary-700 duration-200 text-white font-semibold">Descargar informe</button>
					</div>
				</article>

				<article className="relative w-fit h-fit">
					<Image src="/assets/law.jpg" width={1920} height={1281} alt="" className="w-[240px] lg:w-[360px] h-[360px] lg:h-[400px] bg-black object-cover" />
					<div className="bg-white p-6 shadow-[0_5px_30px_0] shadow-[#0F172B18] w-64 lg:w-80 absolute left-8 lg:left-24 -bottom-8 lg:-bottom-12">
						<h3 className="font-serif text-xl lg:text-2xl font-semibold leading-tight">Cambios en la Normativa Laboral 2025</h3>
						<p className="text-slate-700 mt-3">Reformas clave y su impacto en empresas y trabajadores</p>
						<button className="mt-5 px-4 py-2 bg-primary-600 hover:bg-primary-700 duration-200 text-white font-semibold">Descargar informe</button>
					</div>
				</article>
			</div>
		</section>
	)
}
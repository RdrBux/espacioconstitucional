export default function Articles() {
	return (
		<section className="container mx-auto px-4 pt-20 lg:pt-24 pb-32 lg:pb-36">
			<div className="relative">
				<h2 className="text-5xl lg:text-6xl font-semibold font-serif">Publicaciones</h2>
				<div className="w-44 h-1.5 bg-primary-200 absolute -bottom-3"></div>
			</div>

			<div className="mt-24 flex gap-24 overflow-hidden">
				<article className="relative w-fit">
					<div className="w-[360px] h-[400px] bg-orange-700"></div>
					<div className="bg-white p-6 shadow-[0_5px_30px_0] shadow-[#0F172B18] w-80 absolute -right-14 -bottom-12">
						<h3 className="font-serif text-2xl font-semibold leading-tight">Cambios en la Normativa Laboral 2025</h3>
						<p className="text-slate-700 mt-3">Reformas clave y su impacto en empresas y trabajadores</p>
						<button className="mt-5 px-4 py-2 bg-primary-600 hover:bg-primary-700 duration-200 text-white font-semibold">Descargar informe</button>
					</div>
				</article>

				<article className="relative w-fit">
					<div className="w-[360px] h-[400px] bg-orange-700"></div>
					<div className="bg-white p-6 shadow-[0_5px_30px_0] shadow-[#0F172B18] w-80 absolute -right-14 -bottom-12">
						<h3 className="font-serif text-2xl font-semibold leading-tight">Cambios en la Normativa Laboral 2025</h3>
						<p className="text-slate-700 mt-3">Reformas clave y su impacto en empresas y trabajadores</p>
						<button className="mt-5 px-4 py-2 bg-primary-600 hover:bg-primary-700 duration-200 text-white font-semibold">Descargar informe</button>
					</div>
				</article>
			</div>
		</section>
	)
}
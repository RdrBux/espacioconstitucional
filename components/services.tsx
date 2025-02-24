import { Service } from "./icons";

export default function Services() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="relative">
				<h2 className="text-6xl font-semibold text-center font-serif">Servicios</h2>
				<div className="w-44 h-1.5 bg-primary-200 absolute left-1/2 -translate-x-1/2 -bottom-3"></div>
			</div>

			<div className="mt-20 border border-slate-200 px-8 py-12 relative">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white"><h3 className="font-semibold text-3xl font-serif text-center">Para Gobiernos Locales y ONGs</h3></div>
				<ul className="grid grid-cols-3 gap-12">
					<li className="flex flex-col items-center gap-3">
						<Service />
						<h4 className="font-serif font-semibold text-lg text-center">Asesoría y Consultoría Jurídica</h4>
						<p className="text-center text-sm text-slate-800">Reformas Constitucionales y Legislativas. <br /> Diseño e Implementación de Políticas Públicas. <br /> Control de Constitucionalidad y Convencionalidad. <br /> Litigio Estratégico.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<Service />
						<h4 className="font-serif font-semibold text-lg text-center">Asesoría y Consultoría Jurídica</h4>
						<p className="text-center text-sm text-slate-800">Reformas Constitucionales y Legislativas. <br /> Diseño e Implementación de Políticas Públicas. <br /> Control de Constitucionalidad y Convencionalidad. <br /> Litigio Estratégico.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<Service />
						<h4 className="font-serif font-semibold text-lg text-center">Asesoría y Consultoría Jurídica</h4>
						<p className="text-center text-sm text-slate-800">Reformas Constitucionales y Legislativas. <br /> Diseño e Implementación de Políticas Públicas. <br /> Control de Constitucionalidad y Convencionalidad. <br /> Litigio Estratégico.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<Service />
						<h4 className="font-serif font-semibold text-lg text-center">Asesoría y Consultoría Jurídica</h4>
						<p className="text-center text-sm text-slate-800">Reformas Constitucionales y Legislativas. <br /> Diseño e Implementación de Políticas Públicas. <br /> Control de Constitucionalidad y Convencionalidad. <br /> Litigio Estratégico.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<Service />
						<h4 className="font-serif font-semibold text-lg text-center">Asesoría y Consultoría Jurídica</h4>
						<p className="text-center text-sm text-slate-800">Reformas Constitucionales y Legislativas. <br /> Diseño e Implementación de Políticas Públicas. <br /> Control de Constitucionalidad y Convencionalidad. <br /> Litigio Estratégico.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<Service />
						<h4 className="font-serif font-semibold text-lg text-center">Asesoría y Consultoría Jurídica</h4>
						<p className="text-center text-sm text-slate-800">Reformas Constitucionales y Legislativas. <br /> Diseño e Implementación de Políticas Públicas. <br /> Control de Constitucionalidad y Convencionalidad. <br /> Litigio Estratégico.</p>
					</li>
				</ul>
			</div>
		</section>
	)
}
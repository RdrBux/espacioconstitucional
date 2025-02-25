import { BookText, BriefcaseBusiness, Building2, GraduationCapIcon, Handshake, NotebookText, Scale, SquareActivity, Trees } from "lucide-react";

export default function Services() {
	return (
		<section className="container mx-auto px-4 py-24">
			<div className="relative">
				<h2 className="text-6xl font-semibold text-center font-serif">Servicios</h2>
				<div className="w-44 h-1.5 bg-primary-200 absolute left-1/2 -translate-x-1/2 -bottom-3"></div>
			</div>

			<div className="mt-20 border border-slate-200 px-8 py-12 relative">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white"><h3 className="font-semibold text-3xl font-serif text-center">Para Gobiernos Locales y ONGs</h3></div>
				<ul className="grid grid-cols-3 gap-x-12 gap-y-8">
					<li className="flex flex-col items-center gap-3">
						<BriefcaseBusiness className="text-primary-600" size={32} absoluteStrokeWidth />
						<h4 className="font-serif font-semibold text-lg text-center">Asesoría y Consultoría Jurídica</h4>
						<p className="text-center text-sm text-slate-700">Reformas Constitucionales y Legislativas. <br /> Diseño e Implementación de Políticas Públicas. <br /> Control de Constitucionalidad y Convencionalidad. <br /> Litigio Estratégico.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<GraduationCapIcon size={32} className="text-primary-600" absoluteStrokeWidth />
						<h4 className="font-serif font-semibold text-lg text-center">Capacitación y Formación</h4>
						<p className="text-center text-sm text-slate-700">Formación en Teoría Constitucional y Derechos Humanos.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<NotebookText size={32} className="text-primary-600" absoluteStrokeWidth />
						<h4 className="font-serif font-semibold text-lg text-center">Investigación y Publicaciones Especializadas</h4>
						<p className="text-center text-sm text-slate-700">Investigación Académica y Jurídica. <br /> Publicación especializada. <br /> Elaboración de Recomendaciones.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<Building2 size={32} className="text-primary-600" absoluteStrokeWidth />
						<h4 className="font-serif font-semibold text-lg text-center">Incidencia Política y Participación Ciudadana</h4>
						<p className="text-center text-sm text-slate-700">Estrategias de Incidencia en Reformas normativas. <br /> Fortalecimiento de la Sociedad Civil.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<SquareActivity size={32} className="text-primary-600" absoluteStrokeWidth />
						<h4 className="font-serif font-semibold text-lg text-center">Monitoreo y Seguimiento de Reformas Normativas</h4>
						<p className="text-center text-sm text-slate-700">Monitoreo de Reformas Constitucionales y Normativas. <br /> Evaluación de Políticas Públicas.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<BookText size={32} className="text-primary-600" absoluteStrokeWidth />
						<h4 className="font-serif font-semibold text-lg text-center">Elaboración de Dictámenes, Ordenanzas, Leyes y Fundamentaciones</h4>
						<p className="text-center text-sm text-slate-700">Dictámenes Jurídicos Especializados. <br /> Redacción de Leyes, Ordenanzas y Reglamentos Locales.</p>
					</li>
				</ul>
			</div>

			<div className="mt-20 border border-slate-200 px-8 py-12 relative">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white"><h3 className="font-semibold text-3xl font-serif text-center">Para Empresas y el Sector Privado</h3></div>
				<ul className="grid grid-cols-3 gap-x-12 gap-y-8">
					<li className="flex flex-col items-center gap-3">
						<Scale size={32} className="text-primary-600" absoluteStrokeWidth />
						<h4 className="font-serif font-semibold text-lg text-center">Cumplimiento Normativo y Gobernanza Corporativa</h4>
						<p className="text-center text-sm text-slate-700">Alineación Regulatoria y Cumplimiento Constitucional. <br /> Auditorías y Evaluaciones de Cumplimiento. <br /> Diseño e Implementación de Políticas Internas. <br /> Análisis de Riesgos.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<GraduationCapIcon size={32} className="text-primary-600" absoluteStrokeWidth />
						<h4 className="font-serif font-semibold text-lg text-center">Capacitación y Desarrollo en Gobernanza Empresarial</h4>
						<p className="text-center text-sm text-slate-700">Formación en Derechos Humanos y Empresas.</p>
					</li>

					<li className="flex flex-col items-center gap-3">
						<Trees className="text-primary-600" size={32} absoluteStrokeWidth />
						<h4 className="font-serif font-semibold text-lg text-center">Impacto Social y Ambiental</h4>
						<p className="text-center text-sm text-slate-700">Evaluación de Impacto en Derechos Humanos y Medio Ambiente. <br /> Diseño de Estrategias de Mitigación.</p>
					</li>

					<div className="col-span-3 mx-32">
						<div className="grid grid-cols-2 gap-12">
							<li className="flex flex-col items-center gap-3 max-w-sm">
								<Handshake size={32} className="text-primary-600" absoluteStrokeWidth />
								<h4 className="font-serif font-semibold text-lg text-center">Estrategias de Incidencia y Responsabilidad Social Empresarial</h4>
								<p className="text-center text-sm text-slate-700">Participación en Políticas Públicas y Alianzas Estratégicas.</p>
							</li>

							<li className="flex flex-col items-center gap-3 max-w-sm">
								<SquareActivity size={32} className="text-primary-600" absoluteStrokeWidth />
								<h4 className="font-serif font-semibold text-lg text-center">Monitoreo y Evaluación para Empresas</h4>
								<p className="text-center text-sm text-slate-700">Seguimiento de Cumplimiento Normativo. <br /> Análisis del Entorno Legal y Regulatorio.</p>
							</li>
						</div>
					</div>

				</ul>
			</div>
		</section>
	)
}
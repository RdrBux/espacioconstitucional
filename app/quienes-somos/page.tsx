import Contact from "@/components/contact";
import Navigation from "@/components/navigation";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Quiénes somos | Espacio Constitucional",
	description: "",
};

export default function About() {
	return (
		<>
			<Navigation darkMode={false} />
			<div id="quienes-somos" className="container mx-auto px-4 pt-24">

				<main className="my-24">
					<div className="relative">
						<h1 className="text-5xl lg:text-6xl font-semibold text-center font-serif">¿Quiénes somos?</h1>
						<div className="w-44 lg:w-80 h-1.5 bg-primary-200 absolute left-1/2 -translate-x-1/2 -bottom-3"></div>
					</div>

					<div className="max-w-2xl mx-auto mt-16 font-serif text-slate-800 text-lg">
						<p>Espacio Constitucional es una consultora que nace con la misión de contribuir al fortalecimiento de las instituciones y promover el cumplimiento de estándares internacionales en América Latina.</p>
						<p className="mt-5">A través de nuestros servicios, ofrecemos asesoría integral y acompañamiento especializado a diversos actores en el diseño y desarrollo de estrategias orientadas al fortalecimiento institucional, la mejora de procesos internos y la adopción de estándares alineados con buenas prácticas a nivel nacional e internacional.</p>
						<p className="mt-5">Nuestra labor se fundamenta en un análisis profundo y contextualizado de la realidad constitucional, política, económica y social de cada país, permitiéndonos diseñar soluciones jurídicas y normativas adaptadas a las necesidades específicas de cada sector. Nos enfocamos en garantizar la coherencia entre las instituciones y las disposiciones normativas nacionales e internacionales, promoviendo la protección de los derechos fundamentales, la transparencia institucional, el fortalecimiento democrático y la sostenibilidad de las políticas adoptadas.</p>
						<p className="mt-5">Todo esto implica una labor transversal que abarca:</p>
						<ul className="list-disc ml-5 mt-2">
							<li>Diseño, revisión y actualización de marcos normativos para su armonización con los principios constitucionales y las obligaciones internacionales en materia de derechos humanos.</li>
							<li>Asesoramiento en la creación, implementación y evaluación de políticas públicas o empresariales con un enfoque en la promoción de institucionalidad y sostenibilidad. </li>
							<li>Fortalecimiento de la capacidad institucional mediante el desarrollo de estrategias de gobernanza y transparencia.</li>
							<li>Evaluación del impacto normativo y regulatorio, identificando riesgos constitucionales y diseñando estrategias de mitigación.</li>
							<li>Capacitación y formación especializada en teoría constitucional y derechos humanos.</li>
							<li>Elaboración de estudios e informes técnicos especializados, proporcionando análisis jurídico-político que sirva como base para la toma de decisiones informadas.</li>
						</ul>
						<p className="mt-5">Nuestro acompañamiento es personalizado, estratégico y de alto impacto, con el objetivo de fortalecer el marco normativo y/o institucional de cada actor con el que trabajamos. Reafirmamos, de esta forma, nuestro compromiso de ser un referente en la investigación, análisis, formación y asesoramiento en materia constitucional.</p>
					</div>

					<p className="mt-16 text-center text-xl font-semibold font-serif">¿Te interesa trabajar con nosotros? <br /> Conocé nuestros <Link href="/servicios" className="text-primary-600 hover:underline hover:underline-offset-4">Servicios.</Link></p>
				</main>
			</div>
			<Contact />
		</>
	);
}
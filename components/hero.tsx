import { getImageProps } from "next/image"
import Navigation from "./navigation"
import Link from "next/link"

function getBackgroundImage(srcSet = '') {
	const imageSet = srcSet
		.split(', ')
		.map((str) => {
			const [url, dpi] = str.split(' ')
			return `url("${url}") ${dpi}`
		})
		.join(', ')
	return `image-set(${imageSet})`
}

export default function Hero() {

	const {
		props: { srcSet },
	} = getImageProps({ alt: 'background', width: 2400, height: 1600, src: '/assets/hero-bg.jpg' })
	const backgroundImage = getBackgroundImage(srcSet)
	const style = { backgroundImage }

	return (
		<div style={style} className="bg-black bg-cover bg-center">
			<div className="container mx-auto px-4 pt-12">
				<div className="text-white">
					<Navigation />

					<section className="pt-40 pb-48">
						<h1 className="font-serif text-[8vw] leading-tight lg:text-6xl font-semibold">Construyendo el marco <br /> ideal para tu institución</h1>
						<p className="max-w-xl mt-4">Somos una consultora especializada en brindar asesoría integral y acompañamiento técnico a diversos actores, ayudándolos a diseñar e implementar estrategias que fortalezcan la institucionalidad, promuevan la transparencia, garanticen la coherencia normativa y fomenten el cumplimiento de buenas prácticas internacionales.</p>
						<Link className="bg-primary-600 text-white px-6 py-3 mt-6 block w-fit hover:bg-primary-700 duration-200" href="/quienes-somos">Conocenos</Link>
					</section>

				</div>
			</div>
		</div>
	)
}
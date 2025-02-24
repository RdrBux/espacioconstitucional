import { getImageProps } from "next/image"
import Navigation from "./navigation"

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

					<section className="py-40">
						<h1 className="font-serif text-6xl font-semibold">Construyendo el marco <br /> ideal para tu institución</h1>
						<p className="max-w-2xl mt-4">Somos una consultora especializada en asesoría jurídica y fortalecimiento institucional en América Latina. Acompañamos a gobiernos, ONGs y empresas en el diseño de estrategias normativas, políticas públicas y cumplimiento de estándares internacionales.</p>
						<a className="bg-primary-600 text-white px-6 py-3 mt-6 block w-fit hover:bg-primary-700 duration-200" href="#">Conocenos</a>
					</section>

				</div>
			</div>
		</div>
	)
}
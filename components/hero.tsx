import { getImageProps } from "next/image"
import Link from "next/link"
import { getBackgroundImage } from "@/utils/utils"

export default function Hero() {

	const {
		props: { srcSet },
	} = getImageProps({ alt: 'background', width: 2400, height: 1600, src: '/assets/hero-bg.jpg' })
	const backgroundImage = getBackgroundImage(srcSet)
	const style = { backgroundImage }

	return (
		<div style={style} className="bg-black bg-cover bg-[5%_50%] lg:bg-center">
			<div className="container mx-auto px-4">
				<div className="text-white">
					<section className="pt-64 pb-48">
						<h1 className="font-serif text-[8vw] md:text-5xl leading-tight lg:text-6xl 2xl:text-7xl font-semibold">Construyendo el marco <br /> ideal para tu institución</h1>
						<p className="max-w-xl 2xl:max-w-3xl mt-4">Somos una consultora especializada en brindar asesoría integral y acompañamiento técnico a diversos actores, ayudándolos a diseñar e implementar estrategias que fortalezcan la institucionalidad, promuevan la transparencia, garanticen la coherencia normativa y fomenten el cumplimiento de buenas prácticas internacionales.</p>
						<Link className="bg-primary-600 text-white px-6 py-3 mt-6 block w-fit hover:bg-primary-700 duration-200" href="/quienes-somos">Conocenos</Link>
					</section>

				</div>
			</div>
		</div>
	)
}
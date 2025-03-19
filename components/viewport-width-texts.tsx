'use client'

import useScalingValue from "@/hooks/useScalingValue"

export function HeroTitle() {
	const { scalingValue } = useScalingValue()
	console.log(scalingValue)

	return (
		<h1 className={`${scalingValue > 1 ? 'text-2xl' : 'text-[8vw]'} font-serif md:text-5xl leading-tight lg:text-6xl 2xl:text-7xl font-semibold`}>Construyendo el marco <br /> ideal para tu institución</h1>
	)
}

export function ServicesSubTitle({ content }: { content: string }) {
	const { scalingValue } = useScalingValue()

	return (
		<h3 className={`${scalingValue > 1 ? 'text-xl' : 'text-[5.5vw]'} font-semibold sm:text-3xl whitespace-nowrap font-serif text-center`}>
			{content}
		</h3>
	)

}
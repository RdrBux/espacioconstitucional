'use client'

import useScalingValue from "@/hooks/useScalingValue"

export function HeroTitle() {
	const { scalingValue } = useScalingValue()
	console.log(scalingValue)

	return (
		<h1 className={`font-serif text-[${`${8 * scalingValue}vw`}] md:text-5xl leading-tight lg:text-6xl 2xl:text-7xl font-semibold`}>Construyendo el marco <br /> ideal para tu institución</h1>
	)
}

export function ServicesSubTitle({ content }: { content: string }) {
	const { scalingValue } = useScalingValue()

	return (
		<h3 className={`font-semibold text-[${`${5.5 * scalingValue}vw`}] sm:text-3xl whitespace-nowrap font-serif text-center`}>
			{content}
		</h3>
	)

}
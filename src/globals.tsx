export const theme = {
	colors: {
		background: "rgb(0, 18, 26)",
		mainText: "rgb(233, 242, 192)",
		mainTextContrast: "rgb(0, 18, 26)",

		primary: "rgb(41, 102, 163)",
		primaryDark: "rgb(33, 88, 143)",
		primaryPale: "rgb(42, 158, 221)",

		secondary: "rgb(255, 166, 0)",
		secondaryPale: "rgb(255, 191, 73)",

		ternary: "rgb(255, 91, 85)",
		ternaryPale: "rgb(253, 189, 181)",
	}
}

export enum Device {
	Mobile = 700,
	Desktop = 2048
}

export function mediaScreen(d: Device): string {
	return `@media screen and (max-width: ${d.valueOf()}px)`
}

export const onMobile = mediaScreen(Device.Mobile)


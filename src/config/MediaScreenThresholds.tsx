enum Device {
	Mobile = 700,
	Desktop = 2048
}

function mediaScreen(d: Device): string {
	return `@media screen and (max-width: ${d.valueOf()}px)`
}

// to use in styled-components as ${onMobile} { ...some css... }
export const onMobile = mediaScreen(Device.Mobile)
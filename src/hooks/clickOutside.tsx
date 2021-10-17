import { useEffect } from "react";

export default function useOutsideClickDetector(ref: React.RefObject<HTMLElement>, fn: () => void) {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (event.target instanceof Element && !ref?.current?.contains(event.target as Element)) {
				fn();
			}
		}
		document.addEventListener("click", handleClickOutside, true)
		return () => {
			document.removeEventListener("click", handleClickOutside, true)
		}
	})
}
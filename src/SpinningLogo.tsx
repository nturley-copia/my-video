import { interpolate, useCurrentFrame } from 'remotion';

export const SpinningLogo: React.FC = () => {
	const frame = useCurrentFrame();
	const phase = Math.floor(frame / 120);
	let greenX = 0
	let greenY = 0
	let blackX = 0
	let blackY = 0
	if (phase == 0) {
		greenX = interpolate(frame, [phase * 120, (phase + 1) * 120], [40, 0])
		blackX = interpolate(frame, [phase * 120, (phase + 1) * 120], [0, 40])
		blackY = 40
	}
	if (phase == 1) {
		greenY = interpolate(frame, [phase * 120, (phase + 1) * 120], [0, 40])
		blackX = 40
		blackY = interpolate(frame, [phase * 120, (phase + 1) * 120], [40, 0])
	}
	if (phase == 2) {
		greenX = interpolate(frame, [phase * 120, (phase + 1) * 120], [0, 40])
		greenY = 40
		blackX = interpolate(frame, [phase * 120, (phase + 1) * 120], [40, 0])
		blackY = 0
	}
	if (phase === 3) {
		greenX = 40
		greenY = interpolate(frame, [phase * 120, (phase + 1) * 120], [40, 0])
		blackY = interpolate(frame, [phase * 120, (phase + 1) * 120], [0, 40])
	}
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 158" width="158" height="158" style={{ backgroundColor: 'white' }}>
			<defs>
				<rect id="green" width="118" height="118" x={greenX} y={greenY} className="green">
				</rect>
				<rect id="black" width="118" height="118" x={blackX} y={blackY} className="black">
				</rect>
			</defs>
			<mask id="blackMask">
				<rect width="158" height="158" x="0" y="0" fill="white"></rect>
				<use href="#green"></use>
			</mask>
			<mask id="greenMask">
				<rect width="158" height="158" x="0" y="0" fill="white"></rect>
				<use href="#black"></use>
			</mask>
			<g mask="url(#greenMask)" >
				<use href="#green" fill="#05a595" ></use>
			</g>
			<g mask="url(#blackMask)">
				<use href="#black" ></use>
			</g>
		</svg>);
};

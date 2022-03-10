import './fonnty.css'
import { Easing, interpolate, useCurrentFrame } from 'remotion';

export const Comrade: React.FC = () => {
  const frame = useCurrentFrame();
  const rays = 40
  const cx=250
  const cy =250
  const step = (Math.PI*2)/rays
  const shift = step*4*frame/120
  const points = new Array(rays).fill(undefined).map((val,idx) =>
   [Math.cos(step*idx+shift)*1000+cx, Math.sin(step*idx+shift)*1000+cy])
  console.log(points)
  return <svg width="500" height="500">
      <rect width="500" height="500" fill="red"/>
      {points.map((p,i) => (
        i%2==0?null:
        <path
        d={`M250,250 L${p[0]},${p[1]} L${points[i-1][0]},${points[i-1][1]} Z`}
        fill="#fa9"
        />
      ))}
      <circle cx="250" cy="250" r="80" fill="#fa9"/>
      <defs>
		<rect id="green" width="59" height="59" x="230" y="210" className="green">
		</rect>
		<rect id="black" width="59" height="59" x="210" y="230" className="black">
		</rect>
	</defs>
	<mask id="blackMask">
		<rect width="80" height="80" x="209" y="229" fill="white"></rect>
		<use href="#green"></use>
	</mask>
	<mask id="greenMask">
		<rect width="80" height="80" x="229" y="209" fill="white"></rect>
		<use href="#black"></use>
	</mask>
	<g mask="url(#greenMask)" >
		<use href="#green" fill="#a00"></use>
	</g>
	<g mask="url(#blackMask)">
		<use href="#black" fill="#fdd" stroke="#a00" stroke-width="2"></use>
	</g>
	<use href="#green" fill="none" stroke="#a00" stroke-width="2"></use>
	<text x="250" y="430" style={{
    fontFamily:'nikkyou_sanssans',
    textAnchor:'middle',
    fontSize: '100px',
    fill:'#fcc',
    stroke: '#a00',
    strokeWidth: '3px'
  }}
  >COPIA!</text>
    </svg>
}
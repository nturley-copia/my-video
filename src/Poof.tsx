import { Easing, interpolate, useCurrentFrame } from 'remotion';

export const Poof: React.FC = () => {
  const frame = useCurrentFrame();
  const framesPerPhase = 30
  const phase = Math.floor(frame / framesPerPhase)
  const phaseRange = [framesPerPhase * phase, (phase + 1) * framesPerPhase]
  let logoOpacity = 1
  let whiteX = 0;
  let whiteY = 40;
  let greenX = 40;
  let greenY = 0;
  let dashLength = 200;
  let dashSpaceLength = 0;
  let fillOpacity = 1.0;
  let scale = 0
  if (phase<2) {
    scale = interpolate(frame, [0,60], [300, 0])
    fillOpacity = interpolate(frame, [0,60], [0, 1])
    logoOpacity = interpolate(frame, [0,60], [0, 1])
  }
  if (phase> 3) {
    scale = interpolate(frame, [120,180], [0, 300])
    fillOpacity = interpolate(frame, [120,180], [1, 0])
    logoOpacity = interpolate(frame, [120,180], [1, 0])
  }
    
  
  return <div style={{ backgroundColor: 'black', width: '100%', display: 'flex', alignItems: 'center' }}>
    <svg viewBox="0 0 560 158" width="560" height="158" style={{ marginRight: '20px' }}>
    <filter id="noise" x='0%' y='0%' width='100%' height='100%'>
      <feTurbulence result="turbResult" baseFrequency=".085" numOctaves="1" seed="1" type="fractalNoise" />
      <feDisplacementMap in="SourceGraphic" in2="turbResult" scale={scale} xChannelSelector="R" yChannelSelector="R"/>
</filter>
      <g filter="url(#noise)">
      <defs>
      <rect id="green" width="118" height="118" x={whiteX} y={whiteY}>
      </rect>
      <rect id="black" width="118" height="118" x={greenX} y={greenY}>
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
        <use href="#green" fill="white" opacity={logoOpacity}></use>
      </g>
      <g mask="url(#blackMask)">
        <use href="#black" fill="#05a595" opacity={logoOpacity}></use>
      </g>
      <g transform="translate(200, 50)">
      <path
        stroke="#fff"
        fill="#fff"
        style={{
          opacity:fillOpacity
        }}
        d="M0 36.825C0 15.867 13.692.012 34.71.012a32.925 32.925 0 0120.128 6.196c3 2.337 5.485 5.267 7.3 8.607a27.576 27.576 0 013.243 10.802H47.923a12.728 12.728 0 00-4.46-8.178 12.771 12.771 0 00-8.844-2.962c-11.41 0-16.865 9.568-16.865 22.348s6.504 22.302 16.956 22.302a13 13 0 009.214-3.096 12.955 12.955 0 004.478-8.613H65.86a27.726 27.726 0 01-8.49 18.02c-5.408 5.216-12.619 7.973-22.569 7.973C14.103 73.365 0 57.897 0 36.825zM82.061 36.733c0-21.072 13.51-36.722 34.824-36.722s34.893 15.65 34.893 36.722c0 21.072-13.51 36.723-34.893 36.723-21.383 0-34.824-15.65-34.824-36.723zm51.985 0c0-12.802-5.637-22.643-17.07-22.643s-17.16 9.84-17.16 22.643 5.819 22.553 17.16 22.553c11.342 0 17.07-9.75 17.07-22.553zM171.426 1.401h31.744c8.58 0 14.901 2.278 19.237 6.493a23.074 23.074 0 015.385 7.906 23.035 23.035 0 011.712 9.407c0 13.509-9.356 23.054-23.87 23.054h-16.453v23.532h-17.755V1.401zm30.671 33.078c6.299 0 9.859-3.76 9.859-9.363 0-5.604-3.652-9.112-9.859-9.112h-12.916v18.43l12.916.045zM248.651 1.401h17.458v70.392h-17.458V1.401zM309.081 1.401h17.937l25.422 70.392h-18.257l-4.267-12.666H305.27l-4.062 12.712h-17.549L309.081 1.4zm16.864 45.174l-5.454-17.063c-1.164-3.644-2.761-9.955-2.761-9.955h-.183s-1.689 6.31-2.875 9.956l-5.409 17.016 16.682.046z"
      />
      </g>
      </g>
    </svg>
  </div>
}
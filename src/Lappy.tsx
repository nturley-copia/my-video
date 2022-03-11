import { Easing, interpolate, useCurrentFrame } from 'remotion';
import './lappy.css';

const full_msg = `
             ____ ___  ____ ___    _
    █████   / ___/ _ \\|  _ \\_ _|  / \\   
  ██   ██  | |  | | | | |_) | |  / _ \\  
  ██   ██  | |__| |_| |  __/| | / ___ \\ 
  █████     \\____\\___/|_|  |___/_/   \\_\


`

const flickerVals = [0.552, 0.48287, 0.59134, 0.79543, 0.75134, 0.1956, 0.90687, 0.122, 0.62254,
  0.56977, 0.9925, 0.55487, 0.16607, 0.12353, 0.2214, 0.67908, 0.97163, 0.1275, 0.37186, 0.24475, 0.37221]

export const Lappy: React.FC = () => {
  const frame = useCurrentFrame()
  const opacity = flickerVals[frame%flickerVals.length]
  let msg = full_msg.substr(0, frame*2)+'█'
  if (frame*2>full_msg.length && frame%40>20) {
    msg = full_msg
  }
  return <div className="lappy"><pre>{msg}</pre>
      <div className="flicker" style={{opacity:opacity}}></div>
      <div className="scanlines"></div></div>
}
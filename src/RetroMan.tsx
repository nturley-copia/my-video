import src from './telephone3.svg'
import './maiden_orange.css'

export const RetroMan: React.FC = () => {
  return <div style={{
    display:'flex',
    fontFamily:'MaidenOrange',
    fontSize:'64px',
    backgroundColor:'#ddd',
    width:'100%'
    }}>
    <img height="285" width="185" src={src}/>
<div style={{marginLeft:'20px', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center'}}>
Don't live in dystopia.<br/>Choose Copia!
<svg viewBox="0 0 158 158" width="80" height="80" style={{ marginTop: '40px' }}><defs>
      <rect id="green" width="118" height="118" x={40} y={0}>
      </rect>
      <rect id="black" width="118" height="118" x={0} y={40}>
      </rect>
    </defs>
      <mask id="blackMask">
        <rect width="158" height="158" x="0" y="40" fill="white"></rect>
        <use href="#green"></use>
      </mask>
      <mask id="greenMask">
        <rect width="158" height="158" x="40" y="0" fill="white"></rect>
        <use href="#black"></use>
      </mask>
      <g mask="url(#greenMask)" >
        <use href="#green" fill="#000" ></use>
      </g>
      <g mask="url(#blackMask)">
        <use href="#black" fill="#05a595" ></use>
      </g>
    </svg>
</div>

    </div>
}
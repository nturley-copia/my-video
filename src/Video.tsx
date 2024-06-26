import { Composition, Still } from 'remotion';
import { Comrade } from './Comrade';
import { GearPull } from './GearPull';
import { Lappy } from './Lappy';
import { Poof } from './Poof';
import { RetroMan } from './RetroMan';
import { SpinningLogo } from './SpinningLogo';
import { Standby } from './Standby';
import { StrokeAnimation } from './StrokeAnimation';

export const RemotionVideo: React.FC = () => {
  return (
    <>
      <Composition
        id="SpinningLogo"
        component={SpinningLogo}
        durationInFrames={480}
        fps={30}
        width={158}
        height={158}
      />
      <Composition
        id="StrokeAnimation"
        component={StrokeAnimation}
        durationInFrames={600}
        fps={30}
        width={800}
        height={500}
      />
      <Composition
        id="GearPull"
        component={GearPull}
        durationInFrames={720}
        fps={30}
        width={800}
        height={500}
      />
      <Still
      id="Standby"
      component={Standby}
      width={1024}
      height={768}
       />
       <Composition
        id="Comrade"
        component={Comrade}
        width={800}
        height={500}
        durationInFrames={120}
        fps={30}
       />
       <Still
       id="retroman"
       component={RetroMan}
       width={800}
       height={300}
       />
       <Composition
        id="Poof"
        component={Poof}
        durationInFrames={180}
        fps={30}
        width={500}
        height={158}
      />
      <Composition
        id="Lappy"
        component={Lappy}
        durationInFrames={800}
        fps={30}
        width={800}
        height={500}
      />
    </>
  );
};

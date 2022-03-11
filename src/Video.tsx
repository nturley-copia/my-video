import { Composition, Still } from 'remotion';
import { Comrade } from './Comrade';
import { GearPull } from './GearPull';
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
        durationInFrames={300}
        fps={30}
        width={500}
        height={158}
      />
      <Composition
        id="GearPull"
        component={GearPull}
        durationInFrames={360}
        fps={30}
        width={650}
        height={300}
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
        width={500}
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
    </>
  );
};

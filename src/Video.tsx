import { Composition } from 'remotion';
import { SpinningLogo } from './SpinningLogo';
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
		</>
	);
};
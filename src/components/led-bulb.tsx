import { styled } from '../stitches.config.js';

export interface LedLightProps {
  color: string;
}

const LedBulbBase = styled('div', {
  background: 'var(--light-color)',
  borderRadius: '50%',
  aspectRatio: '1 / 1',
});

export function LedBulb({ color }: LedLightProps): JSX.Element {
  return <LedBulbBase style={{ '--light-color': color }} />;
}

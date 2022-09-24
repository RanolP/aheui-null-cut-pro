import { styled } from '../stitches.config.js';
import { LedBulb } from './led-bulb.js';

export interface LedMatrixProps {
  size: number;
  matrix: string[][];
}

const Container = styled('div', {
  background: 'black',
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--size), minmax(0, 1fr))',
  gridTemplateRows: 'repeat(var(--size), minmax(0, 1fr))',
  padding: 'var(--gap)',
  gap: 'var(--gap)',
  justifyContent: 'center',
  gridAutoFlow: 'row',
  aspectRatio: '1 / 1',
  height: '100%',
  width: '100%',
  overflow: 'hidden',
});

export function LedMatrix({ size, matrix }: LedMatrixProps): JSX.Element {
  return (
    <Container style={{ '--size': size, '--gap': `${25 / size}%` }}>
      {matrix.map((row) => row.map((color) => <LedBulb color={color} />))}
    </Container>
  );
}

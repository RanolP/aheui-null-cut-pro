import { styled } from '../stitches.config.js';
import { LedBulb } from './led-bulb.js';

export interface LedMatrixProps {
  width: number;
  height: number;
  matrix: string[][];
}

const Container = styled('div', {
  background: 'black',
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--width), minmax(0, 1fr))',
  gridTemplateRows: 'repeat(var(--height), minmax(0, 1fr))',
  padding: '4%',
  columnGap: 'calc(15% / var(--height))',
  rowGap: 'calc(15% / var(--width))',
  justifyContent: 'center',
  gridAutoFlow: 'row',
  aspectRatio: 'var(--width) / var(--height)',
  maxHeight: '100%',
  maxWidth: '100%',
  overflow: 'hidden',
});

export function LedMatrix({
  width,
  height,
  matrix,
}: LedMatrixProps): JSX.Element {
  return (
    <Container style={{ '--width': width, '--height': height }}>
      {matrix.map((row) => row.map((color) => <LedBulb color={color} />))}
    </Container>
  );
}

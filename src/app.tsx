import { LedMatrixEdit } from './components/led-matrix-edit.jsx';
import { LedMatrix } from './components/led-matrix.jsx';
import { styled } from './stitches.config.js';
import { applyReset } from './styles/reset.js';
import { applyTypography } from './styles/typography.js';
import { Suspense } from 'preact/compat';

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: 'auto 1fr',
  gridGap: '4rem',
  height: '100vh',
});

function transform(src: string): string[] {
  return src.split(' ').map((x) => ({ '.': 'gray', '#': 'yellow' }[x] ?? x));
}

function led(src: TemplateStringsArray): string[][] {
  return src[0]
    .trim()
    .split('\n')
    .map((x) => transform(x.trim()));
}

export function App(): JSX.Element {
  applyReset();
  applyTypography();

  return (
    <Container>
      <h1>Hello, world!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LedMatrixEdit />
      </Suspense>
      <LedMatrix
        width={16}
        height={8}
        matrix={led`
          . # # # . . # . . # # # . . # .
          # . . . # . # . # # # # # . # .
          # . . . # . # . . # . # . . # .
          # . . . # . # # . # . # . . # .
          # . . . # . # . . . # . . . # .
          . # # # . . # . . . . . . . # .
          . . . . . . # . # # # # # . # .
          . . . . . . # . . . . . . . # .
        `}
      />
    </Container>
  );
}

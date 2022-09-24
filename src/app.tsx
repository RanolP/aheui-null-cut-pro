import { LedMatrix } from './components/led-matrix.jsx';
import { styled } from './stitches.config.js';
import { applyReset } from './styles/reset.js';
import { applyTypography } from './styles/typography.js';

const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'auto 1fr',
  gridGap: '4rem',
  height: '100vh',
});

export function App(): JSX.Element {
  applyReset();
  applyTypography();

  return (
    <Container>
      <h1>Hello, world!</h1>
      <h1></h1>
      <LedMatrix
        size={8}
        matrix={[
          [
            'gray',
            'yellow',
            'yellow',
            'yellow',
            'gray',
            'gray',
            'yellow',
            'gray',
          ],
          [
            'yellow',
            'gray',
            'gray',
            'gray',
            'yellow',
            'gray',
            'yellow',
            'gray',
          ],
          [
            'yellow',
            'gray',
            'gray',
            'gray',
            'yellow',
            'gray',
            'yellow',
            'gray',
          ],
          [
            'yellow',
            'gray',
            'gray',
            'gray',
            'yellow',
            'gray',
            'yellow',
            'yellow',
          ],
          [
            'yellow',
            'gray',
            'gray',
            'gray',
            'yellow',
            'gray',
            'yellow',
            'gray',
          ],
          [
            'gray',
            'yellow',
            'yellow',
            'yellow',
            'gray',
            'gray',
            'yellow',
            'gray',
          ],
          ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'yellow', 'gray'],
          ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'yellow', 'gray'],
        ]}
      />
      <LedMatrix
        size={8}
        matrix={[
          [
            'gray',
            'yellow',
            'yellow',
            'yellow',
            'gray',
            'gray',
            'yellow',
            'gray',
          ],
          [
            'yellow',
            'yellow',
            'yellow',
            'yellow',
            'yellow',
            'gray',
            'yellow',
            'gray',
          ],
          [
            'gray',
            'yellow',
            'gray',
            'yellow',
            'gray',
            'gray',
            'yellow',
            'gray',
          ],
          [
            'gray',
            'yellow',
            'gray',
            'yellow',
            'gray',
            'gray',
            'yellow',
            'gray',
          ],
          ['gray', 'gray', 'yellow', 'gray', 'gray', 'gray', 'yellow', 'gray'],
          ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'yellow', 'gray'],
          [
            'yellow',
            'yellow',
            'yellow',
            'yellow',
            'yellow',
            'gray',
            'yellow',
            'gray',
          ],
          ['gray', 'gray', 'gray', 'gray', 'gray', 'gray', 'yellow', 'gray'],
        ]}
      />
    </Container>
  );
}

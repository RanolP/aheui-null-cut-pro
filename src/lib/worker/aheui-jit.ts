import AheuiJIT from 'aheui-jit';

addEventListener('message', (event) => {
  const source: string = event.data;
  console.log(source);
  (async () => {
    await AheuiJIT.ready;
    let buffer = '';
    AheuiJIT.callbacks.printChar = (char) => {
      buffer += char;
    };
    await AheuiJIT.run(source);
    postMessage(buffer);
  })().catch((e) => console.error(e));
});

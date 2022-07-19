// from https://codepen.io/grok/pen/LvOQbW?editors=0010
export default (n: number) =>
  typeof n === 'number' && n === Number(n) && Number.isFinite(n);

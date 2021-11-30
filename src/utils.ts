// eslint-disable-next-line
export function debounce(func, wait) {
  let timer;
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}

export type HeaderLinkFn = (id: string) => void;

export interface HeaderLink {
  id: string;
  headerId: string;
  title: string;
  fn: HeaderLinkFn;
}

export class UidSingleton {
  counter: number;

  constructor() {
    this.counter = 0;
  }

  next(): number {
    this.counter += 1;
    return this.counter;
  }
}

export const uidSingleton = new UidSingleton();

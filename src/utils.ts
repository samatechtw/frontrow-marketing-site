// eslint-disable-next-line
export function debounce(func: any, wait: number): (...args: unknown[]) => void {
  let timeout: ReturnType<typeof setTimeout> | null;
  return function (...args: unknown[]) {
    // eslint-disable-next-line
    const context = this;
    const callNow = !timeout;
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      timeout = null;
    }, wait);
    if (callNow) {
      func.apply(context, args);
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

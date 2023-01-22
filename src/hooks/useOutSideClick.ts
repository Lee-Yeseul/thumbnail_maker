import { MutableRefObject, useEffect } from 'react';

export default function useOutSideClick(
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    const handleClick = (evt: Event) => {
      if (ref.current && !ref.current.contains(evt.target as HTMLDivElement)) {
        callback?.();
      }
    };
    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
}

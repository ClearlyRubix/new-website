import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

function ScrollToAnchor() {
  const location = useLocation();
  const hash = useRef('');

  useEffect(() => {
    if (location.hash) {
      hash.current = location.hash.slice(1)
    }

    if (hash.current && document.getElementById(hash.current)) {
      setTimeout(() => {
        document
          .getElementById(hash.current)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        hash.current = '';
      }, 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
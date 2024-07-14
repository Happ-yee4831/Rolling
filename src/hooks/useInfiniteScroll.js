import { useRef } from 'react';

function useInfiniteScroll(func, ...argv) {
  const target = useRef();

  const options = {
    threshold: 0.5,
  };

  const handleObserve = () => {
    func(...argv);
  };

  const observer = new IntersectionObserver(handleObserve, options);

  useEffect(() => {
    observer.observe(target.current);
  }, []);

  return ref;
}

export default useInfiniteScroll;

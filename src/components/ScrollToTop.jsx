import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button onClick={scrollToTop} className="absolute">
      <ArrowUp
        className={`${
          isVisible
            ? 'fixed bottom-5 right-5 h-8 w-8 rounded-full bg-primary-80 p-2 text-white shadow-md duration-300 ease-in-out hover:cursor-pointer hover:bg-primary-80/75 sm:h-10 sm:w-10'
            : 'hidden'
        }`}
      />
    </button>
  );
};

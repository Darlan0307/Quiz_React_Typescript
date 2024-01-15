import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import animationData from '../../animations/animate-2.json'; // Carregue o arquivo JSON da animação aqui

const AnimateJson = () => {
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: lottieContainer.current as HTMLDivElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => instance.destroy();
  }, []);

  return <div ref={lottieContainer} style={{ width: '100%', height: '100%' }} />;
};

export default AnimateJson;
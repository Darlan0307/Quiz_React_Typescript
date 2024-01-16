import './styles.scss'
import img from '../../../assets/quiz.svg'
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const StartQuiz = () => {

  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Estilo inicial
    gsap.fromTo(container.current, {
      opacity: 0,
      y:300
    },{ // Estilo final
      opacity:1,
      y:0,
      ease: "back.inOut",
      duration: 1
    });
  
  }, { scope: container });

  return (
    <main className='page-initial' ref={container}>
      <h2>Seja bem-vindo(a)</h2>
      <p>Clique no botão abaixo para começar</p>
      <Link className='link' to="/category">Iniciar</Link>
      <img src={img} alt="imagem inicial do quiz" />
    </main>
  )
}

export default StartQuiz
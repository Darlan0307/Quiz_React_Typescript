import { Link } from 'react-router-dom'
import AnimateJson from '../LottieAnimate/AnimateJson'
import './styles.scss'
import { useQuiz } from '../../context/QuizContext'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Header = () => {

  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Estilo inicial
    gsap.fromTo(container.current, {
      opacity: 0,
      y:-300
    },{ // Estilo final
      opacity:1,
      y:0,
      ease: "back.inOut",
      duration: 1
    });
  
  }, { scope: container });

  const {setQtdHits,setQtdQuestions,setSkill} = useQuiz()

  const handleClick = () => {
    setQtdHits(0)
    setQtdQuestions(0)
    setSkill('')
  }

  return (
    
      <header className="header" ref={container}>
            <h1>Quiz de Programação</h1>
            <Link 
            to="/"
            onClick={handleClick}
            >
              <div className='animate'>
                <AnimateJson/>
              </div>
            </Link>
      </header>
   
  )
}

export default Header
import { Link } from 'react-router-dom'
import img from '../../../assets/welldone.svg'
import { useQuiz } from '../../../context/QuizContext'
import './styles.scss'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
const FinallyQuiz = () => {

  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Estilo inicial
    gsap.fromTo(container.current, {
      opacity: 0,
      y:-400,
    },{ // Estilo final
      opacity:1,
      y:0,
      ease: "back.inOut",
      duration: 1
    });
  
  }, { scope: container });

  const {qtdHits,qtdQuestions,setQtdHits,setQtdQuestions,setSkill,skill} = useQuiz()

  return (
    <main className='page-final' ref={container}>
      <h2>Fim de jogo!</h2>
      <p><span>Pontuação:</span>{qtdHits}</p>
      <p>
        <span>Você acertou</span>
        {qtdHits}
        <span>de</span> <br />
        {qtdQuestions}
        <span>perguntas sobre</span> <br />
        <strong>{skill}</strong>.
      </p>
      <img src={img} alt="Imagem de final do jogo" />
      <Link 
      className='link' 
      to="/"
      onClick={()=>{
        setQtdHits(0)
        setQtdQuestions(0)
        setSkill('')
      }}
      >Reiniciar</Link>
    </main>
  )
}

export default FinallyQuiz
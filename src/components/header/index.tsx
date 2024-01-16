import { Link } from 'react-router-dom'
import AnimateJson from '../LottieAnimate/AnimateJson'
import './styles.scss'
import { useQuiz } from '../../context/QuizContext'

const Header = () => {

  const {setQtdHits,setQtdQuestions,setSkill} = useQuiz()

  const handleClick = () => {
    setQtdHits(0)
    setQtdQuestions(0)
    setSkill('')
  }

  return (
    <header className="header">
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
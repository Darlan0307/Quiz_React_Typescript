import { Link } from "react-router-dom"
import img from '../../../assets/category.svg'
import './styles.scss'
import {FaReact,FaNodeJs,FaHtml5,FaCss3} from 'react-icons/fa'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Category = () => {

  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Estilo inicial
    gsap.fromTo(container.current, {
      opacity: 0,
      y:300,
    },{ // Estilo final
      opacity:1,
      y:0,
      ease: "back.inOut",
      duration: 1
    });
  
  }, { scope: container });


  return (
    <main className="page-category" ref={container}>
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma dessas tecnologias</p>
      <div className="categories">
      <Link className="link" to="/category/react"><span>React</span> <FaReact color="#50d6ff"/> </Link>
      <Link className="link" to="/category/nodejs"><span>NodeJS</span> <FaNodeJs color="#86cf2f"/> </Link>
      <Link className="link" to="/category/html"><span>HTML</span> <FaHtml5 color="#e96228"/> </Link>
      <Link className="link" to="/category/css"><span>CSS</span> <FaCss3 color="#3d9dd7" /> </Link>
      </div>
      <img src={img} alt="imagem referente as categorias" />
    </main>
  )
}

export default Category
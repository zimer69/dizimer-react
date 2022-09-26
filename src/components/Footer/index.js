import './Footer.css'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (<footer className="footer">
            <section>
              <ul>
                <li>
                  <a href="https://github.com/zimer69" target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/dimitrihz" target="_blank" rel="noreferrer">
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/dimitrihz" target="_blank" rel="noreferrer">
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/dimitri-zimermann/" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <p>
                Created by Dimitri Zimermann
              </p>
            </section>
          </footer>

  )
}

export default Footer

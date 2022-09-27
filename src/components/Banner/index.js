import './Banner.css'
import { Link } from 'react-scroll'

const Banner = () => {
  return (
    <header className="banner">
      <div className="text">
        <h1>DIZIMER Tech Business Solutions</h1>
        <p>The future of your company in good hands</p>
        <Link to="form" spy={true} smooth={true} offset={-30} duration={500} className="btn-flat">Apply</Link>
      </div>
    </header>
  )
}

export default Banner

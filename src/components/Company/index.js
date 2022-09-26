import './Company.css'

const Company = ({ name, companyName, image, mainColor }) => {
  return (
    <div className='company'>
      <div className='header' style={{ backgroundColor: mainColor }}>
        <img src={image} alt={companyName}/>
      </div>
      <div className='footer'>
        <h4>{companyName}</h4>
        <h6>Answerable:</h6>
        <h5>{name}</h5>
      </div>
    </div>
  )
}

export default Company

import Company from '../Company'
import './Field.css'

const Field = (props) => {
  return (
    <section className='field' style={{ backgroundColor: props.lightColor }}>
      <h3 style={{ borderColor: props.mainColor }}>{props.name}</h3>
      <div className='companies'>
        {props.companies.map(company => <Company key={company.name} name={company.name} companyName={company.companyName} image={company.image} />)}
      </div>
    </section>
  )
}

export default Field

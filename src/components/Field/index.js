import Company from '../Company'
import './Field.css'

const Field = (props) => {
  return (
    (props.companies.length > 0) && <section className='field' style={{ backgroundColor: props.lightColor }}>
      <h3 style={{ borderColor: props.mainColor }}>{props.name}</h3>
      <div className='companies'>
        {props.companies.map(company => <Company mainColor={props.mainColor} key={company.companyName} name={company.name} companyName={company.companyName} image={company.image} />)}
      </div>
    </section>
  )
}

export default Field

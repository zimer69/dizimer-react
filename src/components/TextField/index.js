import './TextField.css'

const TextField = (props) => {

  const whenTyped = (event) => {
    props.whenChanged(event.target.value)
  }

  return (
    <div className="text-field">
        <label>{props.label}</label>
        <input value={props.result} onChange={whenTyped} required={props.presence} placeholder= {props.placeholder}/>
    </div>
  )
}

export default TextField

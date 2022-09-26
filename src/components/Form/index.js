import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

  const [name, setName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')
  const [field, setField] = useState('')

  const afterSave = (event) => {
    event.preventDefault()
    props.whenSubmited({
      name,
      companyName,
      email,
      image,
      field
    })
    setName('')
    setCompanyName('')
    setEmail('')
    setImage('')
    setField('')
  }

  return (
    <section className="form">
      <form onSubmit={afterSave}>
        <h2>Fill in with your company details to receive our benefits</h2>
        <TextField
          presence={true}
          label="Name"
          placeholder="What is your name?"
          result={name}
          whenChanged={result => setName(result)}
        />
        <TextField
          presence={true}
          label="Company"
          placeholder="What is your company?"
          result={companyName}
          whenChanged={result => setCompanyName(result)}
        />
        <TextField
          presence={true}
          label="E-mail"
          placeholder="Contact e-mail"
          result={email}
          whenChanged={result => setEmail(result)}
        />
        <TextField
          presence={true}
          label="Image"
          placeholder="Insert the company's image url"
          result={image}
          whenChanged={result => setImage(result)}
        />
        <DropdownList
          presence={true}
          label="Field"
          itens={props.fields}
          result={field}
          whenChanged={result => setField(result)}
        />
        <Button>
          Add Company
        </Button>
      </form>
    </section>
  )
}

export default Form

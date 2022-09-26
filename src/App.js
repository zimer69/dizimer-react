import { useState } from 'react';
import Banner from './components/Banner';
import Field from './components/Field';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {

  const fields = [
    {
      name:'Architecture and engineering',
      lightColor: '#d7d4fa',
      mainColor: '#766CEF'
    },
    {
      name:'Arts, culture and entertainment',
      lightColor: '#d8fbec',
      mainColor: '#93F3CB'
    },
    {
      name:'Communications',
      lightColor: '#fad1e3',
      mainColor: '#EF6CA3'
    },
    {
      name:'Education',
      lightColor: '#ffd6bc',
      mainColor: '#FF6400'
    },
    {
      name:'Science and technology',
      lightColor: '#e1c8c3',
      mainColor: '#BC857A'
    },
    {
      name:'Health and medicine',
      lightColor: '#F5F9C5',
      mainColor: '#EFCB04'
    },
  ]

  const [companies, setCompanies] = useState([])

  const whenNewCompany = (company) => {
    setCompanies([...companies, company])
  }


  return (
    <div className="App">
      <Banner />
      <Form fields={fields.map(field => field.name)} whenSubmited={company => whenNewCompany(company)}/>

      {fields.map(field => <Field
                              key={field.name}
                              name={field.name}
                              mainColor={field.mainColor}
                              lightColor={field.lightColor}
                              companies={companies.filter(company => company.field === field.name)}
                            />)}
      <Footer />
    </div>
  );
}

export default App;

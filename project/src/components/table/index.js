import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import './style.scss'
import { GetTableCall, AddRowCall } from '../../redux/actions/table';
import EnhancedTable from './table';
import About from './about'



const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const clear = () => setValue('')

  return {
    bind: {onChange, value},
    value,
    clear
  }
}

const formatPhoneNumber = (phoneNumberString) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ')' + match[2] + '-' + match[3]
  }
  return null
}

const Table = ({ storeRows, isLoading, GetTableCall, AddRowCall }) => {
  const [rows, setRows] = useState([])
  const [showMessage, setShowMessage] = useState(false);
  const [user, setUser] = useState({})
  const [showForm, setShowForm] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const dispatch = useDispatch()

  const id = useInput('')
  const firstName = useInput('')
  const lastName = useInput('')
  const email = useInput('')
  const phone = useInput('')
  const search = useInput('')

  const formParams = [
    {col: "col-2", label: "Id", type: "text", placeholder: "Id", bind: id.bind},
    {col: "col-2", label: "First name", type: "text", placeholder: "Artem", bind: firstName.bind},
    {col: "col-2", label: "Last name", type: "text", placeholder: "Romanov", bind: lastName.bind},
    {col: "col-3", label: "Email", type: "email", placeholder: "text@text.ru", bind: email.bind},
    {col: "col-2", label: "Phone", type: "text", placeholder: "9773881686", bind: phone.bind}
  ]


  useEffect(() => {
    setRows(storeRows)
  }, [storeRows])

  useEffect((state) => {
    if(id.value !== '' && firstName.value !== '' && lastName.value !== '' &&
      email.value !== '' && phone.value.toString().length === 10) {
      setDisableButton(false)
    } else {
      setDisableButton(true)
    }
  }, [id.value, firstName.value, lastName.value, email.value, phone.value])


  const handleSubmit = (e) => {
    if (rows.findIndex(x => x.id.toString() === id.value.toString()) === -1) {
      setShowMessage(false)
      AddRowCall({id: id.value, firstName: firstName.value, lastName: lastName.value,
        email: email.value, phone: formatPhoneNumber(phone.value)})
      id.clear();
      firstName.clear();
      lastName.clear();
      email.clear();
      phone.clear();
      search.clear();
    } else {
      setShowMessage(true)
    }
    e.preventDefault()
  }

  const handleClickRow = ({ target }) => {
    const [id, email] = target.dataset["key"].split(' ')
    const row = rows[rows.findIndex(el => el.id.toString() === id.toString() && el.email === email)]
    setUser(row)
  }

  const handleClickSearch = () => {
    if (search.value !== '') {
      const result = rows.filter(val => `${val.id} ${val.firstName} ${val.lastName}
        ${val.email} ${val.phone}`.indexOf(search.value) !== -1)
      setRows(result)
    } else {
      setRows(storeRows)
    }
  }

  const handleClick = (e) => {
    setShowForm(prev => !prev)
    e.preventDefault()
  }

  return (
    <div className="table">

      <div className="form-row table__header pt-3">
        <div className="form-group table__showForm">
          <input type="text" className="form-control" value={search.value} {...search.bind}/>
          <button className="btn btn-primary" type="submit" onClick={handleClickSearch}>
            search
          </button>
        </div>

        <div className="form-group">
          <button className="btn btn-primary mb-3" type="submit" onClick={handleClick}>
            {showForm ?
              "Hide form"
              :
              "Add new"
            }
          </button>
        </div>
      </div>

      <form
        className="table__needs-validation needs-validation"
        onSubmit={handleSubmit}
        style={{display: showForm ? "flex" : "none"}}
        >
        <div className="form-row">
          {formParams.map((el, i) =>
              <div
                className={`${el.col} mb-3`}
                key={i + i.toString()}
                >
                <label>{el.label}</label>
                <input
                  type={el.type}
                  className="form-control"
                  id={"validationCustom0" + (i + 1)}
                  placeholder={el.placeholder}
                  value={el.bind.value} {...el.bind}
                  required
                  />
              </div>
            )
          }
        </div>
        {showMessage &&
          <div className="invalid-feedback" style={{display: "block"}}>
            user with this Id is already exist, please type another Id
          </div>
        }
        <button className="btn btn-primary" type="submit" disabled={disableButton}>
          Add into table
        </button>
      </form>

      <EnhancedTable classN="table" rows={rows} handleClick={handleClickRow}/>

      {!isEmpty(user) &&
        <About user={user}/>
      }

    </div>
  )
}



export default connect(state => ({
}), { GetTableCall, AddRowCall })(Table);

import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import supabase from "../config/supabaseClient"

const AddProduct = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('Item')
  const [description, setDescrip] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [errorMsg, setErrorMsg] = useState(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!name || !description || !quantity) {
      setErrorMsg("Please fill out all fields.")
      return
    }

    const { data, error } = await supabase.from("Items").insert([{ name, description, quantity }]).select()

    if (error) {
      console.log(error)
      setErrorMsg(error)
    }

    if (data) {
      console.log(data)
      setErrorMsg(null)
      navigate('/')
    }
  }
  
  return (
    <div className="page-addproduct">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescrip(e.target.value)}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button>Add New Item</button>

        {errorMsg && <p className="error">{errorMsg}</p>}

      </form>
    </div>
  )
}

export default AddProduct
import { useState } from "react"

const AddProduct = () => {
  const [name, setName] = useState('Item')
  const [descrip, setDescrip] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [errorMsg, setErrorMsg] = useState(null)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!name || !descrip || !quantity) {
      setErrorMsg("Please fill out all fields.")
      return
    }

    console.log(name, descrip, quantity)
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

        <label htmlFor="descrip">Description:</label>
        <input
          type="text"
          id="descrip"
          value={descrip}
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
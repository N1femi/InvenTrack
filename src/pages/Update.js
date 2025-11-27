import { useParams, useNavigate } from 'react-router-dom' 
import { useEffect, useState } from 'react'
import supabase from "../config/supabaseClient"

const Update = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [description, setDescrip] = useState('')
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from('Items').select().eq('id', id).single()

      if (error) {
        navigate('/', { replace: true })
      }

      if (data) {
        setName(data.name)
        setDescrip(data.description)
        setQuantity(data.quantity)
      }
    }

    fetchItems()
  }, {id, navigate})
  
  return (
    <div className="page-update">
      <form>
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

        <button>Update Item</button>

        {/*errorMsg && <p className="error">{errorMsg}</p>*/}

      </form>
    </div>
  )
}

export default Update
import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"

/* Components */
import ItemCard from "../components/ItemCard"

const Home = () => {
  const [Error, setError] = useState(null)
  const [items, setItems] = useState(null)

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from("Items").select()

      if (error) {
        setError("Could not fetch the items")
        setItems(null)
        console.log(error)
      }

      if (data) {
        setItems(data)
        setError(null)
      }
    }

    fetchItems()
  }, [])

  return (
    <div className="page home">
      {Error && <p>{Error}</p>}
      {items && (
        <div className="items">
          {/* Filter Button */}
          <div className="item-grid">
            {items.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home

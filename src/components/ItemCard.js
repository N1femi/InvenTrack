const ItemCard = ({ item }) => {
    return (
        <div className="item-card">
            <h3>{item.name}</h3>
            <h4>Quantity: {item.quantity}</h4>
            <p>{item.description}</p>

            <div className="item-quant">{item.quantity > 0 ? "In Stock" : "Out of Stock"}</div>
        </div>
    )
}

export default ItemCard


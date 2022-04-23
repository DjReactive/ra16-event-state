const handleClick = name => {
  console.log(name + ' Added to cart')
}

export function ListView({items}) {
  return (
    <div className="list">
      {items.map(o => <ShopItem key={o} item={o} />)}
    </div>
  )
}

function ShopItem({item}) {
  return (
    <div className="list__item">
      <img src={item.img} alt={item.name} />
      <span className="item_name">{item.name}</span>
      <span className="item_color">{item.color}</span>
      <span className="item_price">${item.price}</span>
      <button className="item_add" onClick={() => handleClick(item.name)}>Add to card</button>
    </div>
  );
}

export function CardsView({items}) {
  return (
    <div className="list cards">
      {items.map(o => <ShopCard key={o} item={o} />)}
    </div>
  )
}

function ShopCard({item}) {
  return (
    <div className="card__item">
      <span className="card_name">{item.name}</span>
      <span className="card_color">{item.color}</span>
      <img src={item.img} alt={item.name} />
      <div className="card_price">
        <span className="item_price">${item.price}</span>
        <button className="item_add" onClick={() => handleClick(item.name)}>Add to card</button>
      </div>
    </div>
  );
}

import React, {useState} from "react";

function ListingCard({ img, description, location, id, onDelete }) {

  const [liked, setLiked] = useState(false)

  function handleClick() {
    setLiked(!liked)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={img} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button 
            className="emoji-button favorite active"
            onClick={handleClick}
          >★</button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={handleClick}
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
          className="emoji-button delete"
          onClick={() => onDelete(id)}
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

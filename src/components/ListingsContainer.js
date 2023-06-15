import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({ searchInput }) {

  const [listingData, setListingData] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((listings) => {
      setListingData(listings)
    })
  }, [])

  function onDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    const filteredList = listingData.filter((listing) => listing.id !== id)
    setListingData(filteredList)
  }

  const searchFilter = listingData.filter((listing) => {
    return listing.description.toLowerCase().includes(searchInput.toLowerCase())
  })

  return (
    <main>
      <ul className="cards">
        {searchFilter.map((listing) => (
          <ListingCard 
            key={listing.description}
            img={listing.image} 
            description={listing.description}
            location={listing.location}
            id={listing.id}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;

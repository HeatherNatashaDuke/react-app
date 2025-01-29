import { useState } from "react";

interface Props {
  cities: string[];
  heading: string;

  onSelectCity: (city: string) => void;
}

function ListGroup({ cities, heading, onSelectCity }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  const getMessage = () => {
    return cities.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectCity(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

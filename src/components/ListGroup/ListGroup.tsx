import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";
// import "./ListGroup.css";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px, 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  cities: string[];
  heading: string;

  onSelectCity: (city: string) => void;
}

function ListGroup({ cities, heading, onSelectCity }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Event Handler
  const getMessage = () => {
    return cities.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {cities.length === 0 && <p>No item found</p>}
      {/* <ul className={[styles.listGroup, styles.container].join(" ")}> */}
      <List>
        {cities.map((city, index) => (
          <ListItem
            // <li
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            active={index === selectedIndex}
            key={city}
            onClick={() => {
              setSelectedIndex(index);
              onSelectCity(city);
            }}
          >
            {city}
            {/* </li> */}
          </ListItem>
        ))}
      </List>
      {/* </ul> */}
    </>
  );
}

export default ListGroup;

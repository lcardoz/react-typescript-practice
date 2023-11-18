import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components"; // importing styled object to create styled components

// defining all styles for ul, return value of this is a react component with all these styles applied to it, store in component called List:
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

//add <> and pass interface that represents the shape of Props, ListItemProps:
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${ props => props.active ? 'blue' : 'none'}
`;

// { items: array of strings, heading: string } :
interface Props {
  items: string[];
  heading: string;
  // function: takes parameter called item of type string, returns void (doesnt return a value):
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;

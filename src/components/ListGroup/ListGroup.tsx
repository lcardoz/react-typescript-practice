import { useState } from "react";
import styles from './ListGroup.module.css'; //importing styles a POJO that has all the classes and properties defined in the css module file

// { items: array of strings, heading: string } :
interface Props {
  items: string[];
  heading: string;
  // function: takes parameter called item of type string, returns void (doesnt return a value):
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      {/* multiple styles in array that are joined: */}
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

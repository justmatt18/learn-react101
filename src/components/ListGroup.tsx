import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelected] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {/* {items.length === 0 ? <p>No item found</p> : null}  */}
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group py-5">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item list-group-item-action active"
                                : "list-group-item list-group-item-action"
                        }
                        key={item}
                        onClick={() => {
                            setSelected(index);
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

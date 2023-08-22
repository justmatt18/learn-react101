import { useState } from "react";

function ListGroup() {
    let items = ["Davao", "Samal", "Panabo", "Sta. Cruz", "Digos"];
    const [selectedIndex, setSelected] = useState(-1);

    return (
        <>
            <h1>Hello World</h1>
            {/* {items.length === 0 ? <p>No item found</p> : null}  */}
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item list-group-item-action active"
                                : "list-group-item list-group-item-action"
                        }
                        key={item}
                        onClick={() => setSelected(index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;

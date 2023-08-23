import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
    let items = ["Davao", "Samal", "Panabo", "Sta. Cruz", "Digos"];
    const btnColors = [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
    ];
    const [alertVisible, setAlertVisible] = useState(0);
    const [colorIndex, setColorIndex] = useState(0);

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    const changeBtnColor = () => {
        colorIndex === btnColors.length - 1
            ? setColorIndex(0)
            : setColorIndex(colorIndex + 1);
    };

    return (
        <div>
            <ListGroup
                items={items}
                heading="Cities"
                onSelectItem={handleSelectItem}
            />
            {alertVisible === 1 && (
                <Alert onClose={() => setAlertVisible(0)}>
                    <strong>Holy guacamole!</strong> You should check in on some
                    of those fields below.
                </Alert>
            )}

            <Button
                color={btnColors[colorIndex]}
                onClick={() => {
                    setAlertVisible(1);
                    changeBtnColor();
                }}
            >
                {btnColors[colorIndex]}
            </Button>
        </div>
    );
}

export default App;

import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);
    const style = {
        margin: "auto",
        width: 120,
        height: 60,
        display: "blocked",
        fontWeight: "bold",
        borderRadius: 9999,
        cursor: "pointer",
        border: "none",
        background: isSelected ? "pink" : ""
    };

    return (
        <>
            <button style={style} onClick={clickHandler}>ボタン</button>
            <div style={{ textAlign: "center" }}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;

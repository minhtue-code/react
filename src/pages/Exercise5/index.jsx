import { useState, useEffect } from "react";

function Exercise5() {
    const [title, setTitle] = useState("Trang chủ");

    useEffect(() => {
        document.title = title;
    }, [title]);

    // useDocumentTitle(title);

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={() => setTitle("Giới thiệu")}>Giới thiệu</button>
            <button onClick={() => setTitle("Liên hệ")}>Liên hệ</button>
        </div>
    );
}

export default Exercise5;

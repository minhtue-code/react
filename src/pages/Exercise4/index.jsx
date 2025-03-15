import { useState } from "react";

function Exercise4() {
    const [clipboard, setClipboard] = useState("");

    const readClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setClipboard(text);
        } catch (error) {
            console.error("Không thể đọc clipboard", error);
        }
    };

    return (
        <div>
            <p>
                Hãy copy một chuỗi gì đó, hoặc copy: 666888. Sau đó click button
                dưới đây:
            </p>
            <button onClick={readClipboard}>Dán từ Clipboard</button>
            <p>Nội dung clipboard: {clipboard}</p>
        </div>
    );
}

export default Exercise4;

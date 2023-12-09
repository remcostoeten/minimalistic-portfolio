import { useState } from "react";

export function useUsername() {
    const [username, setUsername] = useState('');

    return [username, setUsername];
}
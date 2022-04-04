import { useEffect, useState } from "react"

const useSharee = () => {
    const [sharees, setSharees] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setSharees(data));
    },[]);
    return [sharees, setSharees];
}

export default useSharee;
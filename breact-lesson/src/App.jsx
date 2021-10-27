import axios from "axios";
import { useEffect, useState } from "react";
import ZooList from "./components/ZooList";

function App () {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/animals')
        .then(res => {
            console.log(res.data)
            setAnimals(res.data);
        })
    }, [])
    
    return (
        <div className="zoo">
            <ZooList animals={animals}></ZooList>
            <div className="nav">
                <button className="rp-button">Option 1</button>
                <button className="rp-button">Option 1</button>
                <button className="rp-button">Option 1</button>
                {/* <div className="nav-footer">Apacia</div> */}
            </div>
        </div>
    )

}

export default App;
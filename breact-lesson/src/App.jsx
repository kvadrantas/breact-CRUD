import axios from "axios";
import { useEffect, useState } from "react";
import ZooCreate from "./components/ZooCreate";
import ZooList from "./components/ZooList";
import ZooModal from "./components/ZooModal";

function App () {

    const [animals, setAnimals] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [showModal, setShowModal] = useState(false);
    const [modalAnimal, setModalAnimal] = useState({
        name: '',
        type: '',
        weight: '',
        born: ''
    })

    // ALL RECORDS
    useEffect(() => {
        axios.get('http://localhost:3003/animals')
        .then(res => {
            // console.log(res.data)
            setAnimals(res.data);
        })
    }, [lastUpdate])

    // NEW RECORD
    const create = animal => {
        axios.post('http://localhost:3003/animals', animal)
        .then(res => {
            // console.log(res.data)
            setLastUpdate(Date.now());
        })
    }

    // EDIT RECORD 
    const edit = (animal, id) => {
        setShowModal(false);
        axios.put('http://localhost:3003/animals/' + id, animal)
        .then(res => {
            // console.log(res.data);
            setLastUpdate(Date.now());
        })
    }

    // REMOVE RECORD 
    const remove = (id) => {
        setShowModal(false);
        axios.delete('http://localhost:3003/animals/' + id)
        .then(res => {
            // console.log(res.data);
            setLastUpdate(Date.now());
        })
    }

    
    
    return (
        <>
            <div className="zoo">
                <ZooModal edit={edit} remove={remove} modalAnimal={modalAnimal} showModal={showModal} setShowModal={setShowModal}></ZooModal>
                <ZooList animals={animals} setShowModal={setShowModal} setModalAnimal={setModalAnimal} remove={remove}></ZooList>
                <div className="nav">
                    <ZooCreate create={create}></ZooCreate>
                    <button className="rp-button">Option 1</button>
                    <button className="rp-button">Option 1</button>
                    <button className="rp-button">Option 1</button>
                    {/* <div className="nav-footer">Apacia</div> */}
                </div>
            </div>
        </>
        
    )

}

export default App; 
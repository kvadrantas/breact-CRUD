import axios from "axios";
import { useEffect, useState } from "react";
import ZooCreate from "./components/ZooCreate";
import ZooList from "./components/ZooList";
import ZooModal from "./components/ZooModal";
import ZooNav from "./components/ZooNav";

function App () {

    const [animals, setAnimals] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now());
    const [showModal, setShowModal] = useState(false);
    const [modalAnimal, setModalAnimal] = useState({
        name: '',
        type: '',
        weight: '',
        born: ''
    });

    // ----------------- FILTERING -----------------
    const [types, setTypes] = useState([]);  // filters dropbox options
    const [filterBy, setFilterBy] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:3003/animal-types')
            .then(res => {
                setTypes(res.data);
                // console.log(res.data);
            })
    }, [lastUpdate])

    useEffect(() => {
        if (filterBy) {
            axios.get('http://localhost:3003/animal-filter/'+filterBy)
            .then(res => {
                setAnimals(res.data);
                // console.log(res.data);
            })
        }
    }, [filterBy])

    const reset = () => {
        setLastUpdate(Date.now());
    }

    // ----------------- SEARCH -----------------
    const [searchBy, setSearchBy] = useState('');

    useEffect(() => {
        if (searchBy) {
        axios.get('http://localhost:3003/animal-search/?s='+searchBy)
            .then(res => {
                setAnimals(res.data);
                console.log(res.data);
            })
        }
    }, [searchBy])
    // ------------------------------------------


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
                <div className="nav">
                    <ZooNav types={types} search={setSearchBy} filter={setFilterBy} reset={reset}></ZooNav>
                    <ZooCreate create={create}></ZooCreate>
                    {/* <button className="rp-button">Option 1</button> */}
                    {/* <button className="rp-button">Option 1</button>
                    <button className="rp-button">Option 1</button> */}
                    {/* <div className="nav-footer">Apacia</div> */}
                </div>
                <ZooList animals={animals} setShowModal={setShowModal} setModalAnimal={setModalAnimal} remove={remove}></ZooList>
            </div>
        </>
        
    )

}

export default App; 
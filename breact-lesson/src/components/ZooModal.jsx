import { useEffect, useState } from "react";
import moment from "moment-timezone";


function ZooModal({edit, remove, modalAnimal, showModal, setShowModal}) {

    const [inputs, setInputs] = useState({
        name: '',
        type: '',
        weight: '',
        born: ''
    });

    useEffect(() => {
        setInputs({
            name: modalAnimal.name,
            type: modalAnimal.type,
            weight: modalAnimal.weight,
            born: modalAnimal.born
        })
    }, [modalAnimal]);

    const handleEdit = () => {
        edit({
            name: inputs.name,
            type: inputs.type,
            weight: inputs.weight,
            born: inputs.born
        }, modalAnimal.id)
    };

    const formControl = (e, what) => {
        const inputsCopy = {...inputs};
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }


    return (
        <div className="zoo-modal" style={{
            display: showModal ? 'block' : 'none',
            top: window.scrollY + 100 + 'px'
        }}>
            <div className="zoo-modal-form">
                <h2>Edit animal</h2>
                <label>Name</label><input type="text" value={inputs.name} onChange={(e) => formControl(e, 'name')} />
                <label>Type</label><input type="text" value={inputs.type} onChange={(e) => formControl(e, 'type')} />
                <label>Weight</label><input type="number" value={inputs.weight} onChange={(e) => formControl(e, 'weight')} />
                <label>Born</label><input type="date" value={moment.tz(inputs.born, "Europe/Vilnius").format('YYYY-MM-DD')} onChange={(e) => formControl(e, 'born')} />
            </div>
            <button className="form-button" onClick={handleEdit}>Save</button>
            <button className="form-button" onClick={() => setShowModal(false)}>Cancel</button>
            <button className="form-button" onClick={() => remove(modalAnimal.id)}>Delete</button>
        </div>
    )

}

export default ZooModal;
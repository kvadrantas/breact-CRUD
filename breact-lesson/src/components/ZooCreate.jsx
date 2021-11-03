import { useState } from "react";

function ZooCreate({create}) {

    const [inputs, setInputs] = useState({
        name: '',
        type: '',
        weight: '',
        born: ''
    });

    const formControl = (e, what) => {
        const inputsCopy = {...inputs};
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }

    const handleCreate = () => {
        create(inputs)
        setInputs({
            name: '',
            type: '',
            weight: '',
            born: ''
        });
    }

    return (
        <div className="zoo-form">
            <label htmlFor="">Name</label>
            <input type="text" value={inputs.name} onChange={(e) => formControl(e, 'name')} />
            <label htmlFor="">Type</label>
            <input type="text" value={inputs.type} onChange={(e) => formControl(e, 'type')} />
            <label htmlFor="">Weight</label>
            <input type="number" value={inputs.weight} onChange={(e) => formControl(e, 'weight')} />
            <label htmlFor="">Born date</label>
            <input type="date" value={inputs.born} onChange={(e) => formControl(e, 'born')} />
            <button className="form-button" onClick={handleCreate}>Add</button>
        </div>
    )

}

export default ZooCreate;
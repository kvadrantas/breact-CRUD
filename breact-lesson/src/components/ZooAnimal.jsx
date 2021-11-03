import moment from "moment-timezone";

function ZooAnimal({animal, setShowModal, setModalAnimal, remove}) {

    const showEdit = () => {
        setShowModal(true);
        setModalAnimal(animal);
    }

    return (
        <div className="zoo-list-animal">
            <i className="fas fa-pencil-alt edit" onClick={showEdit}></i>
            <i className="far fa-trash-alt delete" onClick={() => remove(animal.id)}></i>
            {/* <button className="form-button" onClick={() => remove(modalAnimal.id)}>Delete</button> */}
            <div className="zoo-list-animal-name">{animal.name}</div>
            <div className="zoo-list-animal-type">{animal.type}</div>
            <div className="zoo-list-animal-stats">
                {/* <span><span>Born date:</span>  { animal.born.slice(0, 10) }  </span> */}
                <span><span>Born date:</span>  {moment.tz(animal.born, "Europe/Vilnius").format('YYYY-MM-DD')}  </span>
                <span><span>Weight:</span>  {animal.weight} <span>kg</span></span>
                <button className="form-button" onClick={showEdit}>Edit</button>
            </div>
        </div>
    )
}

export default ZooAnimal; 
import ZooAnimal from "./ZooAnimal";

function ZooList({animals, setShowModal, setModalAnimal, remove}) {

    return (
        <div className="zoo-list">
            {animals.map(animal => <ZooAnimal key={animal.id} animal={animal} setShowModal={setShowModal} setModalAnimal={setModalAnimal} remove={remove}></ZooAnimal>)}
        </div>
    )
}

export default ZooList; 
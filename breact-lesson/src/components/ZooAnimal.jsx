
function ZooAnimal({animal}) {

    return (
        <div className="zoo-list-animal">
            <i class="far fa-trash-alt"></i>
            <div className="zoo-list-animal-name">{animal.name}</div>
            <div className="zoo-list-animal-type">{animal.type}</div>
            <div className="zoo-list-animal-stats">
                <label htmlFor="">Label</label>
                <input type="text" />
                <label htmlFor="">Label</label>
                <input type="text" />
                <span><span>Born date:</span>  { animal.born.slice(0, 10) }  </span>
                <span><span>Weight:</span>  {animal.weight} <span>kg</span></span>
                <button className="form-button">Save</button>
            </div>
        </div>
    )
}

export default ZooAnimal;
function Animals({animal, id, weight, feadingDate, removeAnimal, addWeight, addFeadingDate}) {
    const wColor = weight > 100 ? 'red' : null;
    if (weight > 200) {
        setTimeout(() => {
            removeAnimal(parseInt(id));
        }, 100);
        return null;
    }

    switch (animal) {
        case 'cow': return(
            <div className="cow">
                <span>Cow id: {id}</span>
                <span style={{color: wColor}}>Weight: {weight}</span>
                <span>Last feaded on: {feadingDate}</span>
                <span><label>Weight: </label>  
                    <input id={'weight' + id}></input>
                    <button onClick={() => addWeight(id, parseInt(document.getElementById('weight' + id).value))}>Set</button>
                </span>
                <span><label>Feading date:</label> 
                    <input id={'date' + id} type="date"/>
                    <button onClick={() => addFeadingDate(id, document.getElementById('date' + id).value)}>Set</button>
                </span>
                <span>
                    <button onClick={() => removeAnimal(parseInt(id))}>Farewell</button>
                </span>
            </div>)
        case 'sheep': return(
            <div className="sheep">
                <span>Sheep id: {id}</span>
                <span style={{color: wColor}}>Weight: {weight}</span>
                <span>Last feaded on: {feadingDate}</span>
                <span><label>Weight: </label> 
                    <input id={'weight' + id}></input>
                    <button onClick={() => addWeight(id, parseInt(document.getElementById('weight' + id).value))}>Set</button>
                </span>
                <span><label>Feading date:</label>  
                    <input id={'date' + id} type="date"/>
                    <button onClick={() => addFeadingDate(id, document.getElementById('date' + id).value)}>Set</button>
                </span>
                <span>
                    <button onClick={() => removeAnimal(parseInt(id))}>Farewell</button>
                </span>
            </div>)
        case 'horse': return(
            <div className="horse">
                <span>Horse id: {id}</span>
                <span style={{color: wColor}}>Weight: {weight}</span>
                <span>Last feaded on: {feadingDate}</span>
                <span><label>Weight: </label>  
                    <input id={'weight' + id}></input>
                    <button onClick={() => addWeight(id, parseInt(document.getElementById('weight' + id).value))}>Set</button>
                </span>
                <span><label>Feading date:</label> 
                    <input id={'date' + id} type="date"/>
                    <button onClick={() => addFeadingDate(id, document.getElementById('date' + id).value)}>Set</button>
                </span>
                <span>
                    <button onClick={() => removeAnimal(parseInt(id))}>Farewell</button>
                </span>
            </div>)
        default: 
            break;
    }
}

export default Animals;
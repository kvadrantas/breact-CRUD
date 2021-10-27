import Animals from "./components/Animals";
import { useState, useEffect } from "react";
import genId from "./js/genId";
import count from "./js/count";

function App() {

    const[animal, setAnimal] = useState([]);
    const[farm, setFarm] = useState(1);
    const[executed, setExecuted] = useState(0);

    const pickFarm = (e) => {
        console.log(typeof e.target.value)
        setFarm(parseInt(e.target.value));
    }

    const addAnimal = (a) => {
        const animalCopy = animal.slice();
        animalCopy.push({
            id: genId(),
            farm: farm,
            animal: a,
            weight: 0,
            feadingDate: '',
            executed
        });
        setAnimal(animalCopy);
        localStorage.setItem('animals',    JSON.stringify(animalCopy));
    }

    const removeAnimal = (id) => {
        const animalCopy = animal.slice();
        const ind = animalCopy.findIndex(e => e.id === id);
        animalCopy.splice(ind, 1);
        setAnimal(animalCopy);
        localStorage.setItem('animals',    JSON.stringify(animalCopy));
        setExecuted(executed + 1);
        localStorage.setItem('executed', executed + 1);
    }

    const removeAnimals = (breed) => {
        const animalCopy = animal.slice();
        let removedCount = 0;
        while (true) {
            const ind = animalCopy.findIndex(e => e.animal === breed);
            if (ind < 0) break;
            animalCopy.splice(ind, 1);
            removedCount++;
        }
        
        setAnimal(animalCopy);
        localStorage.setItem('animals',    JSON.stringify(animalCopy));
        setExecuted(executed + removedCount);
        localStorage.setItem('executed', executed + removedCount);
    }

    const addWeight = (id, weight) => {
        const animalCopy = animal.slice();
        const ind = animalCopy.findIndex(e => e.id === id);
        animalCopy[ind].weight = weight;
        setAnimal(animalCopy);
        localStorage.setItem('animals',    JSON.stringify(animalCopy));
        document.getElementById('weight' + id).value = '';
    }

    const addFeadingDate = (id, feadingDate) => {
        const animalCopy = animal.slice();
        const ind = animalCopy.findIndex(e => e.id === id);
        animalCopy[ind].feadingDate = feadingDate;
        setAnimal(animalCopy);
        localStorage.setItem('animals',    JSON.stringify(animalCopy));
        document.getElementById('date' + id).value = '';
    }

    useEffect(() => {
        const animals = localStorage.getItem('animals');
        const executed = localStorage.getItem('executed');
        if (null !== animals)
            setAnimal(JSON.parse(animals));
            setExecuted(JSON.parse(executed));
    }, []);

    async function html() {
        const html1 = await fetch('http://localhost:3003/animals');
        console.log(html1);
    }

    // console.log(await html());
    html();

    return(
        <>
            <div className="top-pane">
                <div>
                    <div className="stats-title">STATISTICS:</div>
                    <div className="stats">
                        <div className="stat-block">
                            <div className="stat-val">Cows: <span>{count('cow')}</span></div>
                            <div className="stat-val">Sheeps: <span>{count('sheep')}</span></div>
                            <div className="stat-val">Horses: <span>{count('horse')}</span></div>
                        </div>
                        <div className="stat-block">
                            <div className="stat-val">Total animals: <span>{count('all')}</span></div>
                            <div className="stat-val">Total weight: <span>{count('weight')}</span></div>
                            <div className="stat-val">Executed: <span>{executed}</span></div>
                        </div>
                    </div>
                </div>
                    <div className="navigation">
                        <fieldset>
                            <legend>Add</legend>
                            <div className="field-buttons">
                            <select value={farm} onChange={pickFarm}>
                                <option value={1}>Farm 1</option>
                                <option value={2}>Farm 2</option>
                                <option value={3}>Farm 3</option>
                            </select>
                        </div>
                            <div className="animal-buttons">
                            <button onClick={() => addAnimal('cow')}>Cow</button>
                            <button onClick={() => addAnimal('sheep')}>Sheep</button>
                            <button onClick={() => addAnimal('horse')}>Horse</button>
                        </div>
                        </fieldset>
                        <fieldset>
                            <legend>Remove</legend>
                            <div className="animal-buttons">
                            <button onClick={() => removeAnimals('cow')}>All cows</button>
                            <button onClick={() => removeAnimals('sheep')}>All sheeps</button>
                            <button onClick={() => removeAnimals('horse')}>All horses</button>
                        </div>
                        </fieldset>
                    </div>
            </div>


            <div className="content">
  
                <div className='field'>
                    {animal.map((e, ind) => 
                        {if(e.farm === 1) 
                            return(<Animals key={ind} animal={e.animal} id={e.id} weight={e.weight} feadingDate={e.feadingDate} removeAnimal={removeAnimal} addWeight={addWeight} addFeadingDate={addFeadingDate}/>);
                            return '';
                        } 
                    )}
                </div>
                <div className="field">
                    {animal.map((e, ind) => 
                        {if(e.farm === 2) 
                            return(<Animals key={ind} animal={e.animal} id={e.id} weight={e.weight} feadingDate={e.feadingDate} removeAnimal={removeAnimal} addWeight={addWeight} addFeadingDate={addFeadingDate}/>);
                            return '';
                        } 
                    )}
                </div>
                <div className="field">
                    {animal.map((e, ind) => 
                        {if(e.farm === 3) 
                            return(<Animals key={ind} animal={e.animal} id={e.id} weight={e.weight} feadingDate={e.feadingDate} removeAnimal={removeAnimal} addWeight={addWeight} addFeadingDate={addFeadingDate}/>);
                            return '';
                        } 
                    )}
                </div>
            </div>
        </>
    )
}

export default App;
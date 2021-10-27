function count (filter) {
    if (null === localStorage.getItem('lastId')) return 0;
    const animals = JSON.parse(localStorage.getItem('animals'));

    let totalWeight = 0;
    let totalAnimals = 0;

    if (filter === 'all') return animals.length;

    if (filter === 'weight') {
        animals.forEach(e => totalWeight += e.weight);
        return totalWeight;
    } 

    animals.forEach(e => {
        if (e.animal === filter)
            totalAnimals++;
    });

    return totalAnimals;
}

export default count;
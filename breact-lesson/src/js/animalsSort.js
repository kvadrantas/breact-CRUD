function animalSort(animalss, by) {
    const animals = animalss.slice();
    switch (by) {
        case 'text-asc':
            animals.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            break;
        case 'text-desc':
            animals.sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
                return 0;
            });
            break;
        case 'number-asc':
            animals.sort(function(a, b) {
                return a.weight - b.weight;
            });
            break;
        case 'number-desc':
            animals.sort(function(a, b) {
                return b.weight - a.weight;
            });
            break;
        default:
    }
    return animals
}
export default animalSort;
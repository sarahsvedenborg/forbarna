export const sets = {
    0: {
        type: 'different',
        name: 'Dyr',
        values: ['Monkey', 'Apekatt', 'Horse', 'Hest', 'Rat' ,'Rotte'] //TODO - bytte til å være tuples
    },
    1: {
        type: 'identical',
        name: 'Bokstaver',
        values: ['S', 'A', 'C', 'L', 'M' ,'T', 'D']
    },
    2: {
        type: 'different',
        name: 'Tiervenner',
        values: [1, 9, 2, 8, 3, 7 , 6, 4, 5, 5]
    }
}

export const getSetNames = () => {
    let names = []
    for (let set in sets){
        names.push(sets[set].name)
    }
    return names
}


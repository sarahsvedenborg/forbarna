let index = 3

export const sets = {
    0: {
        type: 'different',
        name: 'Dyr',
        cardsInPair: 2,
        values: ['Monkey', 'Apekatt', 'Horse', 'Hest', 'Rat' ,'Rotte'] //TODO - bytte til å være tuples
    },
    1: {
        type: 'identical',
        name: 'Bokstaver',
        cardsInPair: 2,
        values: ['S', 'A', 'C', 'L', 'M' ,'T', 'D']
    },
    2: {
        type: 'different',
        name: 'Tiervenner',
        cardsInPair: 2,
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

export const addSet = (set) => {
    sets[index] = set
    index++
    console.log("sets", sets)
}


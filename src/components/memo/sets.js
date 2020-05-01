import {SetTypeEnum} from '../../common/enums.js'

let index = 4

export const sets = {
    0: {
        type: SetTypeEnum.DIFFERENT,
        name: 'Dyr',
        cardsInPair: 2,
        values: [['Monkey', 'Apekatt'], ['Horse', 'Hest'], ['Rat' ,'Rotte']] //TODO - bytte til å være tuples
    },
    1: {
        type: SetTypeEnum.IDENTICAL,
        name: 'Bokstaver',
        cardsInPair: 2,
        values: [['S'], ['A'], ['C'], ['L'], ['M'] ,['T'], ['D']]
    },
    2: {
        type: SetTypeEnum.DIFFERENT,
        name: 'Tiervenner',
        cardsInPair: 2,
        values: [[1, 9], [2, 8], [3, 7] , [6, 4], [5, 5]]
    },
    3: {
        type: SetTypeEnum.DIFFERENT,
        name: 'Farger på 3 språk',
        cardsInPair: 3,
        values: [["red", "rød", "rouge"], ["white", "hvit", "blanc"] , ["grønn", "green", "vert"]]
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


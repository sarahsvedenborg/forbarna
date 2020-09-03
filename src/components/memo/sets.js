import {SetTypeEnum} from '../../common/enums.js'
import {SetCategoryEnum} from '../../common/enums.js'

export let sets = [
    {
        type: SetTypeEnum.DIFFERENT,
        name: 'Dyr',
        cardsInPair: 2,
        category: SetCategoryEnum.ENGELSK,
        values: [['Monkey', 'Apekatt'], ['Horse', 'Hest'], ['Rat' ,'Rotte']] 
    },
    {
        type: SetTypeEnum.IDENTICAL,
        name: 'Bokstaver',
        cardsInPair: 2,
        category: SetCategoryEnum.ANDRE,
        values: [['S'], ['A'], ['C'], ['L'], ['M'] ,['T'], ['D']]
    },
    {
        type: SetTypeEnum.DIFFERENT,
        name: 'Tiervenner',
        cardsInPair: 2,
        category: SetCategoryEnum.MATTE,
        values: [[1, 9], [2, 8], [3, 7] , [6, 4], [5, 5]]
    },
    {
        type: SetTypeEnum.DIFFERENT,
        name: 'Farger på 3 språk',
        cardsInPair: 3,
        category: SetCategoryEnum.ENGELSK,
        values: [["red", "rød", "rouge"], ["white", "hvit", "blanc"] , ["grønn", "green", "vert"]]
    },
     {
        type: SetTypeEnum.DIFFERENT,
        name: '2-gangen',
        cardsInPair: 2,
        category: SetCategoryEnum.MATTE,
        values: [["1 x 2", "2"], ["2 x 2", "4"] , ["3 x 2", "6"],["4 x 2", "8"], ["5 x 2", "10"] , ["6 x 2", "12"], ["7 x 2", "14"], ["8 x 2", "16"] , ["9 x 2", "18"], ["10 x 2", "20"]]
    },
    {
        type: SetTypeEnum.DIFFERENT,
        name: '3-gangen',
        cardsInPair: 2,
        category: SetCategoryEnum.MATTE,
        values: [["1 x 3", "3"], ["2 x 3", "6"] , ["3 x 3", "9"],["4 x 3", "12"], ["5 x 3", "15"] , ["6 x 3", "18"], ["7 x 3", "21"], ["8 x 3", "24"] , ["9 x 3", "27"], ["10 x 3", "30"]]
    },
    {
        type: SetTypeEnum.DIFFERENT,
        name: '5-gangen',
        cardsInPair: 2,
        category: SetCategoryEnum.MATTE,
        values: [["1 x 5", "5"], ["2 x 5", "10"] , ["3 x 5", "15"],["4 x 5", "20"], ["5 x 5", "25"] , ["6 x 5", "30"], ["7 x 5", "35"], ["8 x 5", "40"] , ["9 x 5", "45"], ["10 x 5", "50"]]
    },
    {
        type: SetTypeEnum.DIFFERENT,
        name: 'Test',
        cardsInPair: 2,
        category: SetCategoryEnum.ANDRE,
        values: [["a", "A"], ["b", "B"] , ["c", "C"]]
    }
]

export const getSetsMetadata = () => {
    let array = []
    for (let setIndex in sets){
        array.push({name: sets[setIndex].name, category: sets[setIndex].category})
    }
    return array
}

export const addSet = (set) => {
    sets.push(set)
}

export const deleteSet = (setName) => {
    let indexToDelete = null;
    for(let i = 0; i < sets.length; i++){
        if(sets[i].name == setName){
            indexToDelete = i;
            break
        }
    }
    sets.splice(indexToDelete,1)
}   


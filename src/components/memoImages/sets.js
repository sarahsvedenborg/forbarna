import { SetTypeEnum } from '../../common/enums.js'
import { SetCategoryEnum } from '../../common/enums.js'

export let sets = [
    {
        type: SetTypeEnum.IDENTICAL,
        name: 'Familie',
        cardsInPair: 2,
        category: SetCategoryEnum.ANDRE,
        values: [
            ['/img/family/amelie.jpg'],
            ['/img/family/colette.jpg'],
            ['/img/family/daniel.jpg'],
            ['/img/family/farmor.jpg'],
            ['/img/family/felix.jpg'],
            ['/img/family/linnea.jpg'],
            ['/img/family/morfar.jpg'],
            ['/img/family/mormor.jpg'],
            ['/img/family/sarah.jpg'],
            ['/img/family/stian.jpg'],
            ['/img/family/yvonne.jpg']
        ]
    }
]
export const getSetsMetadata = () => {
    let array = []
    for (let setIndex in sets) {
        array.push({ name: sets[setIndex].name, category: sets[setIndex].category })
    }
    return array
}

export const addSet = (set) => {
    sets.push(set)
}

export const deleteSet = (setName) => {
    let indexToDelete = null;
    for (let i = 0; i < sets.length; i++) {
        if (sets[i].name == setName) {
            indexToDelete = i;
            break
        }
    }
    sets.splice(indexToDelete, 1)
}


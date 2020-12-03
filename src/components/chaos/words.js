import {SetCategoryEnum} from '../../common/enums.js'
let words = [
        {
            name: 'Farger',
            category: SetCategoryEnum.ENGELSK,
            values: ['purple', 'red', 'black', 'orange', 'blue', 'white', 'yellow', 'brown', 'pink', 'green', 'silver', 'gold']
        },
        {
            name: 'Dyr',
            category: SetCategoryEnum.ENGELSK,
            values: ['pig', 'crocodile', 'horse', 'cow', 'monkey', 'rabbit', 'duck', 'bird', 'spider', 'snake', 'elephant', 'fish', 'rat', 'bat', 'donkey', 'cat', 'dog', 'mouse']
        },
        {
            name: 'Skole',
            category: SetCategoryEnum.ENGELSK,
            values: ['lining up', 'lesson', 'pupil', 'class']
        },
        {
            name: 'Spørreord',
            category: SetCategoryEnum.NORSK,
            values: ['hvem', 'hva', 'hvorfor', 'hvordan', 'hvor', 'hvilken', 'når']
        },
        {
            name: 'Ki/Sj/Skj',
            category: SetCategoryEnum.NORSK,
            values: ['Sjokolade', 'Kirke', 'Sjø', 'Kjøtt', 'Kjole', 'Skjære']
        },
        {
            name: 'Følelser',
            category: SetCategoryEnum.ENGELSK,
            values: ['Happy', 'Sad', 'Angry', 'Tired', 'Hungry', 'Surprised', 'Frightened']
        },
        {
            name: 'Juleord',
            category: SetCategoryEnum.ENGELSK,
            values: ['Snow crystal', 'Father Christmas', 'Snowman', 'Gift', 'Bells', 'Santa Claus']
        },
    ]

export const getCategories = () => {
    return [SetCategoryEnum.NORSK, SetCategoryEnum.ENGELSK]
}

export const getWords = () => {
    return words
}
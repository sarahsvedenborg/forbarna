import {SetCategoryEnum} from '../../common/enums.js'
let words = [
        {
            name: 'Farger',
            category: SetCategoryEnum.ENGELSK,
            values: [{
                en: 'purple',
                no: 'lilla'
            },
            {
                en: 'red',
                no: 'rød'
            },
            {
                en: 'black',
                no: 'svart'
            },
            {
                en: 'orange',
                no: 'oransje'
            },
            {
                en: 'blue',
                no: 'blå'
            },
            {
                en: 'white',
                no: 'hvit'
            },
            {
                en: 'yellow',
                no: 'gul'
            },
            {
                en: 'brown',
                no: 'brun'
            },
            {
                en: 'pink',
                no: 'rosa'
            },
            {
                en: 'green',
                no: 'grønn'
            },
            {
                en: 'silver',
                no: 'sølv'
            },
            {
                en: 'gold',
                no: 'gull'
            }]
            //values: ['purple', 'red', 'black', 'orange', 'blue', 'white', 'yellow', 'brown', 'pink', 'green', 'silver', 'gold']
        },
        {
            name: 'Dyr',
            category: SetCategoryEnum.ENGELSK,
            values: [{
                en: 'pig',
                no: 'gris'
            },
            {
                en: 'crocodile',
                no: 'krokodille'
            },
            {
                en: 'horse',
                no: 'hest'
            },
            {
                en: 'cow',
                no: 'ku'
            },
            {
                en: 'monkey',
                no: 'apekatt'
            },
            {
                en: 'rabbit',
                no: 'kanin'
            },
            {
                en: 'duck',
                no: 'and'
            },
            {
                en: 'bird',
                no: 'fugl'
            },
            {
                en: 'spider',
                no: 'ederkopp'
            },
            {
                en: 'snake',
                no: 'slange'
            },
            {
                en: 'elephant',
                no: 'elefant'
            },
            {
                en: 'fish',
                no: 'fisk'
            },
            {
                en: 'rat',
                no: 'rotte'
            },
            {
                en: 'bat',
                no: 'flaggermus'
            },
            {
                en: 'donkey',
                no: 'esel'
            },
            {
                en: 'cat',
                no: 'katt'
            },
            {
                en: 'dog',
                no: 'hund'
            },
            {
                en: 'mouse',
                no: 'mus'
            }]
            //values: ['pig', 'crocodile', 'horse', 'cow', 'monkey', 'rabbit', 'duck', 'bird', 'spider', 'snake', 'elephant', 'fish', 'rat', 'bat', 'donkey', 'cat', 'dog', 'mouse']
        },
        {
            name: 'Skole',
            category: SetCategoryEnum.ENGELSK,
            values: [{
                en: 'lining up',
                no: 'står i kø'
            },
            {
                en: 'lesson',
                no: 'skoletime'
            },
            {
                en: 'pupil',
                no: 'elev'
            },
            {
                en: 'class',
                no: 'klasse'
            }]
            //values: ['lining up', 'lesson', 'pupil', 'class']
        },
        {
            name: 'Spørreord',
            category: SetCategoryEnum.ENGELSK,
            values: [{
                en: 'who',
                no: 'hvem'
            },
            {
                en: 'what',
                no: 'hva'
            },
            {
                en: 'why',
                no: 'hvorfor'
            },
            {
                en: 'why',
                no: 'hvordan'
            },
            {
                en: 'where',
                no: 'hvor'
            },
            {
                en: 'which',
                no: 'hvilken'
            },
            {
                en: 'when',
                no: 'når'
            }]
            //values: ['hvem', 'hva', 'hvorfor', 'hvordan', 'hvor', 'hvilken', 'når']
        },
     /*    {
            name: 'Ki/Sj/Skj',
            category: SetCategoryEnum.NORSK,
            values: ['Sjokolade', 'Kirke', 'Sjø', 'Kjøtt', 'Kjole', 'Skjære']
        }, */
        {
            name: 'Følelser',
            category: SetCategoryEnum.ENGELSK,
            values: [{
                en: 'happy',
                no: 'glad'
            },
            {
                en: 'sad',
                no: 'trist'
            },
            {
                en: 'angry',
                no: 'sint'
            },
            {
                en: 'tired',
                no: 'trøtt'
            },
            {
                en: 'hungry',
                no: 'sulten'
            },
            {
                en: 'surprised',
                no: 'overrasket'
            },
            {
                en: 'frightened',
                no: 'redd'
            }]
            //values: ['Happy', 'Sad', 'Angry', 'Tired', 'Hungry', 'Surprised', 'Frightened']
        },
        {
            name: 'Juleord',
            category: SetCategoryEnum.ENGELSK,
            values: 
            [{
                en: 'snow crystal',
                no: 'snøkrystall'
            },
            {
                en: 'father christmas',
                no: 'julenissen'
            },
            {
                en: 'snowman',
                no: 'snømann'
            },
            {
                en: 'gift',
                no: 'gave'
            },
            {
                en: 'bells',
                no: 'bjeller'
            },
            {
                en: 'santa claus',
                no: 'julenissen'
            },
            {
                en: 'angel',
                no: 'engel'
            }]
            //values: ['Snow crystal', 'Father Christmas', 'Snowman', 'Gift', 'Bells', 'Santa Claus']
        },
        {
            name: 'Hagegloser',
            category: SetCategoryEnum.ENGELSK,
            values: [{
                en: 'visit',
                no: 'besøk'
            },
            {
                en: 'garden',
                no: 'hage'
            },
            {
                en: 'seeds',
                no: 'frø'
            },
            {
                en: 'with care',
                no: 'med forsiktighet'
            },
            {
                en: 'spot',
                no: 'flekk'
            },
            {
                en: 'need',
                no: 'trenger'
            },
            {
                en: 'come',
                no: 'kom'
            },
            {
                en: 'today',
                no: 'i dag'
            },
            {
                en: 'my',
                no: 'mine'
            },
            {
                en: 'this',
                no: 'dette'
            }]
        },
    ]

export const getCategories = () => {
    //TODO if I support norwegian, what should the hint be?
    //return [SetCategoryEnum.NORSK, SetCategoryEnum.ENGELSK]
    return [SetCategoryEnum.ENGELSK]
}

export const getWords = () => {
    return words
}
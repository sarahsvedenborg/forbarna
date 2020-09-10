let words = [
        {
            name: 'Farger',
            category: 'Engelsk',
            values: ['purple', 'red', 'black', 'orange', 'blue', 'white', 'yellow', 'brown', 'pink', 'green', 'silver', 'gold']
        },
        {
            name: 'Dyr',
            category: 'Engelsk',
            values: ['pig', 'crocodile', 'horse', 'cow', 'monkey', 'rabbit', 'duck', 'bird', 'spider', 'snake', 'elephant', 'fish', 'rat', 'bat', 'donkey', 'cat', 'dog', 'mouse']
        },
        {
            name: 'Skole',
            category: 'Engelsk',
            values: ['lesson', 'pupil', 'class', 'lining up']
        },
        {
            name: 'Spørreord',
            category: 'Norsk',
            values: ['hvem', 'hva', 'hvorfor', 'hvordan', 'hvor', 'hvilken']
        },
        {
            name: 'Ki/Sj/Skj',
            category: 'Norsk',
            values: ['Sjokolade', 'Kirke', 'Sjø', 'Kjøtt', 'Kjole', 'Skjære']
        },
        {
            name: 'Ett ord',
            category: 'Norsk',
            values: ['Kake']
        },
    ]

export const getCategories = () => {
    return ['Norsk', 'Engelsk']
}

export const getWords = () => {
    return words
}
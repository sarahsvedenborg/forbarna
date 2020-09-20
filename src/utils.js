export const shuffle = array => {
    //From stackoverflow
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  export const createSetsByCategory = (sets) => {
    let setsByCategory = {};
     for (let i = 0; i < sets.length; i++) {
       if(!setsByCategory[sets[i].category]){
          setsByCategory[sets[i].category] = []
       }
       setsByCategory[sets[i].category].push(sets[i]);
    }
    return setsByCategory;
  };
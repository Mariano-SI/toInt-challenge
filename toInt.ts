function toInt(numbersAsString: string){
    const numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
    const finalNumber: number[] = [];
  
    for (const numberAsString of numbersAsString) {
      finalNumber.push(numbers[numberAsString])
    }
  
    return finalNumber.join('');
  }
  
console.log(toInt("234"))
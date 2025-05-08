{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  formatString("Hello");
  formatString("Hello", true);
  const result1 = formatString("Hello", false);
  //   console.log(result1);

  //Problem:2
  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const filterItem: { title: string; rating: number }[] = [];

    for (let i = 0; i < items.length; i++) {
      const currentItem = items[i];

      if (currentItem.rating >= 4) {
        filterItem.push(currentItem);
      }
    }
    return filterItem;
  }

  const books = [
    { title: "Book A", rating: 4.0 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book X", rating: 0.0 },
  ];

  const TopBooks = filterByRating(books);

  //   console.log(TopBooks);

  //   problem:3

  function concatenateArrays<T>(...arrays: T[][]): T[] {
   
    const result: T[] = [];

    
    for (let i = 0; i < arrays.length; i++) {
      const currentArray = arrays[i];
      
      for (let j = 0; j < currentArray.length; j++) {
        const currentItem = currentArray[j];
        result.push(currentItem);
      }
    }    
    return result;
  }

  const Output1 = concatenateArrays(["a", "b"], ["c"]);
  const Output2 = concatenateArrays([1, 2], [3, 4], [5]);
//   console.log(Output2); 


//Problem: 4
class Vehicle {
    
    private make: string;
    private year: number;

    
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    
    public getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {

    private model: string;

    constructor(make: string, year: number, model: string) {
      
        super(make, year);
        this.model = model;
    }

   
    public getModel(): string {
        return `Model: ${this.model}`;
    }
}
const myCar = new Car("BMW", 2020, "i8");

// console.log(myCar.getInfo());   
// console.log(myCar.getModel());  
}

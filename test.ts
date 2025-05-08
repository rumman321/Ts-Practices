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
}

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


}

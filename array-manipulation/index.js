const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Albert", last: "Hofmann", year: 1906, passed: 2008 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

const transportation = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "scooter"
];

// Filter the list of inventors for those who were born in the 1500's
const invFifteen = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);
console.table(invFifteen);

// Give us an array of the inventor first and last names
const invFirstLast = inventors.map(inv => `${inv.first} ${inv.last}`);
console.log(invFirstLast);

// Sort the inventors by birthdate, oldest to youngest
const invSortedAge = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table(invSortedAge);

// How many years did all the inventors live?
const totalYears = inventors.reduce(
  (total, inv) => total + inv.passed - inv.year,
  0
);
console.log(totalYears); // 861

// Sort the people alphabetically by last name
const sortedPeopleLast = people.sort((a, b) => {
  const [aLast] = a.split(", ");
  const [bLast] = b.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.table(sortedPeopleLast);

// Sum up the instances of each transportation
const transportationCount = transportation.reduce((total, item) => {
  if (!total[item]) total[item] = 0;
  total[item]++;
  return total;
}, {});
console.table(transportationCount);

// check if at least an inventor lived more than 80 years.
inventors.some(inv => inv.passed - inv.year > 80); // true

// check if all inventors lived more than 50 years.
inventors.every(inv => inv.passed - inv.year > 50); // false

// to return only one result
inventors.find(inv => inv.first === "Albert"); // {first: "Albert", last: "Einstein", year: 1879, passed: 1955}

// to delete an item from array
const index = inventors.findIndex(
  inv => inv.first === "Albert" && inv.last === "Hofmann"
);
inventors.splice(index, 1);

// to create a new array after removing one item
const newInventorsList = [
  ...inventors.slice(0, index),
  ...inventors.slice(index + 1)
];

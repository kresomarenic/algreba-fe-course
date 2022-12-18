var persons = [
  {'name': 'John', "years": 25},
  {'name': 'Joe', "years": 20},
  {'name': 'Bertha', "years": 30},
  {'name': 'Sabahudin', "years": 15},
  {'name': 'Tomislav', "years": 35}
];

function addYears(persons) {
  for (let i = 0; i < persons.length; i++) {
    persons[i].years += 1;
  }
  return persons;
}

function yearAverage(persons) {
  var totalSum = 0;
  for (let i = 0; i < persons.length; i++) {
    totalSum += persons[i].years;    
  }
  return totalSum / persons.length;
}
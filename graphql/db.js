export const people = [
  {
    id: "0",
    name: "park",
    age: 16,
    gender: "male"
  },
  {
    id: "1",
    name: "bark",
    age: 16,
    gender: "female"
  },
  {
    id: "2",
    name: "dest",
    age: 16,
    gender: "male"
  },
  {
    id: "3",
    name: "fuck",
    age: 16,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};

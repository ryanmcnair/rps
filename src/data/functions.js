const weapons = ['rock', 'paper', 'scissors'];

const objects = [
  {
    id: 1,
    object: 'rock',
    selected: false,
  },
  {
    id: 2,
    object: 'paper',
    selected: false,
  },
  {
    id: 3,
    object: 'scissors',
    selected: false,
  },
];

const selectedObject = () => {
  const selection = objects.filter((object) => object.selected === true);
  return selection;
};

const findsTrue = (id) => {
  const playedObject = objects.find((object) => id === object.id);
  playedObject.selected = true;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { selectedObject, findsTrue, weapons };

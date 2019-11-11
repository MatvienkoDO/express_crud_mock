import { Lamp } from './lamp';

const lamps: Lamp[] = [];

let counter = 0;
function generateNewId() {
  return counter++;
}

function copy(lamp: Lamp): Lamp {
  return Object.assign({}, lamp);
}

function _findById(id: number): Lamp | null {
  const found = lamps.find((value) => value.id === id);

  return found || null;
}

export function create(name: string, age: number): Lamp {
  const newLamp = {
    id: generateNewId(),
    name,
    age
  };

  lamps.push(newLamp);

  return copy(newLamp);
}

export function findById(id: number): Lamp | null {
  const found = _findById(id);

  return found ? copy(found) : null;
}

export function getAll() {
  return lamps.map(value => Object.assign({}, value));
}

export function update(id: number, lampData: Partial<Lamp>): Lamp | null {
  const found = _findById(id);

  if (!found) {
    return null;
  }

  const { name, age } = lampData;

  if (name) {
    found.name = name;
  }

  if (age) {
    found.age = age;
  }

  return copy(found);
}

export function deleteLamp(id: number): Lamp | null {
  const index = lamps.findIndex((value) => value.id === id);

  if (index === -1) {
    return null;
  }

  const deleted = lamps.splice(index, 1);

  return deleted[0];
}

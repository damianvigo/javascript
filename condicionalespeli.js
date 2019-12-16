const iAmMother = 'I am Mother';
const pgiAmMother = 13;

const nameLeandro = 'Leandro';
let ageLeandro = 26;

const nameNacho = 'Nacho';
let ageNacho = 11;

/* function canWatchiAmMother(name, age, isWithAdult = false) {
  if (age >= pgiAmMother) {
    alert(`${name} puede pasar a ver ${iAmMother}`);
  } else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${iAmMother} aunque su edad es ${age} se ecuentra acompañada/o por un adulto`);
  } else {
    alert(`${name} No puede pasar a ver ${iAmMother} porque tiene ${age} años y necesita tener ${pgiAmMother}`)
  }
} */

const canWatchiAmMother = (name, age, isWithAdult = false) => {
  if (age >= pgiAmMother) {
    alert(`${name} puede pasar a ver ${iAmMother}`);
  } else if (isWithAdult) {
    alert(`${name} puede pasar a ver ${iAmMother} aunque su edad es ${age} se ecuentra acompañada/o por un adulto`);
  } else {
    alert(`${name} No puede pasar a ver ${iAmMother} porque tiene ${age} años y necesita tener ${pgiAmMother}`)
  }
}

canWatchiAmMother(nameLeandro, ageLeandro);
canWatchiAmMother(nameNacho, ageNacho);
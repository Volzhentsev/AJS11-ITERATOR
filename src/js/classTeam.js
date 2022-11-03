import Bowerman from './classBowerman';

const char1 = new Bowerman('Rob', 'Bowerman');
const char2 = new Bowerman('Robin', 'Bowerman');
const char3 = new Bowerman('Alex', 'Bowerman');

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Character is already in team');
    }
    this.members.add(character);
  }

  addAll(...rest) {
    rest.forEach((character) => this.members.add(character));
  }

  toArray() {
    return Array.from(this.members);
  }

  [Symbol.iterator]() {
    const enemyChar = [char1, char2, char3];
    let current = 0;
    const last = enemyChar.length - 1;
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: enemyChar[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}

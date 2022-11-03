import Team from '../js/classTeam';
import Bowerman from '../js/classBowerman';

test('add to team', () => {
  const team = new Team();
  const char1 = new Bowerman('Rob', 'Bowerman');
  team.add(char1);
  expect(team.members.size).toBe(1);
  expect(team.members).toContain(char1);
  expect(() => team.add(char1)).toThrow();
});

test('add all to team', () => {
  const team = new Team();
  const char1 = new Bowerman('Rob', 'Bowerman');
  const char2 = new Bowerman('Robin', 'Bowerman');
  const char3 = new Bowerman('Alex', 'Bowerman');
  team.addAll(char1, char2, char3);
  expect(team.members.size).toBe(3);
  expect(team.members).toContain(char1, char2, char3);
  expect(() => team.addAll(char1)).not.toThrow();
});

test('set team to array', () => {
  const team = new Team();
  const char1 = new Bowerman('Rob', 'Bowerman');
  const char2 = new Bowerman('Robin', 'Bowerman');
  const char3 = new Bowerman('Alex', 'Bowerman');
  team.addAll(char1, char2, char3);
  expect(team.toArray()).toEqual([char1, char2, char3]);
});

test('iteration test', () => {
  const team = new Team();
  expect(team[Symbol.iterator]).toEqual(expect.any(Function));
});

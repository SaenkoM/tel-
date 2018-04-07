const F001 = {
  encounterChance: 40,
  encounters: [
    {
      chance: 70,
      fiends: [{ type: 'wolf', level: 1 }]
    },
    {
      chance: 30,
      fiends: [{ type: 'wolf', level: 1 }, { type: 'wolf', level: 1 }]
    }
  ]
}

const FIGHTS = [
  [null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, F001, null, null, null, null, null],
  [null, null, null, null, null, F001, null, null, null, null, null],
  [null, null, null, null, null, F001, null, null, null, null, null],
  [null, null, null, null, null, F001, null, null, null, null, null]
]

export default FIGHTS

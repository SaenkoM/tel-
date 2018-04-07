import './styles.css'

import randomInRange from '../../Utils/randomInRange'

const Attack = {
  create: (level) => {
    return {
      type: 'attack',
      image: 'attack.png',
      text: [
        'Attack',
        `${2 + level * 1}-${4 + level * 1}`
      ],
      cost: {
        ap: 20,
        mp: null
      }
    }
  },
  execute: (target) => {
    const dmg = randomInRange(3, 5)
    target.hp = {
      ...target.hp,
      cur: target.hp.cur - dmg > 0 ? target.hp.cur - dmg : 0
    }
  }
}

export default Attack

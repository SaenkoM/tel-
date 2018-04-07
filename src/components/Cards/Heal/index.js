import './styles.css'

import randomInRange from '../../Utils/randomInRange'

const Attack = {
  create: (level) => {
    return {
      type: 'heal',
      image: 'heal.png',
      text: [
        'Heal',
        `${5 + level * 2}-${8 + level * 2}`
      ],
      cost: {
        ap: 15,
        mp: 3
      }
    }
  },
  execute: (target) => {
    console.log(target)
    const heal = randomInRange(7, 10)
    target.hp = {
      ...target.hp,
      cur: target.hp.cur + heal < target.hp.max ? target.hp.cur + heal : target.hp.max
    }
  }
}

export default Attack

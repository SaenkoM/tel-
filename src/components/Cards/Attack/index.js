import './styles.css'

import randomInRange from '../../Utils/randomInRange'

const Attack = {
  image: 'attack.png',
  text: [
    'Attack',
    '3-5'
  ],
  cost: {
    ap: 20,
    mp: null
  },
  execute: (target) => {
    console.log(target)
    const dmg = randomInRange(3, 5)
    target.hp.cur = target.hp.cur - dmg > 0 ? target.hp.cur - dmg : 0
  }
}

export default Attack

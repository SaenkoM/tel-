import './styles.css'

import randomInRange from '../../Utils/randomInRange'

const Attack = {
  image: 'heal.png',
  text: [
    'Heal',
    '7-10'
  ],
  cost: {
    ap: 15,
    mp: 3
  },
  create: () => {
    //
  },
  execute: (target) => {
    console.log(target)
    const heal = randomInRange(7, 10)
    target.hp.cur = target.hp.cur + heal < target.hp.max ? target.hp.cur + heal : target.hp.max
  }
}

export default Attack

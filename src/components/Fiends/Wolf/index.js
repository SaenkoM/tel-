import './styles.css'
import randomInRange from '../../Utils/randomInRange'

const Wolf = {
  name: 'Wolf',
  image: 'wolf.png',
  stats: {
    //
  },
  attacks: {
    //
  },
  create: (level) => {
    return {
      type: 'wolf',
      hp: {
        cur: 11 + level * 3,
        max: 11 + level * 3
      }
    }
  },
  attack: (target) => {
    const dmg = randomInRange(2, 5)
    target.hp = {
      ...target.hp,
      cur: target.hp.cur - dmg > 0 ? target.hp.cur - dmg : 0
    }
  }
}

export default Wolf

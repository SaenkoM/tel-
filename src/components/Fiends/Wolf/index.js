import './styles.css'

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
  }
}

export default Wolf

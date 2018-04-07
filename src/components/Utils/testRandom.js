const testRandom = (chance) => {
  const rand = Math.random() * 100

  if (typeof chance === 'number') {
    console.log('R', rand, chance)
    return rand <= chance
  } else {
    console.log('R', rand, chance)
    let base = 0

    for (let i = 0; i < chance.length; i++) {
      base += chance[i]
      if (rand <= base) return i
    }

    return 0
  }
}

export default testRandom

const randomInRange = (min, max) => {
  const rand = Math.random() * 100
  const diff = max - min

  let base = 0
  const step = 100 / diff

  for (let i = 0; i < diff; i++) {
    base += step
    if (rand <= base) {
      console.log('R', rand, diff, min + i)
      return min + i
    }
  }
}

export default randomInRange

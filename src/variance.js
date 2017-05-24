export default function (array, property) {
  let ev = 0
  let ev2 = 0
  if (!property) {
    array.forEach(value => {
      ev += value
    })
    array.forEach(array, value => {
      ev2 += value * value
    })
    return (ev2 / array.length) - Math.pow((ev / array.length), 2)
  } else {
    array.forEach(value => {
      ev += value[property]
    })
    array.forEach(array, value => {
      ev2 += value[property] * value[property]
    })
    return (ev2 / array.length) - Math.pow((ev / array.length), 2)
  }
}

type SuperPrint = <T>(a: T[]) => T

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1, 2, 3])
const b = superPrint(['a', 'b', 'c'])
const c = superPrint([true, false, true])
const d = superPrint([1, 2, true, 'why', false, 10])
b.toUpperCase()
d.toUpperCase()

console.log(a, b, c, d)

type SuperPrint2 = <T, M>(a: T[], b: M) => T

const superPrint2: SuperPrint2 = (a) => a[0]

const e = superPrint2([1, 2, 3], 'e')
const f = superPrint2(['a', 'b', 'c'], 17)
const g = superPrint2([true, false, true], 'g')
const h = superPrint2([1, 2, true, 'why', false, 10], 18)
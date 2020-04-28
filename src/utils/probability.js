const math = require('mathjs')

export function normalizeProbabilities(probs) {
    const sum = math.sum(probs)
    return math.divide(probs, sum)
}
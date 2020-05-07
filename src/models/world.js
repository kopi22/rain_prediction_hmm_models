const math = require('mathjs')

class World {

    // initState - boolean - says if it is raining or not
    // tranistionModel - 2x2 matrix - of possible transitions
    // e.g. transitionModel[0][0] - from raining day to raining day
    constructor(initState, transitionModel, evidenceModel) {
        this.raining = initState
        this.transitionModel = transitionModel 
        this.evidenceModel = evidenceModel
        this.stateHistory = [[initState, null]]
    }

    nextState = () => {
        this.raining = this.#binaryProbSelection(this.transitionModel)
        const evidence = this.#binaryProbSelection(this.evidenceModel)
        this.stateHistory.push([this.raining, evidence])
        return evidence
    }

    reset = () => {
        const [initState, _] = this.stateHistory
        this.stateHistory = [initState]
    }

    #binaryProbSelection = model => {
        const probs = model.subset(math.index((this.raining ? 0 : 1), 0))
        return Math.random() - probs < 0
    }
}

export default World
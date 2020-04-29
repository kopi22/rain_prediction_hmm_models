const math = require('mathjs')

class World {

    // initState - boolean - says if it is raining or not
    // tranistionModel - 2x2 matrix - of possible transitions
    constructor(initState, transitionModel, evidenceModel) {
        this.raining = initState
        this.transitionModel = transitionModel 
        this.evidenceModel = evidenceModel
    }

    nextState() {
        const probs = this.transitionModel.subset(math.index((this.raining ? 0 : 1), [0, 1]))
        this.raining = Math.random() + probs[0] > 1
        
    }
}
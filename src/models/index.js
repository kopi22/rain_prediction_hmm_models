import { normalizeProbabilities } from '../utils/probability'


const math = require('mathjs')

export default class Model {

    // priors - S x 1 matrix - prior probabilites of states
    // transitionModel - S x S matrix where S is number or states
    // evidenceModel - dictionary of the form <EvidenceKey>: <S x S diagonal matrix with evidence likelihood> 
    constructor(priors, transitionModel, evidenceModel) {
        this.priors = priors
        this.transitionModel = transitionModel
        this.evidenceModel = evidenceModel
        this.filterHistory = [priors]
        this.time = 0
    }

    filter = evidence => {
        const evidenceProb = this.evidenceModel[evidence]
        this.filterHistory.push(normalizeProbabilities(math.multiply(evidenceProb, math.transpose(this.transitionModel), this.filterHistory[this.filterHistory.length - 1])))
        this.time++
        // TODO: implement smoothing and MLE
    }

    reset = () => {
        const [priors, _] = this.filterHistory
        this.filterHistory = [priors]
    }
}
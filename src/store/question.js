import axios from 'axios'
import { baseUrl } from '../config/config'

const question = {
  state: {
    questions: []
  },
  mutations: {
    refreshQuestions: (state, questions) => {
      state.questions = questions
    }
  },
  actions: {
    fetchQuestions: async ({ commit }) => {
      const res = await axios.get(`${baseUrl}/questions`)
      const questions = res.data.questions

      commit('refreshQuestions', questions)
    }
  }
}

export default question

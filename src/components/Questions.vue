<template>
  <div>
    <h2>Questions List</h2>
    <div v-for="(question, index) in questions" :key="index">
      <div v-bind:key="question.id">{{ question.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    questions: function () {
      return this.$store.state.question.questions
    }
  },
  mounted: function () {
    this.$store.dispatch('question/fetchQuestions')
  },
  methods: {
    ...mapActions('question', [
      'fetchQuestions'
    ])
  }
}
</script>

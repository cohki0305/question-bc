<template>
  <div class="main-container">
    <button type="button" name="button" @click="signUp">Sign up</button>
  </div>
</template>

<script>
import web3 from '../helpers/web3'
import axios from 'axios'

export default {
  methods: {
    async signUp () {
      const accounts = await web3.eth.getAccounts()
      const account = accounts[0]

      const signed = await this.sign(account)
      const res = await axios.post('http://localhost:3001/users', { account, signed })

      const { token } = res.data
      localStorage.setItem('token', token)
    },
    sign (account) {
      return web3.eth.sign(web3.utils.sha3('test'), account)
    }
  }
}
</script>

<style lang="css">
</style>

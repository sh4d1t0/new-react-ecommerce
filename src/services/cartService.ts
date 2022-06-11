import Api from './Api'

export default {
  async getUserCart() {
    const response = await Api().get('carts/user/2') // replace last id with user id
    return response.data
  },
}

import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('recents', {
      params: params
    })
  },
  post (recent) {
    return Api().post('recents', recent)
  }
}
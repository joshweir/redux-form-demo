import { apiEndpoint } from '../../config/app'
import createRestApiClient from '../../utils/createRestApiClient'

export default () => {
  const client = createRestApiClient().withConfig({
    baseURL: apiEndpoint,
    withCredentials: true
  })
  return {
    getFormData: ({ slug, sessionId }) =>
      client.request({
        method: 'GET',
        url: `/forms/${slug}/${sessionId}`
      })
  }
}

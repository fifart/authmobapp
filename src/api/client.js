import { create } from 'apisauce'

const apiClient = create({
    baseURL: '172.20.10.2:3001'
})

export default apiClient
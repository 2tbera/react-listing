import { api } from './index'

export const getCart = () => {
  return  api.get('cart')
}

export const putCart = (data: any) => {
  return  api.put('cart', data)
}

export const butCartItems = () => {
  return  api.post('cart', {status: true})
}

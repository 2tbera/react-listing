import { api } from './index'

export const getItemList = (data: any) => {
  return api.get<{ data: any[]}>('/passenger', {params: data}).then(res => res.data);
}



import Api from '@config/Api';

export const fetchAll = async (payload) => {
  return Api.get(`/public/posts/findAll`).catch((err) => err.response);
};

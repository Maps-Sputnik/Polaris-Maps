import Api from '@config/Api';

export const getAccessToken = async () => {
  return Api.get('/private/map/accessToken');
};

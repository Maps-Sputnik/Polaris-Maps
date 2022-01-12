import Api from '@config/Api';

export const makeFriend = async (payload) => {
  return Api.post(`/api/public/friends/create`, {
    senderId: payload.senderId,
    receiverId: payload.receiverId,
  }).catch((err) => err.response);
};

import Api from '@config/Api';

export const sendFriendRequest = async (payload) => {
  return Api.post(`/public/friends/create`, {
    senderId: payload.senderId,
    receiverId: payload.receiverId,
  }).catch((err) => err.response);
};

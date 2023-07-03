let arrayOnlineUsers = [];
const addUserOnline = (id, socketId) => {
  const data = removeUserOnline(parseInt(id));
  !arrayOnlineUsers.some((id) => id.id === id) &&
    arrayOnlineUsers.push({ id: id, socketId: socketId });
};
const removeUserOnline = (socket) => {
  arrayOnlineUsers = arrayOnlineUsers.filter((e) => e.socketId !== socket.id);
};
const findUsers = (receiverId) => {
  return arrayOnlineUsers.find((data) => data.id === parseInt(receiverId));
};

export { addUserOnline, removeUserOnline, findUsers };
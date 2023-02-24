import {
  sequelize,
  User as userModel,
  Post as postModel,
  Comment as commentModel,
  CommentReply as commentReplyModel,
  Chat as chatModel,
  Businesses as businessesModel,
  UserFollow as userFollowModel,
  Cart as cartModel,
  ShopProduct as shopProductModel,
  Catagory as catagoryModel,
  VirtualItem as virtualItemModel,
  Storys as storysModel,
  ListChat as listChatModel
} from "../../models/index.js";

import {
  businesses,
  cart,
  catagory,
  chat,
  comment,
  commentReply,
  post,
  product,
  storys,
  user,
  userFollow,
  virtualItem,
} from "./json/index.js";

const buildSeeds = async () => {
  await sequelize.sync({ force: true });
  await userModel.bulkCreate(user);
  await postModel.bulkCreate(post);
  await commentModel.bulkCreate(comment);
  await commentReplyModel.bulkCreate(commentReply);
  await chatModel.bulkCreate(chat);
  await businessesModel.bulkCreate(businesses);
  await cartModel.bulkCreate(cart);
  await shopProductModel.bulkCreate(product);
  await catagoryModel.bulkCreate(catagory);
  await virtualItemModel.bulkCreate(virtualItem);
  await userFollowModel.bulkCreate(userFollow);
  await storysModel.bulkCreate(storys);
};

if (
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "production"
) {
  buildSeeds();
}

export default buildSeeds;

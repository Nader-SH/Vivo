import sequelize from "../database/config/connection.js";
import User from "./user.js";
import Post from "./post.js";
import Comment from "./comment.js";
import CommentReply from "./commentReply.js";
import Chat from "./chat.js";
import Businesses from "./businesses.js";
import UserFollow from "./userFollow.js";
import Cart from "./cart.js";
import ShopProduct from "./shopProduct.js";
import Catagory from "./categorie.js";
import VirtualItem from "./virtualItem.js";
import Storys from "./storys.js";
// Relations Here
// ! post , comment and comment reply
User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(CommentReply, { foreignKey: "user_id" });
CommentReply.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

Post.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(Post, { foreignKey: "post_id" });

Comment.hasMany(CommentReply, { foreignKey: "comment_id" });
CommentReply.belongsTo(Comment, { foreignKey: "comment_id" });
// !
// ! story and user
User.hasMany(Storys, { foreignKey: "user_id" });
Storys.belongsTo(User, { foreignKey: "user_id" });
// !
// ?
// ! user & chat
User.hasMany(Chat, { foreignKey: "user_id" });
Chat.belongsTo(User, { foreignKey: "user_id" });
// !
// ! following and  user
UserFollow.belongsToMany(User, { through: "user_id" });
User.belongsToMany(UserFollow, { through: "user_id" });
// ! user and businesses
User.hasMany(Businesses, { foreignKey: "user_id" });
Businesses.belongsTo(User, { foreignKey: "user_id" });
// !
//! businesses and products
Businesses.hasMany(ShopProduct, { foreignKey: "businesses_id" });
ShopProduct.belongsTo(Businesses, { foreignKey: "businesses_id" });
//!
// !  products  and  Catagory
ShopProduct.hasOne(Catagory, { foreignKey: "product_id" });
Catagory.belongsTo(ShopProduct, { foreignKey: "catagory_id" });
//!
//!  user and cart
User.hasMany(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });
// !
// ! cart and products
Cart.hasMany(ShopProduct, { foreignKey: "id" });
ShopProduct.belongsTo(Cart, { foreignKey: "product_id" });
// !
// ! user and VirtualItem
User.hasMany(VirtualItem, { foreignKey: "user_id" });
VirtualItem.belongsTo(User, { foreignKey: "user_id" });
// !
//!  VirtualItem and Catagory
VirtualItem.hasOne(Catagory, { foreignKey: "categorie_id" });
Catagory.belongsTo(VirtualItem, { foreignKey: "categorie_id" });
//!
//!  Businesses and VirtualItem
Businesses.hasMany(VirtualItem, { foreignKey: "businesses_id" });
VirtualItem.belongsTo(Businesses, { foreignKey: "businesses_id" });
//!
export {
  User,
  Post,
  Comment,
  CommentReply,
  Chat,
  Businesses,
  UserFollow,
  Cart,
  ShopProduct,
  Catagory,
  VirtualItem,
  Storys,
  sequelize,
};

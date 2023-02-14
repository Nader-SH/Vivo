import { Storys } from '../../models/index.js';

const addStorysImageQuery = async (data,id) =>
Storys.create({
    ...data,
    user_id : id,
  });

export default addStorysImageQuery;
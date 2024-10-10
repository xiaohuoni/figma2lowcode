// 生成随机id
const createId = (prefix?: string, id?: string, slength = 12) => {
  let uid = id;
  if (!uid) {
    uid = `${Math.random()}`.slice(slength);
  }
  return prefix ? `${prefix}_${uid}` : uid;
};

export default createId;

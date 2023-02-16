const db = require('@cyclic.sh/dynamodb')

// Create or Update an item /:col/:key
const upd1 = async (req, res) => {
  console.log(req.body);
  const col = req.params.col;
  const key = req.params.key;
  console.log(`from collection: ${col} delete key: ${key} with params ${JSON.stringify(req.params)}`);
  const item = await db.collection(col).set(key, req.body);
  console.log(JSON.stringify(item, null, 2));
  res.write(JSON.stringify(item, null, 2));
  res.end();
};
 
// Delete an item /:col/:key
const del1 = async (req, res) => {
  const col = req.params.col;
  const key = req.params.key;
  console.log(`from collection: ${col} delete key: ${key} with params ${JSON.stringify(req.params)}`);
  const item = await db.collection(col).delete(key);
  console.log(JSON.stringify(item, null, 2));
  res.write(JSON.stringify(item, null, 2));
  res.end();
};
 
// Get a single item /:col/:key
const get1 = async (req, res) => {
  const col = req.params.col;
  const key = req.params.key;
  console.log(`from collection: ${col} get key: ${key} with params ${JSON.stringify(req.params)}`);
  const item = await db.collection(col).get(key);
  console.log(JSON.stringify(item, null, 2));
  res.write(JSON.stringify(item, null, 2));
  res.end();
};
 
// Get a full listing
const all = async (req, res) => {
  const col = req.params.col;
  console.log(`list collection: ${col} with params: ${JSON.stringify(req.params)}`);
  const items = await db.collection(col).list();
  console.log(JSON.stringify(items, null, 2));
  res.write(JSON.stringify(items, null, 2));
  res.end();
};

const mock1 = async (req, res) => {
const key = 1;
  const p1 = querystring.stringify({
      'uuid' : key
      'name' : 'Дмитрий',
      'course': 'php'
  });
  
const item = await db.collection(col).set(key, p1);
  console.log(JSON.stringify(item, null, 2));
  res.write(JSON.stringify(item, null, 2));
  res.end();
};

module.exports.upd1 = upd1;
module.exports.get1 = get1;
module.exports.del1 = del1;
module.exports.all = all;
module.exports.mk1 = mock1;
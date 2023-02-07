db.produtos.find({}, {
  name: true,
  sold: true,
  _id: false,
}).sort({
  sold: 1,
});
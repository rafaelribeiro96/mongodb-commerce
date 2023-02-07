db.produtos.updateOne(
  { nome: "Big Mac" }, 
  { $currentDate: { ultimaModificacao: { $type: "timestamp" } } },
);

db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { _id: 0, nome: 1 });
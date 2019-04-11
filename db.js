// 配置应用的数据库
// 浏览器 localstorage
const db = new loki('notes', {
  // 自动载入
  autoload: true,
  // 自动载入回调
  autoloadCallback: databaseInitialize,
  // 自动保存
  autosave: true,
  // 自动保存的间隔
  autosaveInterval: 3000
});

function databaseInitialize() {
  const notes = db.getCollection('notes');
  if (notes === null ){
    db.addCollection('notes')
  }
}


function loadCollection(collection){
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection) || db.addCollection(collection);
      resolve(_collection);
    })
  });
}

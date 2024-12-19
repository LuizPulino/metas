let db = null;
async function setupDb(dbName, stores) {
    db = await idb.openDB(dbName, 1, {
        upgrade(db) {
            log('criar banco da dados ' + dbName);
            stores.forEach(store => {
                if (!db.objectStoreNames.contains(store)) {
                    log('Criar tabela ' + store );
                    db.createObjectStore(store, { autoIncrement: true });
                }
            });
        }
    });
}

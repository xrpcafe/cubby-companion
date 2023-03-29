import { Storage } from '@ionic/storage';

class Vault {
    store: Storage;
    constructor() { 
        this.store = new Storage();
        this.create()
    }

      async create() {
        await this.store.create();
      }

      async get(key: string) {
        return await this.store.get(key);
      }

      async set(key: string, value: string) {
        await this.store.set(key, value);
      }

      async clear() {
        await this.store.clear();
      }
}

export default Vault;
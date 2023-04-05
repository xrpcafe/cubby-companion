import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
class Vault {

      async get(key: string) {
        return await SecureStoragePlugin.get({key: key});
      }

      async set(key: string, value: string) {
        await SecureStoragePlugin.set({"key": key, "value": value});
      }

      async clear() {
        await SecureStoragePlugin.clear();
      }
}

export default Vault;
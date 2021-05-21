const DB_NAME = 'VA-DATABASE'
const STORAGE_NAME = 'VA-STORAGE'
const DB_VERSION = 1
let DB

function logger(err) {
  console.log(err)
}

export default {
  async getDb() {
    return new Promise((resolve, reject) => {
      if (DB) {
        return resolve(DB)
      }
      const request = window.indexedDB.open(DB_NAME, DB_VERSION)
      request.onerror = e => {
        console.log('Error opening db', e)
        reject('Error')
      }
      request.onsuccess = e => {
        DB = e.target.result
        resolve(DB)
      }
      request.onupgradeneeded = e => {
        let db = e.target.result
        db.createObjectStore(STORAGE_NAME)
      }
    })
  },
  async createElement({element, key}) {
    let db = await this.getDb()
    return new Promise(resolve => {
      let trans = db.transaction([STORAGE_NAME], 'readwrite')
      trans.oncomplete = () => {
        resolve()
      }
      let store = trans.objectStore(STORAGE_NAME)
      store.put(element, key)
    })
  },
  async getElement(key) {
    let db = await this.getDb()
    return new Promise(resolve => {
      let trans = db.transaction([STORAGE_NAME], 'readonly')
      let store = trans.objectStore(STORAGE_NAME)

      let req = store.get(key)

      req.onsuccess = (event) => {
        let note = event.target.result

        if (note) {
          trans.oncomplete = () => {
            resolve(note)
          }
        } else {
          console.log('note 1 not found')
        }
      }

      req.onerror = (event) => {
        alert('error getting note 1 ' + event.target.errorCode)
      }
    })
  },
  async deleteElement(key) {
    const db = await this.getDb()
    return new Promise(resolve => {
      const trans = db.transaction([STORAGE_NAME], 'readwrite').objectStore(STORAGE_NAME).delete(key)
      trans.oncomplete = () => {
        resolve()
      }
      trans.onerror = logger
      trans.onsuccess = function () {
        console.log('File delete from DB:', key)
      }
    })
  }
}

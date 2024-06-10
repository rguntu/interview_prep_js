const lruCache = LRUCache(2)
lruCache.setCache({key:"1",val:"1 val"})
lruCache.setCache({key:"2",val:"2 val"})
lruCache.setCache({key:"3",val:"3 val"})
lruCache.setCache({key:"1",val:"1 val"})

console.log(lruCache.getCache("1"))

function LRUCache(size=2) {
    const cache = {}

    function getCache(key) {
        console.log("cache", cache)
        if(cache[key]) {
            cache[key].ts = Date.now()
            return cache[key].val
        }
        return null
    }

    function setCache({key, val}) {
        cache[key] = {val:val,ts:Date.now()}
        const cacheItems = Object.keys(cache);
        if(cacheItems.length > size) {
            let it0 = cacheItems[0]
            for(let i=1; i<size; i++) {
                const it1 = cacheItems[i]
                it0 = it0.ts > it1.ts ? it0 : it1
            }
            delete cache[it0]
        }
    }

    return {
        setCache, getCache
    }

}
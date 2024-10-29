import algoliaSearch from "algoliasearch"

const client = algoliaSearch("7I711M9QVY", "10a24e77626209062a89aba287d18116")
const index = client.initIndex("lendsqr_data",)

const deskIds = ["GWQUSEH1", "JONEBVE1"]
      const invite1 = [{ userId: "5c47ae4ba63c910010724426", name: "Wilburn.Rice", age: 23}, { userId: "5c88eee3228853000f8efde2", name: "Allan.Bechtelar72", age: 49}]
      const invite2 = [{ userId: "5c3e0e94f098eb0010b2852c", name: "Cathrine_Torphy", age: 33}, { userId: "5f91d84b85dec411d19adf1a", name: "Trenton.Kunze", age: 69}]
      const inviteesss = [invite1, invite2]
      const deskIndex = Math.floor(Math.random() * deskIds.length);
      const inviteIndex = Math.floor(Math.random() * inviteesss.length)

const saveToAlgolia = async (data: any) => {
    index.saveObjects(data, { autoGenerateObjectIDIfNotExist: true}).then(({ objectIDs }) => {
        console.log(`Object IDs ${objectIDs}`)
    }).catch(err => {
        console.log('err thrown', err)
    })
}

const fetchData = async () => {
    // do some data fetching from algolia here 
    const hits = (await index.search("")).hits
    console.log(hits)
    return hits
}

export { saveToAlgolia, fetchData }
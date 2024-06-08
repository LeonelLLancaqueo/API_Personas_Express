const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://leo87llanca:27870717leo@cluster0.m5xre3g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri,{
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
});
async function run() {
  try {

    await client.connect();
    await client.db('DBEmpresa').command({ping:1});
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


  } finally {
    // Ensures that the client will close when you finish/error
    
  }
}

run().catch(console.dir);

const database_empresa = client.db('DBEmpresa');

module.exports= database_empresa
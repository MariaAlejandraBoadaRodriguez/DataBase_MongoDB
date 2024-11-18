const { MongoClient } = require("mongodb");

async function createCollections() {
  const uri = "mongodb+srv://alejandrarodriguez2508:<password>@cluster0.auay3.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("champions_league_db");

    // Crear colecciones
    await db.createCollection("players");
    console.log("Colección 'players' creada.");

    await db.createCollection("teams");
    console.log("Colección 'teams' creada.");

    await db.createCollection("coaches");
    console.log("Colección 'coaches' creada.");

    await db.createCollection("matches");
    console.log("Colección 'matches' creada.");

    await db.createCollection("referees");
    console.log("Colección 'referees' creada.");
  } catch (error) {
    console.error("Error al crear las colecciones:", error);
  } finally {
    await client.close();
  }
}

createCollections().catch(console.error);

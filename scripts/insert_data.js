const { MongoClient } = require("mongodb");
const fs = require("fs");

async function insertData() {
  const uri = "mongodb+srv://alejandrarodriguez2508:<password>@cluster0.auay3.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("champions_league_db");

    // Insertar datos en la colección 'players'
    const playersData = JSON.parse(fs.readFileSync("./data/players.json", "utf-8"));
    await db.collection("players").insertMany(playersData);
    console.log("Datos insertados en 'players'.");

    // Insertar datos en la colección 'teams'
    const teamsData = JSON.parse(fs.readFileSync("./data/teams.json", "utf-8"));
    await db.collection("teams").insertMany(teamsData);
    console.log("Datos insertados en 'teams'.");

    // Insertar datos en la colección 'coaches'
    const coachesData = JSON.parse(fs.readFileSync("./data/coaches.json", "utf-8"));
    await db.collection("coaches").insertMany(coachesData);
    console.log("Datos insertados en 'coaches'.");

    // Insertar datos en la colección 'matches'
    const matchesData = JSON.parse(fs.readFileSync("./data/matches.json", "utf-8"));
    await db.collection("matches").insertMany(matchesData);
    console.log("Datos insertados en 'matches'.");

    // Insertar datos en la colección 'referees'
    const refereesData = JSON.parse(fs.readFileSync("./data/referees.json", "utf-8"));
    await db.collection("referees").insertMany(refereesData);
    console.log("Datos insertados en 'referees'.");
  } catch (error) {
    console.error("Error al insertar los datos:", error);
  } finally {
    await client.close();
  }
}

insertData().catch(console.error);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();
const dbCString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbCString,
});
const app = express();
app.use(cors());
app.use(express.json());
const port = 8080;
app.listen(port, () => {
  console.log(`Your server is runnig on port ${port}`);
});
app.get("/", (req, res) => {
  res.json({ Reply: "Root route successfully tested!" });
});
app.post("/messages", async (req, res) => {
  const { username, message, reaction, return_value } = req.body;
  try {
    await db.query(
      `
    INSERT INTO guestbook (Username, message, reaction, return_value)
    VALUES ($1, $2, $3, $4)
    `,
      [username, message, reaction, return_value]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("You have failed, my child", error);
    res.status(500).json({ success: false });
  }
});
app.get("/message-list", async (req, res) => {
  const result = await db.query(`
    SELECT username, message, reaction, return_value FROM guestbook
    `);
  res.json(result.rows);
});
app.get("/count", async (req, res) => {
  const result = await db.query(`
   SELECT COUNT (*) FROM guestbook
    `);
  res.json(result.rows);
});

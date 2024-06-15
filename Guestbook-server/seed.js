import { db } from "./server.js";
db.query(`CREATE TABLE IF NOT EXISTS guestbook (
    id SERIAL PRIMARY KEY,
    Username VARCHAR(255),
    message text,
    reaction text,
    return_value VARCHAR(32)
)`);
db.query(`
    INSERT INTO guestbook (Username, message, reaction, return_value)
    VALUES ('John McDave', 'Lovely place, lots to do, and great for the kids!', '💖', 'yes')
    `);

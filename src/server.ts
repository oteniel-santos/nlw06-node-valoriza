import "reflect-metadata";
import express from 'express';
const app = express();
import "./database"

app.listen(3005, () => console.log('Server is running'));

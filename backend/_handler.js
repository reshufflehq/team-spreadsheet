import express from 'express';

import { update, get, find, Q, remove } from '@reshuffle/db';
import { defaultHandler } from '@reshuffle/server-function';

const app = express();
app.use(express.json());
app.set('json spaces', 2);



app.use(defaultHandler);
export default app;

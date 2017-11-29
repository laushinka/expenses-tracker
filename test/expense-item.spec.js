import test from 'ava';
import request from 'supertest';
import app from '../app';

test("Get list of expenses", async t => {
    const newExpenseItem = {
        name: "Flowers",
        cost: 5,
        category: "Decoration"
    };

    await request(app).post('/expense').send(newExpenseItem);
    const res = await request(app).get('/expense');

    t.is(res.status, 200);
});
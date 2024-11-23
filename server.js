import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan'; // HTTP request logger middleware for node.js
import { nanoid } from 'nanoid';

let jobs = [
  { id: nanoid(), company: 'apple', position: 'front-end' },
  { id: nanoid(), company: 'google', position: 'back-end' },
];

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // invokes the JSON parser for all incoming requests

app.get('/', (req, res) => {
  // means when we hit the root URL, we will get the response
  res.send('Hello World'); // response will be Hello World
});

app.post('/', (req, res) => {
  console.log(req);
  res.json({ message: 'Data received', data: req.body }); // // General status message; the data is stored in req.body
});

// GET ALL JOBS
app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({ jobs });
});

// CREATE JOB
app.post('/api/v1/jobs', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: 'Please provide company and position' });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ jobs }); // 201 status code means the request has been fulfilled and has resulted in one or more new resources being created
});

// GET SINGLE JOB
app.get('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id); // callback function; find the job with the id
  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }
  res.status(200).json({ job }); // 200 status code means the request has succeeded
});

// EDIT JOB
app.patch('/api/v1/jobs/:id', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: 'Please provide company and position' });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ msg: 'job modified', job });
});

// DELETE JOB
app.delete('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `No job with id ${id}` });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;
  res.status(200).json({ msg: 'job deleted', jobs });
});

app.use('*', (req, res) => {
  // if the route is not found; * means everything
  res.status(404).json({ msg: 'not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong' });
});

const port = process.env.PORT || 5100; // if it exists, use the port from the environment variable, otherwise use 5100

app.listen(5100, () => {
  // server will run on port 5100
  console.log(`Server is running on PORT ${port}...`); // message to confirm the server is running
});

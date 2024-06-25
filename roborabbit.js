const fetch = require('node-fetch');

const TASK_ID = 'your_task_id';
const API_KEY = 'your_api_key';

module.exports.checkPrice = function () {
  console.log('Running price checker');
  const data = {
    webhook_url: 'https://c08d-2001-f40-906-b853-39c0-2423-4d9c-9b1.ngrok-free.app/job-done',
  };
  fetch(`https://api.roborabbit.com/v1/tasks/${TASK_ID}/runs`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
  });
};

const axios = require('axios');

const fetchData = async () => {
    await axios('http://localhost:3000/tasks')
    .then((res) => {
        const data = res.data;
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    })
}

const tasks = fetchData();
console.log(tasks);
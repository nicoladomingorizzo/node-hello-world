console.log(chalk.blue('Hello') + ' ' + 'Boolean');

console.log(chalk.bgRed.bold.underline(process.env.SECRET_PASSWORD));
import axios from 'axios';
import chalk from 'chalk';

axios.get('https://lanciweb.github.io/demo/api/pictures/?id=6')
    .then(response => {
        const imgApi = response.data;
        console.log(imgApi)
    })
    .then(() => {
    });

console.log('Hello ' + process.argv[2]);



import { promises as fs } from 'fs'
import path from 'path';

const filesHTML = {
  index:`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
  <title>HTTP NODE API WEB</title>
</head>
<body>
  <div id="root"></div>

  <script type="module" src="./src/pages/home.js"></script>
</body>
</html>`,

  create:`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
  <title>HTTP NODE API WEB</title>
</head>
<body>
  <div id="root"></div>

  <script type="module" src="./src/pages/create.js"></script>
</body>
</html>`,

  edit:`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
  <title>HTTP NODE API WEB</title>
</head>
<body>
  <div id="root"></div>

  <script type="module" src="./src/pages/edit.js"></script>
</body>
</html>`,

  users:`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
  <title>HTTP NODE API WEB</title>
</head>
<body>
  <div id="root"></div>

  <script type="module" src="./src/pages/users.js"></script>
</body>
</html>`,

user:`<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
  <title>HTTP NODE API WEB</title>
</head>
<body>
  <div id="root"></div>

  <script type="module" src="./src/pages/user.js"></script>
</body>
</html>`
}
async function initFiles(log=true) {
  log && console.log('⌛ Generating HTML files...');
  for(let [key, value] of Object.entries(filesHTML)) {
    const pathFile = (new URL(`../../${key}.html`, import.meta.url));
    await fs.writeFile(pathFile, value);
    log && console.log(`✅ ${key}.html created`);
  }
}

export default initFiles;
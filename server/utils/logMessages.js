const chalk = require("chalk");

export const errorLog = chalk.bold.red;
export const successLog = chalk.bold.cyan;
export const linkLog = chalk.bold.yellow;

export const successServerStartup = PORT => successLog(`
<========================================>

  Server Running on ${linkLog(`http://localhost:${PORT}`)}

<========================================>
`);

export const errorServerStartup = err =>
  errorLog(`
<========================================>

  Error Starting Server
  ${err}
  
<========================================>
`);

export const successDBStartup = successLog(`
<========================================>

  Connected to DB
  
<========================================>
`);

export const errorDBStartup = err =>
  errorLog(`
<========================================>

  Unable to connect to the database 🤬:
  -----------
  ${err}
  
<========================================>    
`);

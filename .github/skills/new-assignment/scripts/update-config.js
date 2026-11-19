// Registra uma assignment em config.json.
// Uso: node update-config.js <id> "<title>" "<description>"

const fs = require('fs');
const path = require('path');

const [id, title, description] = process.argv.slice(2);

if (!id || !title || !description) {
  console.error('Uso: node update-config.js <id> "<title>" "<description>"');
  process.exit(1);
}

const root = path.resolve(__dirname, '../../../..');
const configPath = path.join(root, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

if (!fs.existsSync(path.join(root, 'assignments', id, 'README.md'))) {
  console.error(`assignments/${id}/README.md não encontrado.`);
  process.exit(1);
}

if (config.assignments.some(a => a.id === id)) {
  console.error(`A assignment "${id}" já está em config.json.`);
  process.exit(1);
}

config.assignments.push({ id, title, description, path: `assignments/${id}` });
fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
console.log(`Assignment "${id}" registrada em config.json.`);

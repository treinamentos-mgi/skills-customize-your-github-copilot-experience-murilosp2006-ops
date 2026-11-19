// Registra um arquivo como attachment de uma assignment em config.json.
// Uso: node add-attachment.js <id> "<display-name>" <filename> <type>

const fs = require('fs');
const path = require('path');

const [id, name, file, type] = process.argv.slice(2);

if (!id || !name || !file || !type) {
  console.error('Uso: node add-attachment.js <id> "<display-name>" <filename> <type>');
  process.exit(1);
}

const root = path.resolve(__dirname, '../../../..');
const configPath = path.join(root, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const assignment = config.assignments.find(a => a.id === id);
if (!assignment) {
  console.error(`A assignment "${id}" não está em config.json. Registre-a primeiro com update-config.js.`);
  process.exit(1);
}

if (!fs.existsSync(path.join(root, assignment.path, file))) {
  console.error(`${assignment.path}/${file} não encontrado.`);
  process.exit(1);
}

assignment.attachments = assignment.attachments || [];
assignment.attachments.push({ name, file, type });
fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
console.log(`Attachment "${file}" adicionado a "${id}".`);

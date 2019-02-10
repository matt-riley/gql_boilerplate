import fs from 'fs';
import { printSchema } from 'graphql/utilities';
import path from 'path';

import schema from './make_schema';

const outputDir = path.join(__dirname, '../');
const typeSystemFile = path.join(outputDir, '/schema.graphql');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Save user readable type system shorthand of schema
fs.writeFileSync(typeSystemFile, printSchema(schema));
console.log(`Type system generated and written to ${typeSystemFile}`);

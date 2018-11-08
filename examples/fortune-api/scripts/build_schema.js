import fs from "fs";
import path from "path";
import { graphql } from "graphql";
import { introspectionQuery, printSchema } from "graphql/utilities";

import schema from "../src/schema";

const outputDir = path.join(__dirname, "../build/public");
const schemaFile = path.join(outputDir, "/schema.json");
const typeSystemFile = path.join(outputDir, "/schema.graphql");

if (!fs.existsSync(outputDir)){
  fs.mkdirSync(outputDir);
}

// Save user readable type system shorthand of schema
fs.writeFileSync(typeSystemFile, printSchema(schema));
console.log(`Type system generated and written to ${typeSystemFile}`);

// Save JSON of full schema introspection for Babel Relay Plugin to use
(async () => {
  const result = await graphql(schema, introspectionQuery);
  if (result.errors) {
    process.exit(1);
  } else {
    fs.writeFileSync(schemaFile, JSON.stringify(result, null, 2));
    console.log(`Schema file generated and written to ${schemaFile}`);
    process.exit(0);
  }
})();

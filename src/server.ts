import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { parseCSV } from './processData';
import * as path from 'path';
import * as fs from 'fs';

const app = express();
const port = 3000;

// Load Swagger documentation
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Read and parse CSV data from a file
const csvFilePath = path.join(__dirname, 'data.csv');
const csvData = fs.readFileSync(csvFilePath, 'utf-8');
const counties = parseCSV(csvData);

// Define a route to get counties data with optional search parameters
app.get('/counties', (req, res) => {
    let filteredCounties = counties;

    const { countyName, subCountyName, countyCode } = req.query;

    // Filter by county code
    if (countyCode) {
        const code = parseInt(countyCode as string);
        filteredCounties = filteredCounties.filter(county =>
            county.countyCode === code
        );
    }

    // Filter by county name
    if (countyName) {
        filteredCounties = filteredCounties.filter(county =>
            county.countyName.toLowerCase().includes((countyName as string).toLowerCase())
        );
    }

    // Filter by sub-county name
    if (subCountyName) {
        filteredCounties = filteredCounties.filter(county =>
            county.subCounties.some(subCounty =>
                subCounty.subCountyName.toLowerCase().includes((subCountyName as string).toLowerCase())
            )
        );
    }

    res.json(filteredCounties);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

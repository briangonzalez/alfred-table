'use strict';
const alfy = require('alfy');
const fs = require('fs');

const tables = fs.readFileSync('./tables.csv', 'utf8').toString().split("\n");
const sampleIndex = Math.floor(Math.random() * tables.length)
const table = tables[sampleIndex]

alfy.output([
	{
		title: table,
		subtitle: 'Press "Enter" to copy and paste, type again for a new table',
		arg: table
	}
]);

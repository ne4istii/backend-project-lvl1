#!/usr/bin/env node

import { calc } from '..';

console.log('Welcome to the BrainGames!\n What is the result of the expression?\n');
const mathOperator = '*-+';
calc(mathOperator, 1, 100, 3);

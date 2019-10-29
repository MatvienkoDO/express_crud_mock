#!/bin/bash

echo "Delete old compiled code"
rm -r dist

echo "Compile new code"
npx tsc src/main.ts --outDir dist

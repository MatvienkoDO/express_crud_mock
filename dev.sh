#!/bin/bash

npx nodemon \
  --watch src \
  --ext ts \
  --exec "npm run build && npm run start"

#!/usr/bin/env bash
set -e

pnpm build
scp -r dist/* "$TARGET"

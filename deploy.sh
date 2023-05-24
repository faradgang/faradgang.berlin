#!/bin/sh
. .env
scp -r "$SOURCE" "$REMOTE_USER"@"$REMOTE_HOST":"$TARGET"

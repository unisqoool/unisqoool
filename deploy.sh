cat <<'EOF' >~/deploy.sh
#!/usr/bin/env bash
set -e

# ensure we have your node/npm in PATH (if you use nvm or similar)
if [ -f "$HOME/.bashrc" ]; then
  source "$HOME/.bashrc"
fi

cd ~/unisqoool
git pull
npm install
npm run build
pm2 restart 0
EOF

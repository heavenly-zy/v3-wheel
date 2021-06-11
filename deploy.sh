rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:heavenly-zy/v3-wheel-website.git &&
git push -f -u origin main &&
cd -
echo https://silkyheart.moe/v3-wheel-website/index.html#/

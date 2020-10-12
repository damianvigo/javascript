npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git remote add heroku https://git.heroku.com/app-manager-ddv.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open

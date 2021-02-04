# Nodejs Selenium on heroku
based on this answer https://stackoverflow.com/a/60586343/3711660

1. Create heroku app
2. `heroku login`
3. `heroku git:remote -a YOUR-HEROKU-APP-NAME`
4. Run 
```bash
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-chromedriver
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-google-chrome
heroku config:set CHROME_DRIVER_PATH=/app/.chromedriver/bin/chromedriver
heroku config:set CHROME_BINARY_PATH=/app/.apt/opt/google/chrome/chrome
```
5. Login to heroku from your browser and navigate to your app. Go to settings and under buildpacks, add heroku/nodejs
6. 
```shell
git add .
git commit -m "my app"
git push heroku master
```
# Nodejs Selenium on heroku
based on this answer https://stackoverflow.com/a/60586343/3711660

1. `heroku login`
1. 
Run 
```bash
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-chromedriver
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-google-chrome
heroku config:set CHROME_DRIVER_PATH=/app/.chromedriver/bin/chromedriver
heroku config:set CHROME_BINARY_PATH=/app/.apt/opt/google/chrome/chrome
```
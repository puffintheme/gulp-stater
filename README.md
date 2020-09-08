# gulp-stater

## Step 1 : Install node “https://nodejs.org/en/download/“

## Step 2 : Installing gulp

Windows : ```bash $ npm install gulp -g ```
OR
Mac : ```bash $ sudo npm install gulp -g  ```

Explanation :
NPM : Node Pacakage Manager 
npm install gulp: will install gulp 
-g : It is used to install package globally in your system
sudo : It is only used in Mac system as they need permission to install package globally.

## Step 3 : Select Project where you want to integrate Gulp or Create new one with HTML SCSS JS files.

## Step 4: Run ($ npm init)  

<img src="https://github.com/puffintheme/gulp-stater/blob/master/images/terminal.png" width="200" height="200">

It is used to make package.json file.

## Step 5 : Run ($ npm install gulp --save-dev) 

install Gulp into the project. When done you can check package.json file there will be gulp in the end with it’s version.

<img src="https://github.com/puffintheme/gulp-stater/blob/master/images/package.png" width="200" height="200">

And also gulp will be added to node_module folder.

## Step 6 : Folder structure  for (gulpfile.js) 

<img src="https://github.com/puffintheme/gulp-stater/blob/master/images/folderstructure.png" width="200" height="200">

## Step 7 :  Defin variable for Gulp to run

```bash var gulp = require('gulp'); ```

## Step 8 :  gulp npm file for converting scss to css

```bash $ npm install gulp-sass --save-dev ```

Syntex :
```bash
gulp.task('sass', function(){
  return gulp.src('source-files')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('destination'))
});
```

Or if you want to convert multipal scss file to css then

Syntex :
```bash
gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('dist/assets/css/'))
})
```

## Step 9:  watching for change 

Syntex :
```bash gulp.watch('files-to-watch', gulp.series(['tasks', 'to', 'run'])); ```

## Step 10:  Browser Sync 

```bash $ npm install browser-sync --save-dev ```

Run ```bash npm install ``` for live demo.
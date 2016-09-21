# Varitec Solutions
This is the source code for the Varitec Solutions website.

### Recommended IDE Settings
- WebStorm 2016.2.3+
    - Plugins:
        - File Watcher (should be automatically installed)
- node v5.5.0+
- npm v3.3.12+
    - node-sass `npm install node-sass`
        - File Watcher settings (Windows):
            - File Type: `SCSS`
            - Program: `$ProjectFileDir$\node\node_modules\.bin\node-sass.cmd`
            - Argument: `$FileName$ $ProjectFileDir$\css\$FileNameWithoutExtension$.css`
            - Output: `$ProjectFileDir$\css\$FileNameWithoutExtension$.css`
            - Screenshot:
            ![alt tag](https://raw.githubusercontent.com/doppl3r/varitec-website/master/img/filewatcher.png)
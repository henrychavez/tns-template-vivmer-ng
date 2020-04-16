const fs = require("fs");
const path = require("path");

module.exports = function (hookArgs) {
    const appRootFolder = hookArgs.projectDir;
    const toolsDir = path.join(appRootFolder, "tools");
    const vscodeDir = path.join(appRootFolder, ".vscode");
    const srcGitignore = path.join(toolsDir, "dot.gitignore");
    const destGitignore = path.join(appRootFolder, ".gitignore");
    const srcVscodeSettings = path.join(toolsDir, "vscode.settings.json");
    const destVscodeSettings = path.join(vscodeDir, "settings.json");

    try {
        fs.mkdirSync(vscodeDir);
        fs.copyFileSync(srcVscodeSettings, destVscodeSettings);
        fs.copyFileSync(srcGitignore, destGitignore);
    } catch (error) {
        console.log(error);
    } finally {
        try {
            deleteFolderSync(toolsDir);

            const readme = path.join(appRootFolder, "README.md");
            fs.unlinkSync(readme);

            deleteFolderSync(__dirname);
        } catch (error) {
            console.log(error);
        }
    }

    function deleteFolderSync(folderPath) {
        if (fs.statSync(folderPath).isDirectory()) {
            fs.readdirSync(folderPath).forEach((file) => {
                const content = path.join(folderPath, file);
                const contentDirs = fs.statSync(content).isDirectory();

                if (contentDirs) {
                    deleteFolderSync(content);
                } else {
                    fs.unlinkSync(content);
                }
            });

            fs.rmdirSync(folderPath);
        }
    }
};

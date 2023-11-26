import path from "path";
import fs from "fs";

// Error log File: 
const errorsLogFile = path.resolve(__dirname, "../1-assets/logs/error.log");
const activitiesLogFile = path.resolve(__dirname, "../1-assets/logs/activities.log");

// Log error: 
function logError(message: string, err?: any): void {
    const now = new Date();
    let msgToLog = now.toUTCString() + "\n";
    msgToLog+= message + "\n";
    if(typeof err === "string") msgToLog += err + "\n"; // E.g. throw new "Blah..." in some internal library.
    if(err?.stack) msgToLog += `Stack: ${err.stack}\n`;
    msgToLog += "----------------------------------------------------------------------------------------------------\n";
    fs.appendFile(errorsLogFile, msgToLog, () => { }); // Do nothing if fail to log.
}

function logActivity(message: string): void {
    const now = new Date();
    let msgToLog = now.toUTCString() + "\n";
    msgToLog+= message + "\n";
    msgToLog += "----------------------------------------------------------------------------------------------------\n";
    fs.appendFile(activitiesLogFile, msgToLog, () => { }); // Do nothing if fail to log.
}

export default {
    logError,
    logActivity
};





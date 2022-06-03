// let version = 2.6;
// function log() {
//     console.log(`Version: ${version}`);
// }

let version = 2.6;
function log() {
    console.log(`logged`);
}
// module.exports.log = log;
// module.exports.version = version;

module.exports ={
    log: log,
    version: version
};
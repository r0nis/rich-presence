var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    console.log(`Status was set for ya`)
    const d = Math.floor(Date.now() / 1000)
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
timestamps: {
    start: d,
},
details : "Text 1",
state: "Text 2",
assets : {
large_image : "large_image",
small_text: "small_image_text",
small_image: "small_image",
large_text : "large_image_text"
},
buttons : [{label : "Button 1", url : "valid link"},{label : "Button 2", url : "valid link"}]
}
})
})
client.login({ clientId : "applicationID" }).catch(console.error);



'use strict'

const config = require('./config.json');

module.exports = {
	'help': help,
	'anacle': anacle,
	'cube': cube
}

function help(msg) {
	if (msg.content = config.prefix + help) {
		msg.channel.send({embed: {
			color: 0x00FF,
			title: "HELP",
			fields: [{
				name: "Chaine d'Anacle_ YT",
				value: `${config.prefix}anacle`,
				inline: true
			},
			{
				name: "Chaine de Cube_Lime YT",
				value: `${config.prefix}cube`,
				inline: true
			}],
		}});
	 	}
}

function anacle(msg) {
	if (msg.content = config.prefix + "anacle") {
		msg.channel.send({embed: {
			color: 0x00FF,
			title: "Youtube",
			fields: [{
				name: "Anacle_ YT",
				value: "https://www.youtube.com/channel/UCO0gly5_vMI7q-EOmfCC7fg"
			}],
		}});
	 	}
}


function cube(msg) {
	if (msg.content = config.prefix + "cube") {
		msg.channel.send({embed: {
			color: 0x00FF,
			title: "Youtube",
			fields: [{
				name: "Cube_Lime YT",
				value: "https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg"
			}],
		}});
	}
}
'use strict'

const config = require('./config.json');

module.exports = {
	'DMhelp': DMhelp,
	'help': help,
	'anacle': anacle,
	'cube': cube,
	'invite': invite,
	'support': support,
	'helphere': helphere,
}

function DMhelp(msg) {
	if (msg.content = config.prefix + "DMhelp") {
		msg.author.createDM().then(channel => {
		channel.send({embed: {
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
			},
			{
				name: "Invitation",
				value: `${config.prefix}invite`
			},
			{
				name: "Support",
				value: `${config.prefix}support`
			}],
		}});
		}).catch(console.error);

	 }
}

function help(msg) {
	if (msg.content = config.prefix + "help") {
		msg.channel.send({embed: {
			color: 0x00FF,
			title: "Help",
			fields: [{
				name: "Help channel",
				value: `${config.prefix}helphere`,
				inline: true
			},
			{
				name: "Help dm",
				value: `${config.prefix}helpDM (pas opérationnel)`,
				inline: true
			}],
		}})
	}
}


function helphere(msg) {
	if (msg.content = config.prefix + "helphere") {
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
			},
			{
				name: "Invitation",
				value: `${config.prefix}invite`
			},
			{
				name: "Support",
				value: `${config.prefix}support`
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

function invite(msg) {
	if (msg.content = config.prefix + "invite") {
		msg.author.createDM().then(channel => {
			channel.send(`${msg.author} ajoute moi sur ton serveur :wink:: https://discordapp.com/oauth2/authorize?client_id=478167931000193025&scope=bot&permissions=2146958847`);
		}).catch(console.error);
		msg.channel.send(`${msg.author} Vérifier vos messages priver`);
	}
}

function support(msg) {
	if (msg.content = config.prefix + "support") {
		msg.channel.send(`${msg.author} désoler mais le serveur support n'est pas encore disponible :pensive:`);
		msg.channel.send("mais tu peut rejoindre la Team :grinning:: https://discord.gg/pcfYDMK");
	}
}

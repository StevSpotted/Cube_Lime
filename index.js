'use strict';
const Discord = require("discord.js");
const config = require("./config.json");
const tool = require("./tool.js");
const cmds = require("./commands.js");
const prompt = require('prompt');
const colors = require("colors");
prompt.message = "";
prompt.colors = '';

const bot = new Discord.Client();

bot.on('ready',() => {
	console.log(`${bot.user.username} se lance`);
	console.log(`le bot se lance sur ${bot.guilds.size} server`);

	bot.user.setGame(config.prefix + 'help');
});

bot.on('message', msg => {
	if(msg.author.bot || msg.channel.type != 'text')
		return;

	if(!msg.content.startsWith(config.prefix))
		return;
	let cmd =msg.content.split(/\s+/)[0].slice(config.prefix.length).toLowerCase();
	getCmdFunction(cmd)(msg);
	if (msg.content = config.prefix + "helpDM") {
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
				value: `${config.prefix}invite`,
				inline: true
			},
			{
				name: "Support",
				value: `${config.prefix}support`,
				inline: true
			}],
		}});
	  }).catch(console.error);
	  msg.channel.send(`${msg.author} vérifier vos messages priver`);
	}
 });

bot.on('error', (e) => console.log(e));
bot.on('warn', (e) => console.log(e));
//bot.on('debug', (e) => console.log(e));
bot.login(process.env.token);

function getCmdFunction(cmd){
	const COMMANDS = {
		'DMhelp': cmds.DMhelp,
		'anacle': cmds.anacle,
		'cube': cmds.cube,
		'help': cmds.help,
		'invite': cmds.invite,
		'support': cmds.support,
		'helphere': cmds.helphere
	}
	return COMMANDS[cmd] ? COMMANDS[cmd] : () => {};
}

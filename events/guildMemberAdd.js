const Discord = require("discord.js");

module.exports = async(member) => {
	const guild = member.guild;
	const client = member.client;
	const settings = client.getSettings(guild.id);
	//guild.defaultChannel.send(`Please welcome ${member.user.username} to the server!`);
	
	if(settings.welcome == "false") return;

	var channel = client.defaultChannel(guild);
	
	if(settings.channel != "default"){
		if(guild.channels.has(guild.id)){
			channel = guild.channels.get(guild.id);
		} else
		if (guild.channels.find(chan => chan.name === settings.channel)){
			channel = guild.channels.find(chan => chan.name === settings.channel);
		}
	}
	

	
	var embed = new Discord.RichEmbed()
		//.setTitle("Status updated")
		.setColor(0x90FF00)
		.setDescription(`**Hi there, <@${member.user.id}>!** (${member.user.tag})\nWelcome to ${guild.name}! Feel free to introduce yourself; don't be afraid to ask any questions!\nYou may also use ` + "`" + `${settings.prefix}help` + "`" + " to see what I can do for you.\n\nEnjoy your stay!");
	channel.send({embed});
	
	client.logger.log(`${member.user.tag} has joined ${guild.name}.`);
};

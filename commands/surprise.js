const { SlashCommandBuilder, MessageAttachment } = require('discord.js'); 
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('surprise')
		.setDescription('Answers with pong.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('hug')
                .setDescription('A hug? For whom? When?.... Who knows ;)'), 
        ),
	async execute(interaction) {
		await interaction.reply('ihih. Now you just wait...');

        // Select random user to hug
        let members = interaction.guild.members.cache.filter(member => !member.user.bot);
        let randomPer = members.random().user;
        
        console.log(randomPer.username);
        
        // Select a random waiting time (at least a minute)
        var surp_time = Math.floor(Math.random() * 300000) + 60000;
        console.log(surp_time);
        
        setTimeout(() => {
            interaction.channel.send(`${randomPer} **SURPRISE HUG!!**`);
            return interaction.channel.send({ files : [`./assets/hug.png`] });
          }, surp_time);
	},
};
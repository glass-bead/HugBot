const { SlashCommandBuilder } = require('discord.js'); 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug command.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('me')
                .setDescription('Receive a warm hug from the bot.'), 
        ),
	async execute(interaction) {
		await interaction.reply(`A big warm hug to you, ${interaction.user} !!`);
	},
};
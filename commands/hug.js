const { SlashCommandBuilder } = require('discord.js'); 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hug')
		.setDescription('Hug command.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('me')
                .setDescription('Receive a warm hug from the bot.'), 
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('please')
                .setDescription('Ask everyone for a hug.'), 
        ),
	async execute(interaction) {
        var subcommand = interaction.options.getSubcommand();
        if (subcommand == 'me' ) {
            await interaction.reply(`A big warm hug to you, ${interaction.user} !!`);
        }
        else if ( subcommand == 'please') {
            await interaction.reply(`@everyone emergency! ${interaction.user} is asking for a hug!!`);
        }	
	},
};
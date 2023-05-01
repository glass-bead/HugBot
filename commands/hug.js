const { SlashCommandBuilder, EmbedBuilder } = require('discord.js'); 

const quotes = ["A hug a day, keeps the sadness away.", "A hug a day keeps the demons at bay.", "However long a hug lasts, it doesn't last long enough.",
                "We need 4 hugs a day for survival. We need 8 hugs a day for maintenance. We need 12 hugs a day for growth.", "The best medicine in the world is a hug.",
                "A hug is the perfect gift; one size fits all, and nobody minds if you exchange it.", "A hug is a smile with arms and a laugh with a stronger grip.",
                "A hug is a perfect gift. You can exchange it anytime.", "Sometimes it's better to put love into hugs than to put it into words.",
                "Hugs were invented to let people know you love them without having to say anything."];

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
                .setName('user')
                .setDescription('Select someone to give a hug to (includes users and role)')
                .addMentionableOption(option =>
                    option
                        .setName('mentionable')
                        .setDescription('select a user or a role')
                        .setRequired(true)
                    ),
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('please')
                .setDescription('Ask everyone for a hug.'), 
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('quote')
                .setDescription('Get a random hug quote'), 
        ),
	async execute(interaction) {
        var subcommand = interaction.options.getSubcommand();
        if (subcommand === 'me' ) {
            await interaction.reply(`A big warm hug to you, ${interaction.user} !!`);
        }
        else if ( subcommand === 'user') {
            const mention = interaction.options.getMentionable('mentionable');
            await interaction.reply(`${interaction.user} sent a big warm hug to you, ${mention}`);
        }
        else if ( subcommand === 'please') {
            await interaction.reply(`@everyone emergency! ${interaction.user} is asking for a hug!!`);
        }
        else if ( subcommand === 'quote') {
            var quote = quotes[Math.floor(Math.random()*quotes.length)];
            const embed = new EmbedBuilder()
                .setColor("#fda2d9")
                .setDescription('"*'+ quote + '*"')

            await interaction.reply({ embeds: [embed]});
        }	
	},
};
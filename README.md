# HugBot ![GitHub repo size](https://img.shields.io/github/repo-size/glass-bead/HugBot?logo=Github&&style=flat-square) ![GitHub last commit](https://img.shields.io/github/last-commit/glass-bead/HugBot?logo=Github&&style=flat-square)
![](https://github.com/glass-bead/HugBot/blob/main/assets/icon.png?raw=true)

This project is a Discord Bot written in JavaScript that allows users to receive and give out hugs.

## Technologies Used

This bot is built using a variety of technologies, including:

* [Discord.js](https://discord.js.org/): A powerful and flexible library for interacting with the Discord API (^14.9.0).
* [Node.js](https://nodejs.org/en/about): A popular server-side JavaScript runtime.
* [Discord Developer Portal](https://discord.com/developers/applications): a platform that provides tools and resources for developers to create and manage applications that integrate with the Discord platform;

## Installation and Usage

To install the bot, first clone the repository to your local machine. Next, navigate to the project directory and run `npm install` to install all dependencies. Finally, create a `.env` file and add your Discord bot token, client id and server id, as follows:

```bash
TOKEN = the discord bot token goes here
CLIENT_ID = the client id goes here
GUILD_ID = the server id goes here
```

Run the follow to register the commands:
```bash
node register_comands.js
```

Run the discord bot with: 
```bash
node index.js
```

Once the bot is online. Type `/` (slash) in any channel to see a list of available commands. You can use any of the following commands:
* `/hug messages` to receive a warm hug from the bot
* `/hug user *mentionable*` to select someone to give a hug to
* `/hug please` to ask everyone for a hug
* `/hug quote` to get a random hug quote
* .... and others!

*© Glass Bead 2023*

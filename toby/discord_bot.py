import discord
from discord.ext import commands

class Bot:
    def __init__(self, token):
        self.bot = commands.Bot(commands.when_mentioned,intents = discord.Intents.all())
        self.token = token

    async def load_cogs(self):
        await self.bot.load_extension("cogs.minecraft_server")

    async def start(self):
        await self.load_cogs()
        await self.bot.start(self.token)

import os
import asyncio
from discord_bot import Bot

# We don't return because otherwise the bot will die.
def toby_handler(event, context):
	print("We are going to say hi to toby :wave:")

	toby = Bot(os.environ['OAUTH_TOKEN'])
	asyncio.run(toby.start())

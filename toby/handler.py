import asyncio
from discord_bot import Bot

# We don't return because otherwise the bot will die.
def toby_handler(event, context):
  print("We are going to say hi to toby :wave:")

  toby = Bot('<DISCORD TOKEN HERE>')
  asyncio.run(toby.start())

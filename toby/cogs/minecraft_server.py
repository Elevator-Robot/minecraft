from discord.ext import commands

# Cog to hold everything Minecraft Server related.
class MinecraftServer(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command()
    async def restart(self, ctx, server_name):
      # TODO: implement something to trigger lambda.
      print(ctx)
      print(server_name)
      await ctx.send("Hello from MinecraftServer Cog! RESTARTING SERVER")

    @commands.command()
    async def start(self, ctx, server_name):
      # TODO: implement something to trigger lambda.
      print(ctx)
      print(server_name)
      await ctx.send("Hello from MinecraftServer Cog! STARTING SERVER")

    @commands.command()
    async def stop(self, ctx, server_name):
      # TODO: implement something to trigger lambda.
      print(ctx)
      print(server_name)
      await ctx.send("Hello from MinecraftServer Cog! STOPPING SERVER")

async def setup(bot):
    await bot.add_cog(MinecraftServer(bot))

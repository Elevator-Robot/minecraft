import os
from server import Server

def toby_handler(event, context):
  command = event["command"]
  ec2_friendly_name = os.environ["SERVER_NAME"]

  # fun little class with methods to do things to the server.
  server = Server(ec2_friendly_name)

  # switch statment on where to go depending on command
  match command:
    case "on":
      print(f"Command matched with: {command}")
      response = server.on()
      return response

    case "off":
      print(f"Command matched with: {command}")
      response = server.off()
      return response

    case "restart":
      print(f"Command matched with: {command}")
      response = server.restart()
      return response

    case "getID":
      print(f"Command matched with: {command}")
      response = server.getID()
      return response

    case _x:
      print(f"Invalid command of: {command}")
      return {"status": 500, "body": "sorry, but WE BROOOKKEEE"}

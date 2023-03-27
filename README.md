# minecraft

Be sure your enviornment has valid aws creds before you begin.

## Install serverless package
Using the NPM package `serverless` we can test the lambda functionality locally.

```
npm install -g serverless
```

## Testing

###
```
cd toby/
```
```
serverless invoke local -f server_commands -d '{"server_name":"minecraft-server", "command":"<on | off | restart | getID>"}'
```
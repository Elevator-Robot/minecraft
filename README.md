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
serverless invoke local -f toby -d '{<unknown json object that we should probs figure out>}'
```

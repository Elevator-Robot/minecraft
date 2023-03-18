import json
import boto3

def hello(event, context):
    # ec2_resource = boto3.resource('ec2')
    # friendlyName = 
    print(json.dumps(event))
    id = lookupID('foobar')
    ## Figure out how to get ec2 instance ID
    # response = ec2_resource.stop_instances(
    #     InstanceIds=[id]
    # )

    body = {
        "message": "i am ID: %f " % (id) ,
        "input": event,
    }

    return {"statusCode": 200, "body": json.dumps(body)}

def hello2(event, context):
    body = {
        "message": "Go Serverless v3.0! Your function executed successfully! FUCK YOUUUU?",
        "input": event,
    }

    return {"statusCode": 200, "body": json.dumps(body)}

def lookupID(friendlyName):
    ec2_resource = boto3.resource('ec2')

    response = ec2_resource.describe_instances(
        Filters=[
            {
                'Name': 'minecraft-server'
            },
        ]
    )

    return response

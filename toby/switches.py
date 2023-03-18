import boto3

def off(event, context):
    client = boto3.client('ec2')
    friendlyName = event["server-name"]

    id = lookupID(friendlyName)

    # Figure out how to get ec2 instance ID
    response = client.stop_instances(
        InstanceIds=[id]
    )

    return {"statusCode": 200, "body": response}

def on(event, context):
    client = boto3.client('ec2')
    friendlyName = event["server-name"]

    # grab ec2 instance id based off friendly name
    id = lookupID(friendlyName)

    response = client.start_instances(
        InstanceIds=[id]
    )

    return {"statusCode": 200, "body": response}

def lookupID(friendlyName):
    client = boto3.client('ec2')

    response = client.describe_instances(
        Filters=[
            {
                'Name': 'tag:Name',
                'Values': [friendlyName]
            },
        ]
    )

    return response["Reservations"][0]["Instances"][0]["InstanceId"]

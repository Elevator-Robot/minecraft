import boto3

class Server:
    def __init__(self, friendly_name):
        self.friendly_name = friendly_name
        self.client = boto3.client('ec2')

    def _lookupID(self):
        print(f"Looking up EC2 instace ID based off friendly_name: {self.friendly_name}")

        # get instance ID
        response = self.client.describe_instances(
            Filters=[
                {
                    'Name': 'tag:Name',
                    'Values': [self.friendly_name]
                },
            ]
        )

        status_code = response['ResponseMetadata']['HTTPStatusCode']
        id = response["Reservations"][0]["Instances"][0]["InstanceId"]

        return { "status_code": status_code, "body": id }

    def on(self):
        # grab ec2 instance id based off friendly name
        id = self._lookupID()

        print(f"Turning on EC2 instace: {self.friendly_name}")

        # start instance
        response = self.client.start_instances(
            InstanceIds=[id["body"]],
            DryRun=True
        )

        status_code = response['ResponseMetadata']['HTTPStatusCode']
        return { "status_code": status_code, "body": response }

    def off(self):
        # grab ec2 instance id based off friendly name
        id = self._lookupID()

        print(f"Turning off EC2 instace: {self.friendly_name}")

        # stop instance
        response = self.client.stop_instances(
            InstanceIds=[id["body"]],
            DryRun=True
        )

        status_code = response['ResponseMetadata']['HTTPStatusCode']
        return { "status_code": status_code, "body": response }

    def restart(self):
        # grab ec2 instance id based off friendly name
        id = self._lookupID()

        print(f"Restarting EC2 instace: {self.friendly_name}")

        # reboot instance
        response = self.client.reboot_instances(
            InstanceIds=[id["body"]],
            DryRun=True
        )

        status_code = response['ResponseMetadata']['HTTPStatusCode']
        return { "status_code": status_code, "body": response }

    def getID(self):
        response = self._lookupID()
        status_code = response["status_code"]

        return { "status_code": status_code, "body": response["body"] }

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

        return response["Reservations"][0]["Instances"][0]["InstanceId"]

    def on(self):
        # grab ec2 instance id based off friendly name
        id = self._lookupID()

        print(f"Turning on EC2 instace: {self.friendly_name}")

        # start instance
        response = self.client.start_instances(
            InstanceIds=[id],
            DryRun=True
        )

        return {"statusCode": 200, "body": response}

    def off(self):
        # grab ec2 instance id based off friendly name
        id = self._lookupID()

        print(f"Turning off EC2 instace: {self.friendly_name}")

        # stop instance
        response = self.client.stop_instances(
            InstanceIds=[id],
            DryRun=True
        )

        return {"statusCode": 200, "body": response}

    def restart(self):
        # grab ec2 instance id based off friendly name
        id = self._lookupID()

        print(f"Restarting EC2 instace: {self.friendly_name}")

        # reboot instance
        response = self.client.reboot_instances(
            InstanceIds=[id],
            DryRun=True
        )
        return {"statusCode": 200, "body": response}

    def getID(self):
        id = self._lookupID()
        return {"statusCode": 200, "body": id}

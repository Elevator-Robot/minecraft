import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class ServerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create a minecraft server
    const vpc = new ec2.Vpc(this, 'VPC', {
      cidr: '10.0.0.0/16',
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'ingress',
          subnetType: ec2.SubnetType.PUBLIC,
        },
        {
          cidrMask: 24,
          name: 'application',
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
        },
      ],
    });

    const minecraftServer = new ec2.Instance(this, 'MinecraftServer', {
      instanceName: 'minecraft-server',
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestAmazonLinux(),
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      userData: ec2.UserData.forLinux({shebang: '#!/bin/bash'}),
      propagateTagsToVolumeOnCreation: true,
      
    });
    minecraftServer.addUserData('wget https://piston-data.mojang.com/v1/objects/8f3112a1049751cc472ec13e397eade5336ca7ae/server.jar');
    minecraftServer.addUserData('java -Xmx1024M -Xms1024M -jar server.jar nogui');

    new cdk.Tag('Objective', 'MineCraft Server', {applyToLaunchedInstances: true, includeResourceTypes: ['AWS::EC2::Instance']});

    minecraftServer.connections.allowFromAnyIpv4(ec2.Port.tcp(25565));

    new cdk.CfnOutput(this, 'MinecraftServerIP', {
      value: minecraftServer.instancePublicIp,
    });

    new cdk.CfnOutput(this, 'MinecraftServerDNS', {
      value: minecraftServer.instancePublicDnsName,
    });

  }
}

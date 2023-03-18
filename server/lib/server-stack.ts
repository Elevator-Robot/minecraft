import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';

import { ServerProperties } from './server-properties'

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

    // create ubuntu image
    const ami = new ec2.GenericLinuxImage({
      'us-east-1': 'ami-0557a15b87f6559cf',
    });

    const minecraftServer = new ec2.Instance(this, 'MinecraftServer', {
      instanceName: 'minecraft-server',
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.SMALL),
      machineImage: ami,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PUBLIC,
      },
      userData: ec2.UserData.forLinux({shebang: '#!/bin/bash'}),
      propagateTagsToVolumeOnCreation: true,
    });
    minecraftServer.addUserData('wget https://piston-data.mojang.com/v1/objects/8f3112a1049751cc472ec13e397eade5336ca7ae/server.jar');
    minecraftServer.addUserData('sudo apt-get update');
    minecraftServer.addUserData('sudo apt-get install -y openjdk-19-jdk');
    minecraftServer.addUserData('sudo java -Xmx1024M -Xms1024M -jar server.jar nogui');

    minecraftServer.role.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonSSMManagedInstanceCore'));

    new cdk.Tag('Objective', 'MineCraft Server', {applyToLaunchedInstances: true, includeResourceTypes: ['AWS::EC2::Instance']});

    minecraftServer.connections.allowFromAnyIpv4(ec2.Port.tcp(25565));

    new cdk.CfnOutput(this, 'MinecraftServerIP', {
      value: minecraftServer.instancePublicIp,
    });

    new cdk.CfnOutput(this, 'MinecraftServerDNS', {
      value: minecraftServer.instancePublicDnsName,
    });

    new cdk.CfnOutput(this, 'MinecraftServerID', {
      value: minecraftServer.instanceId,
    });

    new ServerProperties(this, 'ServerProperties', {
      allowFlight: true,
      allowNether: true,
      difficulty: 'hard',
      enableCommandBlock: true,
      enableQuery: true,
      enableRcon: true,
      enableStatus: true,
      forceGamemode: true,
      gamemode: 'survival',
      generatorSettings: '',
      hardcore: false,
      levelName: 'world',
      levelSeed: '',
      levelType: 'default',
      maxChainedNeighborUpdates: 1000000,
      maxPlayers: 20,
      maxTickTime: 60000,
      maxWorldSize: 29999984,
      motd: 'A Minecraft Server',
      networkCompressionThreshold: 256,
      onlineMode: true,
      opPermissionLevel: 4,
      playerIdleTimeout: 0,
      pvp: true,
      queryPort: 25565,
      rconPassword: 'minecraft',
      rconPort: 25575,
      resourcePack: '',
      resourcePackSha1: '',
      serverIp: '',
      serverPort: 25565,
      spawnAnimals: true,
      spawnMonsters: true,
      spawnNpcs: true,
      spawnProtection: 16,
      useNativeTransport: true,
      viewDistance: 10,
      whiteList: false,
    })


  }
}

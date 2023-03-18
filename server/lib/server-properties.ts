import { Construct } from 'constructs';
import * as ssm from 'aws-cdk-lib/aws-ssm';

interface SeverPropertiesProps {
  allowFlight: boolean
  allowNether: boolean
  broadcastConsoleToOps: string
  broadcastRconToOps: string
  difficulty: string
  enableCommandBlock: boolean
  enableJmxMonitoring: string
  enableQuery: boolean
  enableRcon: boolean
  enableStatus: boolean
  enforceSecureProfile: string
  enforceWhitelist: string
  entityBroadcastRangePercentage: string
  forceGamemode: boolean
  functionPermissionLevel: string
  gamemode: string
  generateStructures: string
  generatorSettings: string
  hardcore: boolean
  hideOnlinePlayers: string
  initialDisabledPacks: string
  initialEnabledPacks: string
  levelName: string
  levelSeed: string
  levelType: string
  maxChainedNeighborUpdates: number
  maxPlayers: number
  maxTickTime: number
  maxWorldSize: number
  motd: string
  networkCompressionThreshold: number
  onlineMode: boolean
  opPermissionLevel: number
  playerIdleTimeout: number
  preventProxyConnections: string
  pvp: boolean
  queryPort: number
  rateLimit: string
  rconPassword: string
  rconPort: number
  requireResourcePack: string
  resourcePack: string
  resourcePackPrompt: string
  resourcePackSha1: string
  serverIp: string
  serverPort: number
  simulationDistance: string
  spawnAnimals: boolean
  spawnMonsters: boolean
  spawnNpcs: boolean
  spawnProtection: number
  syncChunkWrites: string
  textFilteringConfig: string
  useNativeTransport: boolean
  viewDistance: number
  whiteList: boolean
}

export class ServerProperties extends Construct {
  constructor(scope: Construct, id: string, props: SeverPropertiesProps) {
    super(scope, id);

    new ssm.StringParameter(this, 'allowFlight', {
      parameterName: '/minecraft/allowFlight',
      stringValue: `${props.allowFlight}`,
    });

    new ssm.StringParameter(this, 'allowNether', {
      parameterName: '/minecraft/allowNether',
      stringValue: `${props.allowNether}`,
    });

    new ssm.StringParameter(this, 'broadcastConsoleToOps', {
      parameterName: '/minecraft/broadcastConsoleToOps',
      stringValue: props.broadcastConsoleToOps,
    });

    new ssm.StringParameter(this, 'broadcastRconToOps', {
      parameterName: '/minecraft/broadcastRconToOps',
      stringValue: props.broadcastRconToOps,
    });

    new ssm.StringParameter(this, 'difficulty', {
      parameterName: '/minecraft/difficulty',
      stringValue: props.difficulty,
    });

    new ssm.StringParameter(this, 'enableCommandBlock', {
      parameterName: '/minecraft/enableCommandBlock',
      stringValue: `${props.enableCommandBlock}`,
    });

    new ssm.StringParameter(this, 'enableJmxMonitoring', {
      parameterName: '/minecraft/enableJmxMonitoring',
      stringValue: props.enableJmxMonitoring,
    });

    new ssm.StringParameter(this, 'enableQuery', {
      parameterName: '/minecraft/enableQuery',
      stringValue: `${props.enableQuery}`,
    });

    new ssm.StringParameter(this, 'enableRcon', {
      parameterName: '/minecraft/enableRcon',
      stringValue: `${props.enableRcon}`,
    });

    new ssm.StringParameter(this, 'enableStatus', {
      parameterName: '/minecraft/enableStatus',
      stringValue: `${props.enableStatus}`,
    });

    new ssm.StringParameter(this, 'enforceSecureProfile', {
      parameterName: '/minecraft/enforceSecureProfile',
      stringValue: props.enforceSecureProfile,
    });

    new ssm.StringParameter(this, 'enforceWhitelist', {
      parameterName: '/minecraft/enforceWhitelist',
      stringValue: props.enforceWhitelist,
    });

    new ssm.StringParameter(this, 'entityBroadcastRangePercentage', {
      parameterName: '/minecraft/entityBroadcastRangePercentage',
      stringValue: props.entityBroadcastRangePercentage,
    });

    new ssm.StringParameter(this, 'forceGamemode', {
      parameterName: '/minecraft/forceGamemode',
      stringValue: `${props.forceGamemode}`,
    });

    new ssm.StringParameter(this, 'functionPermissionLevel', {
      parameterName: '/minecraft/functionPermissionLevel',
      stringValue: props.functionPermissionLevel,
    });

    new ssm.StringParameter(this, 'gamemodeSurvival', {
      parameterName: '/minecraft/gamemodeSurvival',
      stringValue: props.gamemodeSurvival,
    });

    new ssm.StringParameter(this, 'generateStructures', {
      parameterName: '/minecraft/generateStructures',
      stringValue: props.generateStructures,
    });

    new ssm.StringParameter(this, 'generatorSettings', {
      parameterName: '/minecraft/generatorSettings',
      stringValue: props.generatorSettings,
    });

    new ssm.StringParameter(this, 'hardcore', {
      parameterName: '/minecraft/hardcore',
      stringValue: props.hardcore,
    });

    new ssm.StringParameter(this, 'hideOnlinePlayers', {
      parameterName: '/minecraft/hideOnlinePlayers',
      stringValue: props.hideOnlinePlayers,
    });

    new ssm.StringParameter(this, 'initialDisabledPacks', {
      parameterName: '/minecraft/initialDisabledPacks',
      stringValue: props.initialDisabledPacks,
    });

    new ssm.StringParameter(this, 'initialEnabledPacks', {
      parameterName: '/minecraft/initialEnabledPacks',
      stringValue: props.initialEnabledPacks,
    });

    new ssm.StringParameter(this, 'levelName', {
      parameterName: '/minecraft/levelName',
      stringValue: props.levelName,
    });

    new ssm.StringParameter(this, 'levelSeed', {
      parameterName: '/minecraft/levelSeed',
      stringValue: props.levelSeed,
    });

    new ssm.StringParameter(this, 'levelType', {
      parameterName: '/minecraft/levelType',
      stringValue: props.levelType,
    });

    new ssm.StringParameter(this, 'maxChainedNeighborUpdates', {
      parameterName: '/minecraft/maxChainedNeighborUpdates',
      stringValue: props.maxChainedNeighborUpdates,
    });

    new ssm.StringParameter(this, 'maxPlayers', {
      parameterName: '/minecraft/maxPlayers',
      stringValue: `${props.maxPlayers}`,
    });

    new ssm.StringParameter(this, 'maxTickTime', {
      parameterName: '/minecraft/maxTickTime',
      stringValue: `${props.maxTickTime}`,
    });

    new ssm.StringParameter(this, 'maxWorldSize', {
      parameterName: '/minecraft/maxWorldSize',
      stringValue: `${props.maxWorldSize}`,
    });

    new ssm.StringParameter(this, 'motd', {
      parameterName: '/minecraft/motd',
      stringValue: props.motd,
    });

    new ssm.StringParameter(this, 'networkCompressionThreshold', {
      parameterName: '/minecraft/networkCompressionThreshold',
      stringValue: `${props.networkCompressionThreshold}`,
    });

    new ssm.StringParameter(this, 'onlineMode', {
      parameterName: '/minecraft/onlineMode',
      stringValue: `${props.onlineMode}`,
    });

    new ssm.StringParameter(this, 'opPermissionLevel', {
      parameterName: '/minecraft/opPermissionLevel',
      stringValue: `${props.opPermissionLevel}`,
    });

    new ssm.StringParameter(this, 'playerIdleTimeout', {
      parameterName: '/minecraft/playerIdleTimeout',
      stringValue: `${props.playerIdleTimeout}`,
    });

    new ssm.StringParameter(this, 'preventProxyConnections', {
      parameterName: '/minecraft/preventProxyConnections',
      stringValue: props.preventProxyConnections,
    });

    new ssm.StringParameter(this, 'pvp', {
      parameterName: '/minecraft/pvp',
      stringValue: `${props.pvp}`,
    });

    new ssm.StringParameter(this, 'queryPort', {
      parameterName: '/minecraft/queryPort',  
      stringValue: `${props.queryPort}`,
    });

    new ssm.StringParameter(this, 'rconPassword', {
      parameterName: '/minecraft/rconPassword',
      stringValue: props.rconPassword,
    });

    new ssm.StringParameter(this, 'rconPort', {
      parameterName: '/minecraft/rconPort',
      stringValue: `${props.rconPort}`,
    });

    new ssm.StringParameter(this, 'resourcePack', {
      parameterName: '/minecraft/resourcePack',
      stringValue: props.resourcePack,
    });

    new ssm.StringParameter(this, 'resourcePackPrompt', {
      parameterName: '/minecraft/resourcePackHash',
      stringValue: props.resourcePackPrompt,
    });

    new ssm.StringParameter(this, 'resourcePackSha1', {
      parameterName: '/minecraft/resourcePackSha1',
      stringValue: props.resourcePackSha1,
    });

    new ssm.StringParameter(this, 'serverIp', {
      parameterName: '/minecraft/serverIp',
      stringValue: props.serverIp,
    });

    new ssm.StringParameter(this, 'serverPort', {
      parameterName: '/minecraft/serverPort',
      stringValue: `${props.serverPort}`,
    });

    new ssm.StringParameter(this, 'simulationDistance', {
      parameterName: '/minecraft/snooperEnabled',
      stringValue: props.simulationDistance,
    });

    new ssm.StringParameter(this, 'spawnAnimals', {
      parameterName: '/minecraft/spawnAnimals',
      stringValue: `${props.spawnAnimals}`,
    });

    new ssm.StringParameter(this, 'spawnMonsters', {
      parameterName: '/minecraft/spawnMonsters',
      stringValue: `${props.spawnMonsters}`,
    });

    new ssm.StringParameter(this, 'spawnNpcs', {
      parameterName: '/minecraft/spawnNpcs',
      stringValue: `${props.spawnNpcs}`,
    });

    new ssm.StringParameter(this, 'spawnProtection', {
      parameterName: '/minecraft/spawnProtection',
      stringValue: `${props.spawnProtection}`,
    });

    new ssm.StringParameter(this, 'syncChunkWrites', {
      parameterName: '/minecraft/snooperEnabled',
      stringValue: props.syncChunkWrites,
    });

    new ssm.StringParameter(this, 'textFilteringConfig', {
      parameterName: '/minecraft/textFilteringConfig',
      stringValue: props.textFilteringConfig,
    });

    new ssm.StringParameter(this, 'useNativeTransport', {
      parameterName: '/minecraft/useNativeTransport',
      stringValue: `${props.useNativeTransport}`,
    });

    new ssm.StringParameter(this, 'viewDistance', {
      parameterName: '/minecraft/viewDistance',
      stringValue: `${props.viewDistance}`,
    });

    new ssm.StringParameter(this, 'whiteList', {
      parameterName: '/minecraft/whiteList',
      stringValue: `${props.whiteList}`,
    });


  }
}
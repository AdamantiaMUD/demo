/* eslint-disable no-process-env */
import commander from 'commander';

import {
    BundleManager,
    Config,
    GameState,
    Logger,
    /* eslint-disable-next-line import/named */
    FnUtils,
} from '@adamantiamud/adamantia-core/build/lib';

import serverConfig from './adamantia.json';

/*
 * Set debug variable and encoding.
 * 'net' by default to help find possible server errors.
 */
process.env.NODE_DEBUG = 'net';
process.stdin.setEncoding('utf8');

/* It's over 9000! */
const DEFAULT_PORT = 9001;

const init = async (): Promise<void> => {
    const config = new Config();

    config.load(serverConfig);

    // cmdline options
    commander
        .option(
            '-p, --port [portNumber]',
            `Port to host the server [${DEFAULT_PORT}]`,
            String(config.get<number>('port', DEFAULT_PORT))
        )
        .option('-v, --verbose', 'Verbose console logging.', true)
        .parse(process.argv);

    const logfile = config.get<string>('logfile');

    if (FnUtils.hasValue(logfile)) {
        Logger.setFileLogging(`${__dirname}/log/${logfile}`);
    }

    // Set logging level based on CLI option or environment variable.
    const logLevel = commander.verbose
        ? 'verbose'
        : process.env.LOG_LEVEL ?? config.get('logLevel', 'debug');

    Logger.setLevel(logLevel);

    config.set('bundlesPath', `${__dirname}/bundles`);
    config.set('rootPath', __dirname);

    const dataPath = config.get<string>('dataPath');

    config.set('dataPath', dataPath.replace('[ROOT]', __dirname));

    const state: GameState = new GameState(config);

    Logger.log('START - Initializing mud');

    const manager = new BundleManager(state);

    await manager.loadBundles();

    Logger.log('START - Starting server');

    state.startServer(commander);
};

/* eslint-disable-next-line no-void */
void init();

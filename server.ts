import commander from 'commander';
import fs from 'fs';
import semver from 'semver';

import pkg from './package.json';

if (!semver.satisfies(process.version, pkg.engines.node)) {
    /* eslint-disable-next-line max-len */
    throw new Error(`Adamantia's core engine requires Node version ${pkg.engines.node}, you are currently running Node ${process.version}.`);
}

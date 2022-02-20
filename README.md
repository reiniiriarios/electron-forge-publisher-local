# electron-forge-publisher-local
Local publisher for Electron Forge

## Configuration

Example forge.config.js

```js
module.exports = {
  packagerConfig: {},
  makers: [],
  publishers: [
    {
      name: 'electron-forge-publisher-local',
      config: {
        directory: 'c:/path/to/local/publish/directory',
				releasesFilePrefix: 'https://example.com/prefix/for/releases/' /* optional */
      }
    }
  ],
};
```

## Publishing

Copies all results from make to `/path/to/configured/directory/<version>/` using the version from make results.

Edits `RELEASES`, if present, to have full path and writes to configured directory.

Example edited `RELEASES`:

```
0000000000000000000000000000000000000000 1.0.0/YourApp-1.0.0-full.nupkg 00000000
```

```
0000000000000000000000000000000000000000 https://example.com/prefix/for/releases/1.0.0/YourApp-1.0.0-full.nupkg 00000000
```



Creates `/path/to/configured/directory/latest.yml`. Contents include latest version and list of all make artifacts with base64 encoded sha512 hashes.

Example `latest.yml`:

```yaml
version: 1.0.0
files:
  - url: file:///path/to/configured/directory/1.0.0/RELEASES
    sha512: >-
      base64sha512string==
    name: RELEASES
  - url: file:///path/to/configured/directory/1.0.0/YourApp-1.0.0-full.nupkg
    sha512: >-
      base64sha512string==
    name: YourApp-1.0.0-full.nupkg
  - url: file:///path/to/configured/directory/1.0.0/YourAppSetup.exe
    sha512: >-
      base64sha512string==
    name: YourAppSetup.exe
  - url: file:///path/to/configured/directory/1.0.0/YourApp-win32-x64-1.0.0.zip
    sha512: >-
      base64sha512string==
    name: YourApp-win32-x64-1.0.0.zip
```


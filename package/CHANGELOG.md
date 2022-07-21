# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [2.0.0] - 2022-07-21

### Changed

- Package rewritten to use SvelteKit and Vite instead of Rollup. Packaged with `svelte-kit package`.
- Fully typed.

### Removed

- Removed the `id` prop.

## [1.3.2] - 2022-03-22

### Changed

- Updated `rollup` plugins.

## [1.3.1] - 2022-03-22

### Changed

- Added SvelteKit in readme.
- Updated dependencies.

## [1.3.0] - 2021-03-22

### Changed

- Make rating display (svg stars and text) reactive.
- Throw Error if rating value is not valid (higher than 5, lower than 0, or not a number).
- Refactor code (svelte eslint) a little.
- Readme.

### Fixed

- Fixed typo.

## [1.2.1] - 2020-11-29

### Fixed

- Fix problem with build

## [1.2.0] - 2020-11-29

### Added

- The component creates a unique id, so it is not needed from the user anymore when the component is used many times.

### Deprecated

- The id prop is no longer needed in any case, so it will be removed in the next major version.

## [1.1.1] - 2020-06-19

### Fixed

- Fixed typos in comments.

## [1.1.0] - 2020-06-16

### Added

- `style` config option to pass `css` styles directly to the component.

## [1.0.0] - 2020-06-11

🎊 Initial release.

### Added

- Basic component that shows a star rating when passed a number from 0 to 5.0.
- Config options to set star colors.
- Config option to set star size.
- Config option to choose if show rating text.

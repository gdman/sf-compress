# Development In Progress - more docs, examples and general explanation on the way

# Interfaces may change

sf-compress
================

Library for compressing Salesforce metadata.

[![Version](https://img.shields.io/npm/v/sf-compress.svg)](https://npmjs.org/package/sf-compress)
[![Known Vulnerabilities](https://snyk.io/test/github/gdman/sf-compress/badge.svg)](https://snyk.io/test/github/gdman/sf-compress)
[![Downloads/week](https://img.shields.io/npm/dw/sf-compress.svg)](https://npmjs.org/package/sf-compress)
[![License](https://img.shields.io/npm/l/sf-compress.svg)](https://github.com/gdman/sf-compress/blob/master/package.json)
[![Build and Test](https://github.com/gdman/sf-compress/actions/workflows/build.yml/badge.svg?event=push)](https://github.com/gdman/sf-compress/actions/workflows/build.yml)

# Usage

```javascript
	compressXml(xml, compressionTagsOrOptions);
```

**Example 1: compress all xml**
```javascript
	compressXml(xml);
```

**Option defaults for example 1**
```javascript
	compressXml(xml, {
		indentation: 'space',
		tabSize: 4,
		endOfLine: 'lf',
		maintainDepth: false,
		compressionDepth: 1,
	});
```

**Example 2: compress tag1 and tag2 xml**
```javascript
	compressXml(xml, [ 'tag1', 'tag2' ]);
```

**Option defaults for example 2**
```javascript
	compressXml(xml, {
		indentation: 'space',
		tabSize: 4,
		endOfLine: 'lf',
		maintainDepth: true,
		compressionTags: [ 'tag1', 'tag2' ]
	});
```
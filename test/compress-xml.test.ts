import { compressXml } from '../src/compress-xml';
import * as fs from 'fs';
describe('compressXml', () => {

	it('compressionTags lf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-space-4.xml', 'utf8');
		const compressed = compressXml(original, [ 'layoutItems', 'quickActionListItems' ]);
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-lf-space-4.xml', 'utf8'));
	});

	it('compressionTags lf space 2', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-space-2.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 2,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-lf-space-2.xml', 'utf8'));
	});

	it('compressionTags lf space 8', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-space-8.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 8,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-lf-space-8.xml', 'utf8'));
	});

	it('compressionTags lf tab', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-tab.xml', 'utf8');
		const compressed = compressXml(original, {
			indentation: 'tab',
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-lf-tab.xml', 'utf8'));
	});

	it('compressionTags cr space 4', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-cr-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'cr',
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-cr-space-4.xml', 'utf8'));
	});

	it('compressionTags crlf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-crlf-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'crlf',
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-crlf-space-4.xml', 'utf8'));
	});

	it('recompress compressionTags lf space 4', () => {
		const original = fs.readFileSync('test/resources/expected/layouts/layout-lf-space-4.xml', 'utf8');
		const compressed = compressXml(original, [ 'layoutItems', 'quickActionListItems' ]);
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-lf-space-4.xml', 'utf8'));
	});

	it('recompress compressionTags lf space 2', () => {
		const original = fs.readFileSync('test/resources/expected/layouts/layout-lf-space-2.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 2,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-lf-space-2.xml', 'utf8'));
	});

	it('recompress compressionTags lf space 8', () => {
		const original = fs.readFileSync('test/resources/expected/layouts/layout-lf-space-8.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 8,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-lf-space-8.xml', 'utf8'));
	});

	it('recompress compressionTags lf tab', () => {
		const original = fs.readFileSync('test/resources/expected/layouts/layout-lf-tab.xml', 'utf8');
		const compressed = compressXml(original, {
			indentation: 'tab',
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-lf-tab.xml', 'utf8'));
	});

	it('recompress compressionTags cr space 4', () => {
		const original = fs.readFileSync('test/resources/expected/layouts/layout-cr-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'cr',
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-cr-space-4.xml', 'utf8'));
	});

	it('recompress compressionTags crlf space 4', () => {
		const original = fs.readFileSync('test/resources/expected/layouts/layout-crlf-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'crlf',
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts/layout-crlf-space-4.xml', 'utf8'));
	});

	it('no depth compressionTags lf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			maintainDepth: false,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-no-depth/layout-lf-space-4.xml', 'utf8'));
	});

	it('no depth compressionTags lf space 2', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-space-2.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 2,
			maintainDepth: false,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-no-depth/layout-lf-space-2.xml', 'utf8'));
	});

	it('no depth compressionTags lf space 8', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-space-8.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 8,
			maintainDepth: false,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-no-depth/layout-lf-space-8.xml', 'utf8'));
	});

	it('no depth compressionTags lf tab', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-tab.xml', 'utf8');
		const compressed = compressXml(original, {
			indentation: 'tab',
			maintainDepth: false,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-no-depth/layout-lf-tab.xml', 'utf8'));
	});

	it('no depth compressionTags cr space 4', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-cr-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'cr',
			maintainDepth: false,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-no-depth/layout-cr-space-4.xml', 'utf8'));
	});

	it('no depth compressionTags crlf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-crlf-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'crlf',
			maintainDepth: false,
			compressionTags: [ 'layoutItems', 'quickActionListItems' ]
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-no-depth/layout-crlf-space-4.xml', 'utf8'));
	});

	it('compressDepth lf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-lf-space-4.xml', 'utf8');
		const compressed = compressXml(original);
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles/profile-lf-space-4.xml', 'utf8'));
	});

	it('compressDepth lf space 2', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-lf-space-2.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 2
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles/profile-lf-space-2.xml', 'utf8'));
	});

	it('compressDepth lf space 8', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-lf-space-8.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 8
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles/profile-lf-space-8.xml', 'utf8'));
	});

	it('compressDepth lf tab', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-lf-tab.xml', 'utf8');
		const compressed = compressXml(original, {
			indentation: 'tab'
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles/profile-lf-tab.xml', 'utf8'));
	});

	it('compressDepth cr space 4', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-cr-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'cr'
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles/profile-cr-space-4.xml', 'utf8'));
	});

	it('compressDepth crlf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-crlf-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'crlf'
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles/profile-crlf-space-4.xml', 'utf8'));
	});

	it('maintain depth compressDepth lf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-lf-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			maintainDepth: true
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles-maintain-depth/profile-lf-space-4.xml', 'utf8'));
	});

	it('maintain depth compressDepth lf space 2', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-lf-space-2.xml', 'utf8');
		const compressed = compressXml(original, {
			maintainDepth: true,
			tabSize: 2
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles-maintain-depth/profile-lf-space-2.xml', 'utf8'));
	});

	it('maintain depth compressDepth lf space 8', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-lf-space-8.xml', 'utf8');
		const compressed = compressXml(original, {
			maintainDepth: true,
			tabSize: 8
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles-maintain-depth/profile-lf-space-8.xml', 'utf8'));
	});

	it('maintain depth compressDepth lf tab', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-lf-tab.xml', 'utf8');
		const compressed = compressXml(original, {
			maintainDepth: true,
			indentation: 'tab'
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles-maintain-depth/profile-lf-tab.xml', 'utf8'));
	});

	it('maintain depth compressDepth cr space 4', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-cr-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			maintainDepth: true,
			endOfLine: 'cr'
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles-maintain-depth/profile-cr-space-4.xml', 'utf8'));
	});

	it('maintain depth compressDepth crlf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/profiles/profile-crlf-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			maintainDepth: true,
			endOfLine: 'crlf'
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/profiles-maintain-depth/profile-crlf-space-4.xml', 'utf8'));
	});

	it('compressDepth 2 lf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			compressionDepth: 2
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-depth-2/layout-lf-space-4.xml', 'utf8'));
	});

	it('compressDepth 2 lf space 2', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-space-2.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 2,
			compressionDepth: 2
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-depth-2/layout-lf-space-2.xml', 'utf8'));
	});

	it('compressDepth 2 lf space 8', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-space-8.xml', 'utf8');
		const compressed = compressXml(original, {
			tabSize: 8,
			compressionDepth: 2
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-depth-2/layout-lf-space-8.xml', 'utf8'));
	});

	it('compressDepth 2 lf tab', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-lf-tab.xml', 'utf8');
		const compressed = compressXml(original, {
			indentation: 'tab',
			compressionDepth: 2
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-depth-2/layout-lf-tab.xml', 'utf8'));
	});

	it('compressDepth 2 cr space 4', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-cr-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'cr',
			compressionDepth: 2
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-depth-2/layout-cr-space-4.xml', 'utf8'));
	});

	it('compressDepth 2 crlf space 4', () => {
		const original = fs.readFileSync('test/resources/originals/layouts/layout-crlf-space-4.xml', 'utf8');
		const compressed = compressXml(original, {
			endOfLine: 'crlf',
			compressionDepth: 2
		});
		expect(compressed).toEqual(fs.readFileSync('test/resources/expected/layouts-depth-2/layout-crlf-space-4.xml', 'utf8'));
	});

	it('invalid tab size - too high', () => {
		expect(() =>
			compressXml('', {
				tabSize: 9
			})
		).toThrow('Invalid options: tab size must be between 1 and 8 (any more or less would be mad)');
	});

	it('invalid tab size - too low', () => {
		expect(() =>
			compressXml('', {
				tabSize: -1
			})
		).toThrow('Invalid options: tab size must be between 1 and 8 (any more or less would be mad)');
	});

	it('invalid tab size - not an integer', () => {
		expect(() =>
			compressXml('', {
				tabSize: 2.2
			})
		).toThrow('Invalid options: tab size must be between 1 and 8 (any more or less would be mad)');
	});

	it('invalid indentation - not tab or space', () => {
		expect(() =>
			// @ts-ignore: intentionally testing invalid type for non-typescript users
			compressXml('', {
				// @ts-ignore: intentionally testing invalid type for non-typescript users
				indentation: 'other'
			})
		).toThrow('Invalid options: indentation must be either space or tab (probably space)');
	});

	it('invalid end of line - not lf, cr or crlf', () => {
		expect(() =>
			// @ts-ignore: intentionally testing invalid type for non-typescript users
			compressXml('', {
				// @ts-ignore: intentionally testing invalid type for non-typescript users
				endOfLine: 'other'
			})
		).toThrow('Invalid options: end of line must be either lf (linux/macos), crlf (windows) or cr (really? I doubt it)... (probably lf)');
	});

});
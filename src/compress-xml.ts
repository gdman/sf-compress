export type Options = {
	indentation?: 'tab' | 'space',
	tabSize?: number,
	endOfLine?: 'lf' | 'cr' | 'crlf',
	maintainDepth?: boolean,
	compressionDepth?: number,
	compressionTags?: string[]
}

// Initial POC code - will be refactored later!
export function compressXml(xml: string, compressionTagsOrOptions?: string[] | Options): string {

	let options: Options = {};

	if (Array.isArray(compressionTagsOrOptions)) {
		options.compressionTags = compressionTagsOrOptions;
	} else if (compressionTagsOrOptions) {
		options = compressionTagsOrOptions;
	}

	setValidateOptionDefaults(options);

	const endOfLine     = getEndOfLine(options.endOfLine);
	const indentation   = getIndentation(options.indentation);
	const tabSize       = options.tabSize;
	const compressTags  = options.compressionTags && options.compressionTags.length > 0 ? options.compressionTags : [];
	const compressByTag = compressTags.length > 0;

	const tabPattern = '([' + escape(indentation) + ']{' + tabSize + '})';

	const startsWithTabRegex      = new RegExp('^' + tabPattern + '+');

	const maxIndentationRegex     = new RegExp('^(' + tabPattern + '{' + options.compressionDepth + '})');
	const maxIndentationOpenRegex = new RegExp('^(' + tabPattern + '{' + options.compressionDepth + '})<(?!\/)');

	const compressTagOpenRegex    = new RegExp('^(' + tabPattern + '+)<(' + compressTags.join('|') + ')>$');
	const compressTagCloseRegex   = new RegExp('^(' + tabPattern + '+)</(' + compressTags.join('|') + ')>$');

	const [ declaration, ...lines ] = xml.split(new RegExp(escape(endOfLine)));

	let body = declaration;

	let withinTag = false;

	lines.forEach(line => {
		if (!startsWithTabRegex.test(line)) {
			body += endOfLine + line;
		} else if (compressByTag) {
			const openMatch  = line.match(compressTagOpenRegex);
			const closeMatch = line.match(compressTagCloseRegex);

			if (openMatch) {
				withinTag = true;
				body += endOfLine;
				if (options.maintainDepth) {
					const detectedIndentation = openMatch[1];
					body += detectedIndentation;
				}
			}

			if (withinTag) {
				body += line.replace(startsWithTabRegex, '');
			} else {
				body += endOfLine + line;
			}

			if (closeMatch) {
				withinTag = false;
			}
		} else {
			if (maxIndentationRegex.test(line)) {
				body += line.replace(maxIndentationOpenRegex, endOfLine + (options.maintainDepth ? '$1' : '') + '<')
							.replace(startsWithTabRegex, '');
			} else {
				body += endOfLine + line;
			}
		}
	});

	return body;
}

function setValidateOptionDefaults(options: Options): void {
	if (!options.indentation) {
		options.indentation = 'space';
	}

	if (!options.tabSize) {
		options.tabSize = options.indentation === 'tab' ? 1 : 4;
	}

	if (!options.endOfLine) {
		options.endOfLine = 'lf';
	}

	if (!options.compressionTags) {
		options.compressionTags = [];
	}

	if (!options.compressionDepth) {
		options.compressionDepth = 1;
	}

	if (options.maintainDepth === undefined) {
		options.maintainDepth = options.compressionTags.length > 0 || options.compressionDepth > 1;
	}

	if (!Number.isInteger(options.tabSize) || options.tabSize < 1 || options.tabSize > 8) {
		throw new Error('Invalid options: tab size must be between 1 and 8 (any more or less would be mad)');
	}

	if (![ 'space', 'tab' ].includes(options.indentation)) {
		throw new Error('Invalid options: indentation must be either space or tab (probably space)');
	}

	if (![ 'lf', 'cr', 'crlf' ].includes(options.endOfLine)) {
		throw new Error('Invalid options: end of line must be either lf (linux/macos), crlf (windows) or cr (really? I doubt it)... (probably lf)');
	}
}

function getEndOfLine(endOfLine?: string): string {
	switch (endOfLine) {
		case 'cr':
			return '\r';
		case 'crlf':
			return '\r\n';
		default:
			return '\n';
	}
}

function getIndentation(indentation?: string): string {
	return indentation === 'tab' ? '\t' : ' ';
}

function escape(str: string): string {
	return str.replace(/\//g, '\\');
}

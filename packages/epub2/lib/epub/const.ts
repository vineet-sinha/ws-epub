import { SYMBOL_RAW_DATA } from '../types';

export interface IRootFile {
	['@']: { version?: string },
	[key: string]: any,
}
export interface IManifest {
  item: { "@": TocElement }[];
}
export interface SpineFragment{
	['@']?: {
		toc?: string,
		idref?: string,
	},
	itemref?: SpineFragment | SpineFragment[]
}

export interface TocElement
{
	level?: number;
	order?: number;
	title?: string;
	id?: string;
	href?: string;

	'media-type'?: string,
	mediaType?: string,
	'epub-type'?: string,
	lang?: string,

	series?: string,

	contribute?: string[],
	author_link_map?: {
		[key: string]: string,
	}

	[SYMBOL_RAW_DATA]?: TocElement,
}

export interface ISpine
{
	contents: ISpineContents,
	toc: TocElement | null,

	itemref?: Object[],
}

export interface IMetadataList
{
	[key: string]: TocElement,
}

export interface ISpineContents extends Array<TocElement>
{
	[index: number]: TocElement,
}

export interface IMetadata
{
	publisher?: string,
	language?: string,
	title?: string,
	subject?: string[],
	description?: string,

	creator?: string,
	creatorFileAs?: string,

	date?: string,
	ISBN?: string,
	UUID?: string,
	// cover?: string

	'file-as'?: string,

	'belongs-to-collection'?: string,
	'calibre:series'?: string,
	'collection-type'?: string,

	[key: string]: any,

	[SYMBOL_RAW_DATA]?: IMetadata,
}

export interface INcx extends Array<INcxTree>
{
	[index: number]: INcxTree
}

export interface INcxTree
{
	id: string;
	ncx_index: number;
	ncx_index2?: number;
	level?: number;
	sub: INcxTree[],
}

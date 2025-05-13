export function isEpub(data: string, buf?: boolean): string
export function isEpub(data: Buffer, buf?: boolean): Buffer
export function isEpub(data: any, buf?: boolean): null
export function isEpub(data: any, buf?: boolean)
{
	let txt = (typeof data == 'string' && !buf) ? data : data.toString("utf-8").toLowerCase().trim();

	if (txt === 'application/epub+zip')
	{
		return data;
	}

	return null;
}

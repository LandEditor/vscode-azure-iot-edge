export class LearnMoreError extends Error {
	public readonly url: string;
	constructor(msg: string, url: string) {
		super(msg);
		this.url = url;
	}
}

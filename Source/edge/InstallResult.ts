// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

export enum InstallReturn {
	Success = 0,
	Failed = 1,
	Canceled = 2,
	NotSupported = 3,
	IsInstalling = 4,
}

export class InstallResult {
	public readonly resultType: InstallReturn;
	public readonly errMsg: string;
	constructor(resultType: InstallReturn, errMsg: string = null) {
		this.resultType = resultType;
		this.errMsg = errMsg;
	}
}

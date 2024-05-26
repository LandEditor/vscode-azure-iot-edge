import type { Workspace } from "@azure/arm-machinelearningservices/esm/models";
import type * as vscode from "vscode";
import type { AzureSubscription } from "../../typings/azure-account.api";

export class AmlWorkspaceQuickPickItem implements vscode.QuickPickItem {
	public readonly description: string;
	public readonly detail?: string;

	constructor(
		public readonly label: string,
		public readonly workspace: Workspace,
		public readonly azureSubscription: AzureSubscription,
	) {
		this.description = azureSubscription.subscription.displayName;
	}
}

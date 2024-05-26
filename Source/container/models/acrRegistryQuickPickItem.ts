import type { Registry } from "@azure/arm-containerregistry/esm/models";
import type * as vscode from "vscode";
import type { AzureSubscription } from "../../typings/azure-account.api";

export class AcrRegistryQuickPickItem implements vscode.QuickPickItem {
	public readonly label: string;
	public readonly description: string;
	public readonly detail?: string;

	constructor(
		public readonly registry: Registry,
		public readonly azureSubscription: AzureSubscription,
	) {
		this.label = registry.loginServer || "";
		this.description = azureSubscription.subscription.displayName;
	}
}

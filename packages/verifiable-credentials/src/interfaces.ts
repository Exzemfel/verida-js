export interface credentialDateOptions {
    expirationDate?: string;
    issuanceDate?: string
}


export interface VCResult {
    item: any;
    result: any;
    did: string;
    uri: string;
}
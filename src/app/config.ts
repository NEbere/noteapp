import {Injectable} from '@angular/core';

interface ApiEndpoints {
  serviceRegistry: string;
  apiGateway: string;
  staffIdentity: string;
}

@Injectable()
export class Config {

  private _environment = '#{Environment';
  private _dnsName = '.DnsName}';
  private _shortName = '.ShortName}';

  endpoints: ApiEndpoints;
  enableBypassAuth: boolean;

  constructor() {
    // the #{var} is replaced by Octopus Deploy on deployment to a given environment
    let environmentDnsName = '#{Environment.DnsName}';
    let environmentShortName = '#{Environment.ShortName}';


    // following when running locally
    if (environmentDnsName === this._environment + this._dnsName) {
      environmentDnsName = 'dev.callplus.co.nz';
    }
    if (environmentShortName === this._environment + this._shortName) {
      environmentShortName = 'dev-';
    }


    this.enableBypassAuth = environmentShortName === 'dev-';
    this.endpoints = {
      serviceRegistry: `http://${environmentShortName}serviceregistry.vocusgroup.co.nz`,
      apiGateway: `https://${environmentShortName}apigateway.vocusgroup.co.nz`,
      staffIdentity: `https://staffidentity.api.${environmentDnsName}/staff`,
    };
  }
}

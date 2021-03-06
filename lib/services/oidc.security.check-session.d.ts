import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationProvider } from './auth-configuration.provider';
import { IFrameService } from './existing-iframe.service';
import { LoggerService } from './oidc.logger.service';
import { OidcSecurityCommon } from './oidc.security.common';
export declare class OidcSecurityCheckSession {
    private oidcSecurityCommon;
    private loggerService;
    private iFrameService;
    private zone;
    private readonly configurationProvider;
    private sessionIframe;
    private iframeMessageEvent;
    private scheduledHeartBeat;
    private lastIFrameRefresh;
    private outstandingMessages;
    private heartBeatInterval;
    private iframeRefreshInterval;
    private _onCheckSessionChanged;
    readonly onCheckSessionChanged: Observable<any>;
    constructor(oidcSecurityCommon: OidcSecurityCommon, loggerService: LoggerService, iFrameService: IFrameService, zone: NgZone, configurationProvider: ConfigurationProvider);
    private doesSessionExist;
    private init;
    startCheckingSession(clientId: string): void;
    stopCheckingSession(): void;
    private pollServerSession;
    private clearScheduledHeartBeat;
    private messageHandler;
}

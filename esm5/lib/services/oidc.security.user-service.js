/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { OidcDataService } from '../data-services/oidc-data.service';
import { ConfigurationProvider } from './auth-configuration.provider';
import { LoggerService } from './oidc.logger.service';
import { OidcSecurityCommon } from './oidc.security.common';
var OidcSecurityUserService = /** @class */ (function () {
    function OidcSecurityUserService(oidcDataService, oidcSecurityCommon, loggerService, configurationProvider) {
        this.oidcDataService = oidcDataService;
        this.oidcSecurityCommon = oidcSecurityCommon;
        this.loggerService = loggerService;
        this.configurationProvider = configurationProvider;
        this.userData = '';
    }
    /**
     * @return {?}
     */
    OidcSecurityUserService.prototype.initUserData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.getIdentityUserData().pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return (_this.userData = data); })));
    };
    /**
     * @return {?}
     */
    OidcSecurityUserService.prototype.getUserData = /**
     * @return {?}
     */
    function () {
        if (!this.userData) {
            throw Error('UserData is not set!');
        }
        return this.userData;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    OidcSecurityUserService.prototype.setUserData = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.userData = value;
    };
    /**
     * @private
     * @return {?}
     */
    OidcSecurityUserService.prototype.getIdentityUserData = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var token = this.oidcSecurityCommon.getAccessToken();
        if (!this.configurationProvider.wellKnownEndpoints) {
            this.loggerService.logWarning('init check session: authWellKnownEndpoints is undefined');
            throw Error('authWellKnownEndpoints is undefined');
        }
        /** @type {?} */
        var canGetUserData = this.configurationProvider.wellKnownEndpoints && this.configurationProvider.wellKnownEndpoints.userinfo_endpoint;
        if (!canGetUserData) {
            this.loggerService.logError('init check session: authWellKnownEndpoints.userinfo_endpoint is undefined; set auto_userinfo = false in config');
            throw Error('authWellKnownEndpoints.userinfo_endpoint is undefined');
        }
        return this.oidcDataService.getIdentityUserData(this.configurationProvider.wellKnownEndpoints.userinfo_endpoint || '', token);
    };
    OidcSecurityUserService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OidcSecurityUserService.ctorParameters = function () { return [
        { type: OidcDataService },
        { type: OidcSecurityCommon },
        { type: LoggerService },
        { type: ConfigurationProvider }
    ]; };
    return OidcSecurityUserService;
}());
export { OidcSecurityUserService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OidcSecurityUserService.prototype.userData;
    /**
     * @type {?}
     * @private
     */
    OidcSecurityUserService.prototype.oidcDataService;
    /**
     * @type {?}
     * @private
     */
    OidcSecurityUserService.prototype.oidcSecurityCommon;
    /**
     * @type {?}
     * @private
     */
    OidcSecurityUserService.prototype.loggerService;
    /**
     * @type {?}
     * @private
     */
    OidcSecurityUserService.prototype.configurationProvider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2lkYy5zZWN1cml0eS51c2VyLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWF1dGgtb2lkYy1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvb2lkYy5zZWN1cml0eS51c2VyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFNUQ7SUFJSSxpQ0FDWSxlQUFnQyxFQUNoQyxrQkFBc0MsRUFDdEMsYUFBNEIsRUFDbkIscUJBQTRDO1FBSHJELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ25CLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFOekQsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQU94QixDQUFDOzs7O0lBRUosOENBQVk7OztJQUFaO1FBQUEsaUJBRUM7UUFERyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQXRCLENBQXNCLEVBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7Ozs7SUFFRCw2Q0FBVzs7O0lBQVg7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixNQUFNLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLEtBQVU7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFTyxxREFBbUI7Ozs7SUFBM0I7O1lBQ1UsS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLEVBQUU7UUFFdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxrQkFBa0IsRUFBRTtZQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO1lBRXpGLE1BQU0sS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDdEQ7O1lBRUssY0FBYyxHQUNoQixJQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQjtRQUVwSCxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUN2QixnSEFBZ0gsQ0FDbkgsQ0FBQztZQUNGLE1BQU0sS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7U0FDeEU7UUFFRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsSSxDQUFDOztnQkEvQ0osVUFBVTs7OztnQkFMRixlQUFlO2dCQUdmLGtCQUFrQjtnQkFEbEIsYUFBYTtnQkFEYixxQkFBcUI7O0lBb0Q5Qiw4QkFBQztDQUFBLEFBaERELElBZ0RDO1NBL0NZLHVCQUF1Qjs7Ozs7O0lBQ2hDLDJDQUEyQjs7Ozs7SUFHdkIsa0RBQXdDOzs7OztJQUN4QyxxREFBOEM7Ozs7O0lBQzlDLGdEQUFvQzs7Ozs7SUFDcEMsd0RBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2lkY0RhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vZGF0YS1zZXJ2aWNlcy9vaWRjLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmZpZ3VyYXRpb25Qcm92aWRlciB9IGZyb20gJy4vYXV0aC1jb25maWd1cmF0aW9uLnByb3ZpZGVyJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4vb2lkYy5sb2dnZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE9pZGNTZWN1cml0eUNvbW1vbiB9IGZyb20gJy4vb2lkYy5zZWN1cml0eS5jb21tb24nO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT2lkY1NlY3VyaXR5VXNlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1c2VyRGF0YTogYW55ID0gJyc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBvaWRjRGF0YVNlcnZpY2U6IE9pZGNEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIG9pZGNTZWN1cml0eUNvbW1vbjogT2lkY1NlY3VyaXR5Q29tbW9uLFxyXG4gICAgICAgIHByaXZhdGUgbG9nZ2VyU2VydmljZTogTG9nZ2VyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb25Qcm92aWRlcjogQ29uZmlndXJhdGlvblByb3ZpZGVyXHJcbiAgICApIHt9XHJcblxyXG4gICAgaW5pdFVzZXJEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldElkZW50aXR5VXNlckRhdGEoKS5waXBlKG1hcCgoZGF0YTogYW55KSA9PiAodGhpcy51c2VyRGF0YSA9IGRhdGEpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlckRhdGEoKTogYW55IHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlckRhdGEpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1VzZXJEYXRhIGlzIG5vdCBzZXQhJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyRGF0YSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51c2VyRGF0YSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SWRlbnRpdHlVc2VyRGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gdGhpcy5vaWRjU2VjdXJpdHlDb21tb24uZ2V0QWNjZXNzVG9rZW4oKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZ3VyYXRpb25Qcm92aWRlci53ZWxsS25vd25FbmRwb2ludHMpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dnZXJTZXJ2aWNlLmxvZ1dhcm5pbmcoJ2luaXQgY2hlY2sgc2Vzc2lvbjogYXV0aFdlbGxLbm93bkVuZHBvaW50cyBpcyB1bmRlZmluZWQnKTtcclxuXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdhdXRoV2VsbEtub3duRW5kcG9pbnRzIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2FuR2V0VXNlckRhdGEgPVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb25Qcm92aWRlci53ZWxsS25vd25FbmRwb2ludHMgJiYgdGhpcy5jb25maWd1cmF0aW9uUHJvdmlkZXIud2VsbEtub3duRW5kcG9pbnRzLnVzZXJpbmZvX2VuZHBvaW50O1xyXG5cclxuICAgICAgICBpZiAoIWNhbkdldFVzZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyU2VydmljZS5sb2dFcnJvcihcclxuICAgICAgICAgICAgICAgICdpbml0IGNoZWNrIHNlc3Npb246IGF1dGhXZWxsS25vd25FbmRwb2ludHMudXNlcmluZm9fZW5kcG9pbnQgaXMgdW5kZWZpbmVkOyBzZXQgYXV0b191c2VyaW5mbyA9IGZhbHNlIGluIGNvbmZpZydcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2F1dGhXZWxsS25vd25FbmRwb2ludHMudXNlcmluZm9fZW5kcG9pbnQgaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5vaWRjRGF0YVNlcnZpY2UuZ2V0SWRlbnRpdHlVc2VyRGF0YSh0aGlzLmNvbmZpZ3VyYXRpb25Qcm92aWRlci53ZWxsS25vd25FbmRwb2ludHMudXNlcmluZm9fZW5kcG9pbnQgfHwgJycsIHRva2VuKTtcclxuICAgIH1cclxufVxyXG4iXX0=
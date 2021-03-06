/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PlatformProvider } from './platform.provider';
import * as i0 from "@angular/core";
import * as i1 from "./platform.provider";
var ConfigurationProvider = /** @class */ (function () {
    function ConfigurationProvider(platformProvider) {
        this.platformProvider = platformProvider;
        this.DEFAULT_CONFIG = {
            stsServer: 'https://please_set',
            redirect_url: 'https://please_set',
            client_id: 'please_set',
            response_type: 'code',
            scope: 'openid email profile',
            hd_param: '',
            post_logout_redirect_uri: 'https://please_set',
            start_checksession: false,
            silent_renew: false,
            silent_renew_url: 'https://please_set',
            silent_renew_offset_in_seconds: 0,
            use_refresh_token: false,
            post_login_route: '/',
            forbidden_route: '/forbidden',
            unauthorized_route: '/unauthorized',
            auto_userinfo: true,
            auto_clean_state_after_authentication: true,
            trigger_authorization_result_event: false,
            log_console_warning_active: true,
            log_console_debug_active: false,
            iss_validation_off: false,
            history_cleanup_off: false,
            max_id_token_iat_offset_allowed_in_seconds: 3,
            isauthorizedrace_timeout_in_seconds: 5,
            disable_iat_offset_validation: false,
            storage: typeof Storage !== 'undefined' ? sessionStorage : null,
        };
        this.INITIAL_AUTHWELLKNOWN = {
            issuer: '',
            jwks_uri: '',
            authorization_endpoint: '',
            token_endpoint: '',
            userinfo_endpoint: '',
            end_session_endpoint: '',
            check_session_iframe: '',
            revocation_endpoint: '',
            introspection_endpoint: '',
        };
        this.mergedOpenIdConfiguration = this.DEFAULT_CONFIG;
        this.authWellKnownEndpoints = this.INITIAL_AUTHWELLKNOWN;
        this.onConfigurationChangeInternal = new Subject();
    }
    Object.defineProperty(ConfigurationProvider.prototype, "openIDConfiguration", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mergedOpenIdConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationProvider.prototype, "wellKnownEndpoints", {
        get: /**
         * @return {?}
         */
        function () {
            return this.authWellKnownEndpoints;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigurationProvider.prototype, "onConfigurationChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this.onConfigurationChangeInternal.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} passedOpenIfConfiguration
     * @param {?} passedAuthWellKnownEndpoints
     * @return {?}
     */
    ConfigurationProvider.prototype.setup = /**
     * @param {?} passedOpenIfConfiguration
     * @param {?} passedAuthWellKnownEndpoints
     * @return {?}
     */
    function (passedOpenIfConfiguration, passedAuthWellKnownEndpoints) {
        this.mergedOpenIdConfiguration = tslib_1.__assign({}, this.mergedOpenIdConfiguration, passedOpenIfConfiguration);
        this.setSpecialCases(this.mergedOpenIdConfiguration);
        this.authWellKnownEndpoints = tslib_1.__assign({}, passedAuthWellKnownEndpoints);
        this.onConfigurationChangeInternal.next(tslib_1.__assign({}, this.mergedOpenIdConfiguration));
    };
    /**
     * @private
     * @param {?} currentConfig
     * @return {?}
     */
    ConfigurationProvider.prototype.setSpecialCases = /**
     * @private
     * @param {?} currentConfig
     * @return {?}
     */
    function (currentConfig) {
        if (!this.platformProvider.isBrowser) {
            currentConfig.start_checksession = false;
            currentConfig.silent_renew = false;
            currentConfig.use_refresh_token = false;
        }
    };
    ConfigurationProvider.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ConfigurationProvider.ctorParameters = function () { return [
        { type: PlatformProvider }
    ]; };
    /** @nocollapse */ ConfigurationProvider.ngInjectableDef = i0.defineInjectable({ factory: function ConfigurationProvider_Factory() { return new ConfigurationProvider(i0.inject(i1.PlatformProvider)); }, token: ConfigurationProvider, providedIn: "root" });
    return ConfigurationProvider;
}());
export { ConfigurationProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurationProvider.prototype.DEFAULT_CONFIG;
    /**
     * @type {?}
     * @private
     */
    ConfigurationProvider.prototype.INITIAL_AUTHWELLKNOWN;
    /**
     * @type {?}
     * @private
     */
    ConfigurationProvider.prototype.mergedOpenIdConfiguration;
    /**
     * @type {?}
     * @private
     */
    ConfigurationProvider.prototype.authWellKnownEndpoints;
    /**
     * @type {?}
     * @private
     */
    ConfigurationProvider.prototype.onConfigurationChangeInternal;
    /**
     * @type {?}
     * @private
     */
    ConfigurationProvider.prototype.platformProvider;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1jb25maWd1cmF0aW9uLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1hdXRoLW9pZGMtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2F1dGgtY29uZmlndXJhdGlvbi5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUcvQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRXZEO0lBNERJLCtCQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQTFEOUMsbUJBQWMsR0FBZ0M7WUFDbEQsU0FBUyxFQUFFLG9CQUFvQjtZQUMvQixZQUFZLEVBQUUsb0JBQW9CO1lBQ2xDLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLGFBQWEsRUFBRSxNQUFNO1lBQ3JCLEtBQUssRUFBRSxzQkFBc0I7WUFDN0IsUUFBUSxFQUFFLEVBQUU7WUFDWix3QkFBd0IsRUFBRSxvQkFBb0I7WUFDOUMsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxvQkFBb0I7WUFDdEMsOEJBQThCLEVBQUUsQ0FBQztZQUNqQyxpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLGdCQUFnQixFQUFFLEdBQUc7WUFDckIsZUFBZSxFQUFFLFlBQVk7WUFDN0Isa0JBQWtCLEVBQUUsZUFBZTtZQUNuQyxhQUFhLEVBQUUsSUFBSTtZQUNuQixxQ0FBcUMsRUFBRSxJQUFJO1lBQzNDLGtDQUFrQyxFQUFFLEtBQUs7WUFDekMsMEJBQTBCLEVBQUUsSUFBSTtZQUNoQyx3QkFBd0IsRUFBRSxLQUFLO1lBQy9CLGtCQUFrQixFQUFFLEtBQUs7WUFDekIsbUJBQW1CLEVBQUUsS0FBSztZQUMxQiwwQ0FBMEMsRUFBRSxDQUFDO1lBQzdDLG1DQUFtQyxFQUFFLENBQUM7WUFDdEMsNkJBQTZCLEVBQUUsS0FBSztZQUNwQyxPQUFPLEVBQUUsT0FBTyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUk7U0FDbEUsQ0FBQztRQUVNLDBCQUFxQixHQUEyQjtZQUNwRCxNQUFNLEVBQUUsRUFBRTtZQUNWLFFBQVEsRUFBRSxFQUFFO1lBQ1osc0JBQXNCLEVBQUUsRUFBRTtZQUMxQixjQUFjLEVBQUUsRUFBRTtZQUNsQixpQkFBaUIsRUFBRSxFQUFFO1lBQ3JCLG9CQUFvQixFQUFFLEVBQUU7WUFDeEIsb0JBQW9CLEVBQUUsRUFBRTtZQUN4QixtQkFBbUIsRUFBRSxFQUFFO1lBQ3ZCLHNCQUFzQixFQUFFLEVBQUU7U0FDN0IsQ0FBQztRQUVNLDhCQUF5QixHQUFnQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQzdFLDJCQUFzQixHQUEyQixJQUFJLENBQUMscUJBQXFCLENBQUM7UUFFNUUsa0NBQTZCLEdBQUcsSUFBSSxPQUFPLEVBQXVCLENBQUM7SUFjbEIsQ0FBQztJQVoxRCxzQkFBSSxzREFBbUI7Ozs7UUFBdkI7WUFDSSxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHFEQUFrQjs7OztRQUF0QjtZQUNJLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0RBQXFCOzs7O1FBQXpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsNkJBQTZCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0QsQ0FBQzs7O09BQUE7Ozs7OztJQUlELHFDQUFLOzs7OztJQUFMLFVBQ0kseUJBQWlFLEVBQ2pFLDRCQUF1RTtRQUV2RSxJQUFJLENBQUMseUJBQXlCLHdCQUFRLElBQUksQ0FBQyx5QkFBeUIsRUFBSyx5QkFBeUIsQ0FBRSxDQUFDO1FBQ3JHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLHNCQUFzQix3QkFBUSw0QkFBNEIsQ0FBRSxDQUFDO1FBQ2xFLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLHNCQUFNLElBQUksQ0FBQyx5QkFBeUIsRUFBRyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVPLCtDQUFlOzs7OztJQUF2QixVQUF3QixhQUFrQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtZQUNsQyxhQUFhLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLGFBQWEsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ25DLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7U0FDM0M7SUFDTCxDQUFDOztnQkE5RUosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFGekIsZ0JBQWdCOzs7Z0NBSnpCO0NBcUZDLEFBL0VELElBK0VDO1NBOUVZLHFCQUFxQjs7Ozs7O0lBQzlCLCtDQTJCRTs7Ozs7SUFFRixzREFVRTs7Ozs7SUFFRiwwREFBcUY7Ozs7O0lBQ3JGLHVEQUFvRjs7Ozs7SUFFcEYsOERBQTJFOzs7OztJQWMvRCxpREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT3BlbklkQ29uZmlndXJhdGlvbiwgT3BlbklkSW50ZXJuYWxDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGguY29uZmlndXJhdGlvbic7XHJcbmltcG9ydCB7IEF1dGhXZWxsS25vd25FbmRwb2ludHMgfSBmcm9tICcuLi9tb2RlbHMvYXV0aC53ZWxsLWtub3duLWVuZHBvaW50cyc7XHJcbmltcG9ydCB7IFBsYXRmb3JtUHJvdmlkZXIgfSBmcm9tICcuL3BsYXRmb3JtLnByb3ZpZGVyJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uUHJvdmlkZXIge1xyXG4gICAgcHJpdmF0ZSBERUZBVUxUX0NPTkZJRzogT3BlbklkSW50ZXJuYWxDb25maWd1cmF0aW9uID0ge1xyXG4gICAgICAgIHN0c1NlcnZlcjogJ2h0dHBzOi8vcGxlYXNlX3NldCcsXHJcbiAgICAgICAgcmVkaXJlY3RfdXJsOiAnaHR0cHM6Ly9wbGVhc2Vfc2V0JyxcclxuICAgICAgICBjbGllbnRfaWQ6ICdwbGVhc2Vfc2V0JyxcclxuICAgICAgICByZXNwb25zZV90eXBlOiAnY29kZScsXHJcbiAgICAgICAgc2NvcGU6ICdvcGVuaWQgZW1haWwgcHJvZmlsZScsXHJcbiAgICAgICAgaGRfcGFyYW06ICcnLFxyXG4gICAgICAgIHBvc3RfbG9nb3V0X3JlZGlyZWN0X3VyaTogJ2h0dHBzOi8vcGxlYXNlX3NldCcsXHJcbiAgICAgICAgc3RhcnRfY2hlY2tzZXNzaW9uOiBmYWxzZSxcclxuICAgICAgICBzaWxlbnRfcmVuZXc6IGZhbHNlLFxyXG4gICAgICAgIHNpbGVudF9yZW5ld191cmw6ICdodHRwczovL3BsZWFzZV9zZXQnLFxyXG4gICAgICAgIHNpbGVudF9yZW5ld19vZmZzZXRfaW5fc2Vjb25kczogMCxcclxuICAgICAgICB1c2VfcmVmcmVzaF90b2tlbjogZmFsc2UsXHJcbiAgICAgICAgcG9zdF9sb2dpbl9yb3V0ZTogJy8nLFxyXG4gICAgICAgIGZvcmJpZGRlbl9yb3V0ZTogJy9mb3JiaWRkZW4nLFxyXG4gICAgICAgIHVuYXV0aG9yaXplZF9yb3V0ZTogJy91bmF1dGhvcml6ZWQnLFxyXG4gICAgICAgIGF1dG9fdXNlcmluZm86IHRydWUsXHJcbiAgICAgICAgYXV0b19jbGVhbl9zdGF0ZV9hZnRlcl9hdXRoZW50aWNhdGlvbjogdHJ1ZSxcclxuICAgICAgICB0cmlnZ2VyX2F1dGhvcml6YXRpb25fcmVzdWx0X2V2ZW50OiBmYWxzZSxcclxuICAgICAgICBsb2dfY29uc29sZV93YXJuaW5nX2FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBsb2dfY29uc29sZV9kZWJ1Z19hY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIGlzc192YWxpZGF0aW9uX29mZjogZmFsc2UsXHJcbiAgICAgICAgaGlzdG9yeV9jbGVhbnVwX29mZjogZmFsc2UsXHJcbiAgICAgICAgbWF4X2lkX3Rva2VuX2lhdF9vZmZzZXRfYWxsb3dlZF9pbl9zZWNvbmRzOiAzLFxyXG4gICAgICAgIGlzYXV0aG9yaXplZHJhY2VfdGltZW91dF9pbl9zZWNvbmRzOiA1LFxyXG4gICAgICAgIGRpc2FibGVfaWF0X29mZnNldF92YWxpZGF0aW9uOiBmYWxzZSxcclxuICAgICAgICBzdG9yYWdlOiB0eXBlb2YgU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgPyBzZXNzaW9uU3RvcmFnZSA6IG51bGwsXHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgSU5JVElBTF9BVVRIV0VMTEtOT1dOOiBBdXRoV2VsbEtub3duRW5kcG9pbnRzID0ge1xyXG4gICAgICAgIGlzc3VlcjogJycsXHJcbiAgICAgICAgandrc191cmk6ICcnLFxyXG4gICAgICAgIGF1dGhvcml6YXRpb25fZW5kcG9pbnQ6ICcnLFxyXG4gICAgICAgIHRva2VuX2VuZHBvaW50OiAnJyxcclxuICAgICAgICB1c2VyaW5mb19lbmRwb2ludDogJycsXHJcbiAgICAgICAgZW5kX3Nlc3Npb25fZW5kcG9pbnQ6ICcnLFxyXG4gICAgICAgIGNoZWNrX3Nlc3Npb25faWZyYW1lOiAnJyxcclxuICAgICAgICByZXZvY2F0aW9uX2VuZHBvaW50OiAnJyxcclxuICAgICAgICBpbnRyb3NwZWN0aW9uX2VuZHBvaW50OiAnJyxcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBtZXJnZWRPcGVuSWRDb25maWd1cmF0aW9uOiBPcGVuSWRJbnRlcm5hbENvbmZpZ3VyYXRpb24gPSB0aGlzLkRFRkFVTFRfQ09ORklHO1xyXG4gICAgcHJpdmF0ZSBhdXRoV2VsbEtub3duRW5kcG9pbnRzOiBBdXRoV2VsbEtub3duRW5kcG9pbnRzID0gdGhpcy5JTklUSUFMX0FVVEhXRUxMS05PV047XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNvbmZpZ3VyYXRpb25DaGFuZ2VJbnRlcm5hbCA9IG5ldyBTdWJqZWN0PE9wZW5JZENvbmZpZ3VyYXRpb24+KCk7XHJcblxyXG4gICAgZ2V0IG9wZW5JRENvbmZpZ3VyYXRpb24oKTogT3BlbklkSW50ZXJuYWxDb25maWd1cmF0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZXJnZWRPcGVuSWRDb25maWd1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB3ZWxsS25vd25FbmRwb2ludHMoKTogQXV0aFdlbGxLbm93bkVuZHBvaW50cyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFdlbGxLbm93bkVuZHBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgb25Db25maWd1cmF0aW9uQ2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uQ29uZmlndXJhdGlvbkNoYW5nZUludGVybmFsLmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhdGZvcm1Qcm92aWRlcjogUGxhdGZvcm1Qcm92aWRlcikge31cclxuXHJcbiAgICBzZXR1cChcclxuICAgICAgICBwYXNzZWRPcGVuSWZDb25maWd1cmF0aW9uOiBPcGVuSWRDb25maWd1cmF0aW9uIHwgbnVsbCB8IHVuZGVmaW5lZCxcclxuICAgICAgICBwYXNzZWRBdXRoV2VsbEtub3duRW5kcG9pbnRzOiBBdXRoV2VsbEtub3duRW5kcG9pbnRzIHwgbnVsbCB8IHVuZGVmaW5lZFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5tZXJnZWRPcGVuSWRDb25maWd1cmF0aW9uID0geyAuLi50aGlzLm1lcmdlZE9wZW5JZENvbmZpZ3VyYXRpb24sIC4uLnBhc3NlZE9wZW5JZkNvbmZpZ3VyYXRpb24gfTtcclxuICAgICAgICB0aGlzLnNldFNwZWNpYWxDYXNlcyh0aGlzLm1lcmdlZE9wZW5JZENvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgIHRoaXMuYXV0aFdlbGxLbm93bkVuZHBvaW50cyA9IHsgLi4ucGFzc2VkQXV0aFdlbGxLbm93bkVuZHBvaW50cyB9O1xyXG4gICAgICAgIHRoaXMub25Db25maWd1cmF0aW9uQ2hhbmdlSW50ZXJuYWwubmV4dCh7IC4uLnRoaXMubWVyZ2VkT3BlbklkQ29uZmlndXJhdGlvbiB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFNwZWNpYWxDYXNlcyhjdXJyZW50Q29uZmlnOiBPcGVuSWRDb25maWd1cmF0aW9uKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBsYXRmb3JtUHJvdmlkZXIuaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb25maWcuc3RhcnRfY2hlY2tzZXNzaW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb25maWcuc2lsZW50X3JlbmV3ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDb25maWcudXNlX3JlZnJlc2hfdG9rZW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
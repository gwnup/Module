"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssumeRoleWithWebIdentityCommand = exports.$Command = void 0;
const middleware_endpoint_1 = require("@smithy/middleware-endpoint");
const middleware_serde_1 = require("@smithy/middleware-serde");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "$Command", { enumerable: true, get: function () { return smithy_client_1.Command; } });
const EndpointParameters_1 = require("../endpoint/EndpointParameters");
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
class AssumeRoleWithWebIdentityCommand extends smithy_client_1.Command
    .classBuilder()
    .ep({
    ...EndpointParameters_1.commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0, middleware_serde_1.getSerdePlugin)(config, this.serialize, this.deserialize),
        (0, middleware_endpoint_1.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
    .n("STSClient", "AssumeRoleWithWebIdentityCommand")
    .f(models_0_1.AssumeRoleWithWebIdentityRequestFilterSensitiveLog, models_0_1.AssumeRoleWithWebIdentityResponseFilterSensitiveLog)
    .ser(Aws_query_1.se_AssumeRoleWithWebIdentityCommand)
    .de(Aws_query_1.de_AssumeRoleWithWebIdentityCommand)
    .build() {
}
exports.AssumeRoleWithWebIdentityCommand = AssumeRoleWithWebIdentityCommand;

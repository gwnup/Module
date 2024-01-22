import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { commonParams } from "../endpoint/EndpointParameters";
import { de_ListIdentitiesCommand, se_ListIdentitiesCommand } from "../protocols/Aws_json1_1";
export { $Command };
export class ListIdentitiesCommand extends $Command
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        getSerdePlugin(config, this.serialize, this.deserialize),
        getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
        getAwsAuthPlugin(config),
    ];
})
    .s("AWSCognitoIdentityService", "ListIdentities", {})
    .n("CognitoIdentityClient", "ListIdentitiesCommand")
    .f(void 0, void 0)
    .ser(se_ListIdentitiesCommand)
    .de(de_ListIdentitiesCommand)
    .build() {
}

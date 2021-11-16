import { DefineWorkflow, Schema } from "slack-cloud-sdk/mod.ts";
import { YellFunction } from "../functions/yell.ts";

export const YellWorkflow = DefineWorkflow("yell_workflow", {
  title: "YellWorkflow",
  description: "Express yourself loudly",
  input_parameters: {
    channel: {
      type: Schema.slack.types.channel_id,
      description: "Channel to yell in",
    },
    text: {
      type: Schema.types.string,
      description: "Text to capitalize",
    },
  },
});

const step1 = YellWorkflow.addStep(YellFunction, {
  text: YellWorkflow.inputs.text,
});

YellWorkflow.addStep(Schema.slack.functions.SendMessage, {
  channel_id: YellWorkflow.inputs.channel,
  message: `${step1.outputs.scream}`,
});
``;

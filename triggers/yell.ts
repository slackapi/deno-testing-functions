import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { YellWorkflow } from "../workflows/yell.ts";

export const YellShortcut = DefineTrigger(
  "yell_shortcut",
  {
    type: TriggerTypes.Shortcut,
    name: "Yell",
    description: "Echoes some text IN ALL CAPITAL LETTERS",
  },
)
  .runs(YellWorkflow)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id
  }));

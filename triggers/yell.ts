import { DefineTrigger, TriggerTypes } from "slack-cloud-sdk/mod.ts";
import { YellWorkflow } from "../workflows/yell.ts";

export const YellSlashCmd = DefineTrigger(
  "yell_slash_command",
  {
    type: TriggerTypes.SlashCommand,
    name: "/yell",
    usage_hint: "/yell [some text]",
    description: "Echoes some text IN ALL CAPITAL LETTERS",
  },
)
  .runs(YellWorkflow)
  .withInputs((ctx) => ({
    channel: ctx.data.channel_id,
    text: ctx.data.command.text,
  }));

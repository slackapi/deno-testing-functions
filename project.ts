import { Project } from "slack-cloud-sdk/mod.ts";
import { YellShortcut } from "./triggers/yell.ts";

Project({
  name: "Yell It",
  description: "An app that you use when you want to yell your message",
  icon: "assets/icon.png",
  runtime: "deno1.x",
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "groups:write",
  ],
  triggers: [YellShortcut],
  tables: [],
  outgoingDomains: [],
});

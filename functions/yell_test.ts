import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { SlackAPIClient } from "slack-cloud-sdk/mod.ts";
import { YellFunction } from "./yell.ts";

const client = new SlackAPIClient("");

Deno.test("Yell function test", async () => {
  const inputs = { text: "This is Unacceptable!!!" };
  const { outputs } = await YellFunction.run({ inputs, client, env: {} });
  assertEquals(outputs?.scream, "THIS IS UNACCEPTABLE!!!");
});

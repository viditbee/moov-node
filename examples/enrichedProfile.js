import { Moov } from "@moovio/node";
import { gotOptionsForLogging } from "./gotOptionsForLogging";
import { loadCredentials } from "./loadCredentials";

// TODO: Enter an email to retreive.
const PROFILE_EMAIL = "employee@business.com";

/**
 * Demonstrate how to retrieve enriched profile data.
 */
async function run() {
  // Load credentials and initialize the Moov client
  const credentials = loadCredentials("./secrets/credentials.json");
  const moov = new Moov(credentials, gotOptionsForLogging);

  const profile = await moov.enrichedProfiles.get(PROFILE_EMAIL);
}
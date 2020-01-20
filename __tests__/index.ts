import { copy } from "fs-extra";

import testCLI from "@infragen/util-test-cli";

import videoDateCorrector from "../";

const PROJECT_ROOT = `${__dirname}/../`;

describe("video-date-corrector", () => {
  it("should require a cwd", async () => {
    try {
      await testCLI({
        // it will yell at us for stream being closed early
        // @todo update this when we have proper handling for stream being closes early
        // inputs: [],
        bashCommand: `yarn start`,
        // this is the cwd of the command `yarn start` NOT the internal execution env of the script `yarn start` calls
        cwd: PROJECT_ROOT
      });
    } catch (e) {
      // errors listed below and for some reason a blank error occasionally
      expect(e.error.mock.calls.length).toBeGreaterThan(0);

      expect(e.error).toBeCalledWith(
        expect.stringContaining(
          "`cwd` is required. Pass it using the --cwd flag"
        )
      );

      expect(e.code).toEqual(1);
      expect(e.message).toEqual(
        'Failed executing "yarn start" with exit code: 1'
      );
    }
  });

  it.todo("reads a directory and orders files by name");
  // Test Videos
  //

  it.todo("takes the last file and gets its timestamp");

  it.todo(
    "adjusts the time of the first file + 17h and sets that as base time"
  );

  it.todo("takes the next to last file and gets it's video length");

  it.todo(
    "sets the date of the next to last file to the base time minus the video length"
  );

  it.todo(
    "takes the file before the next to last file and gets it's video length"
  );

  it.todo(
    "sets the date of the 2nd next to last file to the base time minus the next to last video length minus the 2nd next to last file length"
  );
});

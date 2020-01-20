import readDirInOrder from "../readDirInOrder";

const TEST_DIR = `${__dirname}/test-videos`;

describe("readDirInOrder", () => {
  it("reads a directory and orders by name", async () => {
    const fileNames = await readDirInOrder(`${TEST_DIR}/simple-test`);
    expect(fileNames).toEqual(["GOPR6895.MP4", "GOPR6896.MP4", "GOPR6897.MP4"]);
  });

  it("reads a directory with ext files and orders base files by name and groups ext files with base files sorting by name", async () => {
    const fileNames = await readDirInOrder(`${TEST_DIR}/test-with-ext-files`);
    expect(fileNames).toEqual([
      "GOPR6895.MP4",
      "GP016895.MP4",
      "GP026895.MP4",
      "GP036895.MP4",
      "GOPR6896.MP4",
      "GOPR6897.MP4"
    ]);
  });
});

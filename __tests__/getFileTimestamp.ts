import getFileTimestamp from "../getFileTimestamp";
import readDirInOrder from "../readDirInOrder";

const TEST_DIR = `${__dirname}/test-videos/simple-test`;

describe("getFileTimestamp", () => {
  it("takes the last file and gets its timestamp", async () => {
    const files = await readDirInOrder(TEST_DIR);
    const lastFile = files[files.length - 1];

    expect(getFileTimestamp(`${TEST_DIR}/${lastFile}`)).toEqual(
      new Date("2020/01/15 1:12:59 AM")
    );
  });
});

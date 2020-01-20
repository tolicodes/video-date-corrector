import { readdir } from "fs-extra";

// const baseName =
// new Regexp(`GP\d{2}${baseName}`)

const BASE_FILE_REGEX = /GOPR(\d{4})\.MP4/;

export default async dir => {
  const files = await readdir(dir);

  const baseFiles = files.filter(file => file.match(BASE_FILE_REGEX));

  const baseFilesSortedByName = baseFiles.sort((a, b) => a < b);

  const withExtFiles = baseFiles.reduce(
    (out, currentFile, i) => {
      const baseNumber = currentFile.match(BASE_FILE_REGEX)[1];

      const extFiles = files.filter(file => {
        const extFileRegexp = `GP(\\d{2})${baseNumber}\\.MP4`;
        return file.match(new RegExp(extFileRegexp));
      });

      const extFilesByName = extFiles.sort((a, b) => a < b);

      out.splice(i + 1, 0, ...extFilesByName);

      return out;
    },
    [...baseFilesSortedByName]
  );

  return withExtFiles;
};

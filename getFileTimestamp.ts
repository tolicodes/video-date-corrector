import { statSync } from "fs";

export default path => {
  const stats = statSync(path);
  return stats.mtime;
};

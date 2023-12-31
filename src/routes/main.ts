import { AnyMap } from "../types/index";
const start = new Date().getTime();

export default function main(_: AnyMap, res: AnyMap) {
  res.json({
    success: true,
    version: "v1.0.0",
    uptime: new Date().getTime() - start,
  });
}

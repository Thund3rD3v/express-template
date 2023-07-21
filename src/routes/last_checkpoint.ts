import { AnyMap } from "../types/index";

export default function last_checkpoint(_: AnyMap, res: AnyMap) {
  res.status(404).json({
    success: false,
    message: "404 - Not Found",
  });
}

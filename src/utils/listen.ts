import Console from "./console";

export default function () {
  Console.success(`Server Started at http://127.0.0.1:${process.env.PORT}`);
}

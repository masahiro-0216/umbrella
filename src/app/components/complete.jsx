import { Failed } from "./failed";
import { Success } from "./success";

export function Complete(result) {
  if (result?.error?.message == "") {
    return <Failed message={result?.error?.message} />;
  } else {
    return <Success />;
  }
}

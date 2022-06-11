import {JsonEntityFn, JsonEntityStore} from "@tsed/schema";
import changeCase from "change-case";

/**
 * Group the current property in tabs components.
 * @decorator
 * @formio
 * @property
 * @schema
 */
export function Tabs(label: string) {
  return JsonEntityFn((store: JsonEntityStore) => {
    store.schema.customKey("x-formiotabs", {
      key: changeCase.camelCase(label),
      label
    });
  });
}

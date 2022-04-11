import { mutableHandlers, readonlyHandlers } from "./baseHandler";

function createActiveObject(raw, basehHandlers) {
  return new Proxy(raw, basehHandlers);
}

export function reactive(raw) {
  return createActiveObject(raw, mutableHandlers);
}

export function readonly(raw) {
  return createActiveObject(raw, readonlyHandlers);
}

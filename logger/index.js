import { loggerName } from '@dtaran/logger-name'
export function log(message) {
  console.log(`Logger ${loggerName}: ${message}`)
}
/**
 * Moved to its own file so that the type can be shared
 * between api and client files as opposed to redefinition
 */
interface URLObject {
    key: string | undefined,
    url: string
  }

export type {URLObject}
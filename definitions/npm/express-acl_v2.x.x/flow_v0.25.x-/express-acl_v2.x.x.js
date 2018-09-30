import type { $Request, $Response, NextFunction } from "express";

declare module "express-acl" {
  declare type expressAcl$configOptions = {
    filename?: string,
    path?: string,
    baseUrl?: string,
    rules?: Array<Object>,
    defaultRole?: string,
    decodedObjectName?: string,
    roleSearchPath?: string
  }

  declare module.exports: {
    authorize(req: $Request, res: $Response, next: NextFunction): mixed,
    config(config?: expressAcl$configOptions, response?: Object): Map
  }
}

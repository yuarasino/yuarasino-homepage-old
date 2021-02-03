declare module "zlibjs/bin/unzip.min.js" {
  export namespace Zlib {
    export class Unzip {
      constructor(input: Uint8Array, opt_params?: object)
      getFilenames(): string[]
      decompress(filename: string, opt_params?: object): Uint8Array
    }
  }
}

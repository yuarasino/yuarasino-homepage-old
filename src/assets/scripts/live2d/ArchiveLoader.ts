import { Zlib } from "zlibjs/bin/unzip.min.js"
import Unzip = Zlib.Unzip

const ModelDir = "/live2d/models"
const S = 1125

export default class ArchiveLoader {
  private _unzip?: Unzip
  private _filenames?: string[]

  public async loadArchiveAsync(modelName: string) {
    const url = `${ModelDir}/${modelName}.model`
    const response = await fetch(url)
    const buffer = await response.arrayBuffer()
    const array = this.unshiftArchive(new Uint8Array(buffer))
    this._unzip = new Unzip(array)
    this._filenames = this._unzip.getFilenames()
    console.log(this._filenames)
  }

  private unshiftArchive(array: Uint8Array): Uint8Array {
    return Uint8Array.from(array.map((b) => (b - S) % 0x100))
  }
}

import ArchiveLoader from "./ArchiveLoader"

export default class Live2dManager {
  public async initializeAsync(modelName: string) {
    const loader = new ArchiveLoader()
    await loader.loadArchiveAsync(modelName)
  }
}

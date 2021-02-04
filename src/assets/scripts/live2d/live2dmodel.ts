import { CubismModelSettingJson, CubismUserModel } from "./live2dimport"
import ArchiveLoader from "./archiveloader"

const UsePremultiply = true

export default class Live2dModel extends CubismUserModel {
  private _loader!: ArchiveLoader
  private _setting!: CubismModelSettingJson

  public async initializeAsync(
    modelName: string,
    webgl: WebGLRenderingContext
  ) {
    const loader = new ArchiveLoader()
    await loader.initializeAsync(modelName)
    this._loader = loader

    this._setSetting()
    this._setModel()
    await this._setTexturesAsync(webgl)
    this._setPhysics()
  }

  public loop(
    deltaSecond: number,
    buffer: WebGLFramebuffer,
    viewport: number[]
  ) {
    const renderer = this.getRenderer()

    this._model.loadParameters()
    this._motionManager.updateMotion(this._model, deltaSecond)
    this._model.saveParameters()

    this._physics.evaluate(this._model, deltaSecond)

    renderer.setRenderState(buffer, viewport)
    renderer.drawModel()
  }

  private _setSetting() {
    const searchName = ".model3.json"
    const buffer = this._loader.loadBuffer(searchName)
    this._setting = new CubismModelSettingJson(buffer, buffer.byteLength)
    console.log("setting loaded...")
  }

  private _setModel() {
    const searchName = this._setting.getModelFileName()
    const buffer = this._loader.loadBuffer(searchName)
    this.loadModel(buffer)
    console.log("model loaded...")
  }

  private _setPhysics() {
    const searchName = this._setting.getPhysicsFileName()
    const buffer = this._loader.loadBuffer(searchName)
    this.loadPhysics(buffer, buffer.byteLength)
    console.log("physics loaded...")
  }

  private async _setTexturesAsync(webgl: WebGLRenderingContext) {
    this.createRenderer()
    const renderer = this.getRenderer()
    for (let i = 0; i < this._setting.getTextureCount(); i++) {
      const searchName = this._setting.getTextureFileName(i)
      const buffer = this._loader.loadBuffer(searchName)
      const blob = new Blob([buffer], { type: "image/png" })
      const src = URL.createObjectURL(blob)
      const texture = await this._createTextureAsync(src, webgl)
      renderer.bindTexture(i, texture)
    }
    renderer.setIsPremultipliedAlpha(UsePremultiply)
    renderer.startUp(webgl)
    console.log("texture loaded...")
  }

  private _createTextureAsync(
    src: string,
    webgl: WebGLRenderingContext
  ): Promise<WebGLTexture> {
    return new Promise((resolve: (texture: WebGLTexture) => void) => {
      const image = new Image()
      image.onload = () => {
        const texture = webgl.createTexture()!
        webgl.bindTexture(webgl.TEXTURE_2D, texture)
        webgl.texParameteri(
          webgl.TEXTURE_2D,
          webgl.TEXTURE_MIN_FILTER,
          webgl.LINEAR_MIPMAP_LINEAR
        )
        webgl.texParameteri(
          webgl.TEXTURE_2D,
          webgl.TEXTURE_MAG_FILTER,
          webgl.LINEAR
        )
        if (UsePremultiply) {
          webgl.pixelStorei(webgl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1)
        }
        webgl.texImage2D(
          webgl.TEXTURE_2D,
          0,
          webgl.RGBA,
          webgl.RGBA,
          webgl.UNSIGNED_BYTE,
          image
        )
        webgl.generateMipmap(webgl.TEXTURE_2D)
        return resolve(texture)
      }
      image.src = src
    })
  }
}

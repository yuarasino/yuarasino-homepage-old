import { CubismFramework } from "./live2dimport"
import Live2dModel from "./live2dmodel"

export default class Live2dManager {
  private _canvas: HTMLCanvasElement
  private _webgl!: WebGLRenderingContext
  private _buffer!: WebGLFramebuffer
  private _model!: Live2dModel

  constructor(canvas: HTMLCanvasElement) {
    this._canvas = canvas
  }

  public async initializeAsync(modelName: string) {
    this._initializeWebGL()
    this._initializeFramework()

    const model = new Live2dModel()
    await model.initializeAsync(modelName, this._webgl)
    this._model = model
    this.resize()
  }

  public main() {
    let lastTime = 0
    const loop = (time: number) => {
      const deltaSecond = (time - lastTime) / 1000
      this._webgl.clear(
        this._webgl.COLOR_BUFFER_BIT | this._webgl.DEPTH_BUFFER_BIT
      )
      this._model.loop(deltaSecond, this._canvas, this._buffer)
      lastTime = time
    }
    requestAnimationFrame(loop)
  }

  public resize() {
    this._canvas.width = this._canvas.clientWidth * devicePixelRatio
    this._canvas.height = this._canvas.clientHeight * devicePixelRatio
    this._model.resize(this._canvas)
  }

  private _initializeWebGL() {
    const webgl = this._canvas.getContext("webgl")!
    webgl.enable(webgl.BLEND)
    webgl.enable(webgl.DEPTH_TEST)
    webgl.blendFunc(webgl.SRC_ALPHA, webgl.ONE_MINUS_SRC_ALPHA)
    webgl.depthFunc(webgl.LEQUAL)
    webgl.clearColor(0.0, 0.0, 0.0, 0.0)
    webgl.clearDepth(1.0)
    this._webgl = webgl
    this._buffer = webgl.getParameter(webgl.FRAMEBUFFER_BINDING)
  }

  private _initializeFramework() {
    CubismFramework.startUp()
    CubismFramework.initialize()
  }
}

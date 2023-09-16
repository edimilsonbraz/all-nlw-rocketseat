import { FFmpeg } from '@ffmpeg/ffmpeg'

import coreURL from "@/ffmpeg/ffmpeg-core.js?url"
import wasmURL from '@/ffmpeg/ffmpeg-core.wasm?url'
import workerURL from "@/ffmpeg/ffmpeg-worker.js?url"

let ffmpeg: FFmpeg | null

export async function getFFmpeg() {
  //Cria apena uma unica instancia do ffmepg que vai ser compartilhada na aplicação
  //E toda vez que for chamada verifica se ja foi criado pra reaproveitar a mesma var
  if (ffmpeg) {
    return ffmpeg
  }

  ffmpeg = new FFmpeg()

  if (!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL
    })
  }

  return ffmpeg
}

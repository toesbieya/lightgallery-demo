import { LightGallery } from 'lightgallery/lightgallery'
import lightGallery from 'lightgallery'
import lgFullscreen from 'lightgallery/plugins/fullscreen'
import lgRotate from 'lightgallery/plugins/rotate'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

let insertLightGalleryEl = false
let instance: LightGallery | undefined

export function previewImage(urlList: string[], index = 0): LightGallery {
  if (!insertLightGalleryEl) {
    const div = document.createElement('div')
    div.setAttribute('id', 'light-gallery-el')
    div.style.display = 'none'
    document.body.appendChild(div)
    div.addEventListener('lgAfterClose', previewImage.close)
    insertLightGalleryEl = true
  }

  // 在上一个实例未关闭时就再次调用previewImage，
  if (instance) {
    return instance
  }

  const el = document.getElementById('light-gallery-el')
  instance = lightGallery(el!, {
    index,
    download: false,
    dynamic: true,
    dynamicEl: urlList.map(src => ({ src, thumb: src })),
    plugins: [lgFullscreen, lgRotate, lgThumbnail, lgZoom]
  })

  instance.openGallery(index)

  return instance
}

previewImage.close = () => {
  if (!insertLightGalleryEl || !instance) return

  instance.closeGallery(true)
  instance.destroy()

  instance = undefined
}

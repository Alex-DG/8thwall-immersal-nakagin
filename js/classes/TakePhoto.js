class _TakePhoto {
  init() {
    this.recorder = document.getElementById('recorder')

    this.hide()
  }

  show() {
    this.recorder.style.display = 'block'
  }

  hide() {
    this.recorder.style.display = 'none'
  }
}

const TakePhoto = new _TakePhoto()
export default TakePhoto

let modalBox = document.getElementById('modalBox')
let modalBox2 = document.getElementById('modalBox2')
let incalCloseBtn = document.getElementById('incalCloseBtn')
let binaryCloseBtn = document.getElementById('binaryCloseBtn')

let calImg = document.getElementById('calImg')
let binImg = document.getElementById('binImg')

calImg.onclick = function () {
  modalBox.classList.add('on')
}

binImg.onclick = function () {
  modalBox2.classList.add('onTwo')
}

incalCloseBtn.onclick = function () {
  modalBox.classList.remove('on')
}

binaryCloseBtn.onclick = function () {
  modalBox2.classList.remove('onTwo')
}

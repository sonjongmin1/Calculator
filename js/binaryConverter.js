function twoJinsu(a) {
  let binRes = document.querySelector('#binRes')
  let num = parseInt(document.getElementById('num').value)
  let res = clc(num)
  binRes.innerHTML = res

  function clc(num) {
    let numArr = ''
    let na = 0

    for (let i = 0; num > 0; i++) {
      na = num % a
      let imsi = ''
      if (na >= 0 && na <= 9) {
        imsi = na
      } else {
        switch (na) {
          case 10:
            imsi = 'A'
            break
          case 11:
            imsi = 'B'
            break
          case 12:
            imsi = 'C'
            break
          case 13:
            imsi = 'D'
            break
          case 14:
            imsi = 'E'
            break
          case 15:
            imsi = 'F'
            break
        }
      }
      numArr = imsi + numArr
      num = Math.floor(num / a)
    }

    if (numArr == '') {
      numArr = 0
    }

    return numArr
  }
}

function eightJinsu(b) {
  let binRes = document.querySelector('#binRes')
  let num = parseInt(document.getElementById('num').value)
  let res = clc(num)
  binRes.innerHTML = res

  function clc(num) {
    let numArr = ''
    let na = 0

    for (let i = 0; num > 0; i++) {
      na = num % b
      let imsi = ''
      if (na >= 0 && na <= 9) {
        imsi = na
      } else {
        switch (na) {
          case 10:
            imsi = 'A'
            break
          case 11:
            imsi = 'B'
            break
          case 12:
            imsi = 'C'
            break
          case 13:
            imsi = 'D'
            break
          case 14:
            imsi = 'E'
            break
          case 15:
            imsi = 'F'
            break
        }
      }
      numArr = imsi + numArr
      num = Math.floor(num / b)
    }

    if (numArr == '') {
      numArr = 0
    }
    return numArr
  }
}

function sixteenJinsu(c) {
  let binRes = document.querySelector('#binRes')
  let num = parseInt(document.getElementById('num').value)
  let res = clc(num)
  binRes.innerHTML = res

  function clc(num) {
    let numArr = ''
    let na = 0

    for (let i = 0; num > 0; i++) {
      na = num % c
      let imsi = ''
      if (na >= 0 && na <= 9) {
        imsi = na
      } else {
        switch (na) {
          case 10:
            imsi = 'A'
            break
          case 11:
            imsi = 'B'
            break
          case 12:
            imsi = 'C'
            break
          case 13:
            imsi = 'D'
            break
          case 14:
            imsi = 'E'
            break
          case 15:
            imsi = 'F'
            break
        }
      }
      numArr = imsi + numArr
      num = Math.floor(num / c)
    }

    if (numArr == '') {
      numArr = 0
    }
    return numArr
  }
}

let calRes = document.getElementById('calRes')
let stack = ''
let cal = ''
let stackStore = ''
let num = 0

function calBtnC() {
  stack = ''
  cal = ''
  stackStore = ''
  num = 0
  calRes.innerHTML = ''
}

function calBtnB() {
  if (stack.length > 0) {
    stack = stack.slice(0, -1)
    calRes.innerHTML = stack
  }
}

function calClc() {
  if (cal === '+') {
    num = parseFloat(stackStore) + parseFloat(stack)
  } else if (cal === '-') {
    num = parseFloat(stackStore) - parseFloat(stack)
  } else if (cal === 'X') {
    num = parseFloat(stackStore) * parseFloat(stack)
  } else if (cal === '/') {
    num = parseFloat(stackStore) / parseFloat(stack)
  } else if (cal === '%') {
    num = parseFloat(stackStore) % parseFloat(stack)
  } else {
    num = stack
  }

  calRes.innerHTML = num.toLocaleString()
  stackStore = num
  cal = ''
  stack = ''
}

function calBtnDot() {
  if (!stack.includes('.')) {
    stack += '.'
    calRes.innerHTML = stack
  }
}

function calBtnP(l) {
  stackStore += stack
  stack = ''
  cal = l
}

function calBtnM(m) {
  stackStore += stack
  stack = ''
  cal = m
}

function calBtnX(n) {
  stackStore += stack
  stack = ''
  cal = n
}

function calBtnD(o) {
  stackStore += stack
  stack = ''
  cal = o
}

function calBtnR(p) {
  stackStore = stack
  stack = ''
  cal = p
}

function calBtn0(a) {
  stack += a
  calRes.innerHTML = stack
}

function calBtn1(b) {
  stack += b
  calRes.innerHTML = stack
}

function calBtn2(c) {
  stack += c
  calRes.innerHTML = stack
}

function calBtn3(d) {
  stack += d
  calRes.innerHTML = stack
}

function calBtn4(e) {
  stack += e
  calRes.innerHTML = stack
}

function calBtn5(f) {
  stack += f
  calRes.innerHTML = stack
}

function calBtn6(g) {
  stack += g
  calRes.innerHTML = stack
}

function calBtn7(h) {
  stack += h
  calRes.innerHTML = stack
}

function calBtn8(i) {
  stack += i
  calRes.innerHTML = stack
}

function calBtn9(j) {
  stack += j
  calRes.innerHTML = stack
}

function calBtn00(k) {
  stack += k
  calRes.innerHTML = stack
}

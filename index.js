console.log(`Hello! Version: ${require('./package.json').version}`);

function RPN(seq) {

  if (seq.length <= 2) {
    console.log('Please enter valid RPN')
    return
  }

  var operands = ['+', '-', '*', '/' ]
  var stack = []
  var i = 0

  stack.push(seq[i])
  i++

  while(i <= seq.length) {
    var item = seq[i]
    var index = operands.indexOf(item)
    if (index < 0) {
      stack.push(seq[i])
    } else {
      if (index == 0) {
        var a = parseInt(stack.splice(-1)[0], 10)
        var b = parseInt(stack.splice(-1)[0], 10)
        stack.push(a+b)
      }
      if (index == 1) {
      var a = parseInt(stack.splice(-1)[0], 10)
        var b = parseInt(stack.splice(-1)[0], 10)
        stack.push(b-a)
      }
      if (index == 2) {
      var a = parseInt(stack.splice(-1)[0], 10)
        var b = parseInt(stack.splice(-1)[0], 10)
        stack.push(a*b)
      }
      if (index == 3) {
      var a = parseInt(stack.splice(-1)[0], 10)
        var b = parseInt(stack.splice(-1)[0], 10)
        stack.push(b/a)
      }
    }
     i++
  }

  return parseInt(stack[0],10)
};

module.exports.RPN = RPN;

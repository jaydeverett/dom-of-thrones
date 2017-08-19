function scene3() {
  console.log('Executing scene 3!');
  // Setup Stage
  stage = document.querySelector('#stage');
  desert = document.querySelector('#desert');
  stageImg = stage.querySelector('#stage-img');
  desertImgSrc = desert.getAttribute('src');
  stageImg.setAttribute('src', desertImgSrc);


  // Setup Cast

  // Character 1
  danyContainer = document.createElement('div')
  stage.append(danyContainer)
  danyContainer.style.position = 'absolute'
  danyContainer.style.width = '10%'
  danyContainer.style.height = '20%'
  danyContainer.style.top = '50%'
  danyContainer.style.left = '50%'
  danyContainer.style.border = '2px solid red'
  danyContainer.style.background = 'yellow'
  dany = document.querySelector('#danerys')
  danyContainer.append(dany)
  dress = document.querySelector('#blue-dress')
  danyContainer.append(dress)
  dany.style.border = '2px solid blue'
  dress.style.border = '2px solid green'
  danyContainer.style.height = '44%'
  dany.style.width = '70%'
  dany.style.position = 'absolute'
  dany.style.top = 0
  dress.style.position = 'absolute'
  dress.style.bottom = 0
  danyContainer.style.height = '37%'
  danyContainer.style.top = '55%'
  danyContainer.style.left = '25%'
  dany.style.border = 'none'
  dress.style.border = 'none'
  danyContainer.style.border = 'none'
  danyContainer.style.background = 'none'
  // Character 2
  drogoContainer = document.createElement('div')
  drogoContainer.id = 'drogo-container'
  stage.append(drogoContainer)
  drogoContainer.style.width = '8%'
  drogoContainer.style.position = 'absolute'
  drogoContainer.style.height = '31%'
  drogoContainer.style.top = '55%'
  drogoContainer.style.left = '55%'

  drogo = document.querySelector('#drogo')
  drogoContainer.append(drogo)
  drogo.style.width = '75%'
  drogo.style.position = 'absolute'
  drogo.style.left = '18%'

  bulky = document.querySelector('#bulky-man')
  drogoContainer.append(bulky)
  bulky.style.position = 'absolute'
  bulky.style.bottom = 0

  //How do I make ths go away when going back to scene 2?

  // Setup Props

  // Prop 1
  egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.top = '71%'
  egg.style.left = '31%'
  egg.style.height = '8%'
  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '71%'
    egg.style.left = '31%'
  })

  frame(function() {
    egg.style.top = '66%'
    egg.style.left = '36%'
  })

  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '41%'
  })

  frame(function() {
    egg.style.top = '62%'
    egg.style.left = '47%'
  })

  frame(function() {
    egg.style.top = '64%'
    egg.style.left = '53%'
  })

  // Stage direction 2

  frame(function() {
    egg.style.top = '64%'
    egg.style.left = '53%'
  })

  frame(function() {
    egg.style.top = '62%'
    egg.style.left = '47%'
  })

  frame(function() {
    egg.style.top = '60%'
    egg.style.left = '41%'
  })

  frame(function() {
    egg.style.top = '66%'
    egg.style.left = '36%'
  })

  frame(function() {
    egg.style.top = '71%'
    egg.style.left = '31%'
  })
}

import heartLogo from './img/heart.svg'
import likeButton from './img/like.svg'
import londonPic from './img/london.jpg'

const likeImg = document.createElement('img')
likeImg.src = likeButton
likeImg.alt = 'Like Logo'
likeImg.height = 100
likeImg.width = 100
document.body.appendChild(likeImg)

const londonImg = document.createElement('img')
londonImg.src = londonPic
londonImg.alt = 'London Logo'
londonImg.height = 100
londonImg.width = 100
document.body.appendChild(londonImg)

const heartImg = document.createElement('img')
heartImg.src = heartLogo
heartImg.alt = 'Heart Logo'
heartImg.height = 100
heartImg.width = 100
document.body.appendChild(heartImg)
import { difficutltyCards } from './StaticData.js'
import { diffucultyCard } from './ui/difficulty-card.js'

const cardWrapper = document.getElementById('card_wrapper')


cardWrapper.innerHTML =  difficutltyCards.map((card, id) => diffucultyCard(card, id)).join('')
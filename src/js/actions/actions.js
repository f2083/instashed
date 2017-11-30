export const TOGGLE_SIDE = 'TOGGLE_SIDE'
export const CHECK_EQUALITY = 'CHECK_EQUALITY'
export const FIX_SLIDE = 'FIX_SLIDE'
export const HIDE_ALL = 'HIDE_ALL'
export const NEW_GAME = 'NEW_GAME'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function toggleSide(index) {
	console.log('toggleSide dispatched')
  return { type: TOGGLE_SIDE, index }
}

export function fixSlide(index) {
  return { type: FIX_SLIDE, index }
}

export function checkEquality(index) {
  return { type: CHECK_EQUALITY, index }
}

export function hideAll(index) {
  return { type: HIDE_ALL, index }
}

export function newGame(index) {
  return { type: NEW_GAME, index }
}
export const TOGGLE_SIDE = 'TOGGLE_SIDE'
export const CHECK_EQUALITY = 'CHECK_EQUALITY'
export const FIX_SLIDE = 'FIX_SLIDE'
export const HIDE_ALL = 'HIDE_ALL'

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

export function checkEquality(filter) {
  return { type: CHECK_EQUALITY, filter }
}

export function hideAll(filter) {
  return { type: HIDE_ALL, filter }
}
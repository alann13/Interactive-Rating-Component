import './styles/index.css'

const form = document.querySelector<HTMLFormElement>('form')
const selectedText =
  document.querySelector<HTMLParagraphElement>('.selected-text')
const ratingCard = document.querySelector<HTMLDivElement>('.rating-card')
const thnxCard = document.querySelector<HTMLDivElement>('.thnx-card')
const buttons = document.querySelectorAll<HTMLInputElement>(
  'input[name="rating"]',
)

const state = {
  selectedRating: '',
}

form?.addEventListener('click', (event) => {
  const target = event.target as HTMLInputElement

  if (!target.name) {
    return
  }

  target.classList.toggle('active')
  state.selectedRating = target.value

  for (const btn of buttons) {
    if (btn.value !== state.selectedRating) {
      btn.classList.remove('active')
    }
  }
})

form?.addEventListener('submit', (event) => {
  event.preventDefault()
  const { selectedRating } = state

  if (selectedRating) {
    selectedText!.textContent = `You have selected ${selectedRating} out of 5`
    thnxCard?.classList.toggle('hidden')
    ratingCard?.classList.toggle('hidden')
  }
})

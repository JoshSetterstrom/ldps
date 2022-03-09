export default function handleFocus(data, setFocused) {
  if (['did', 'las'].includes(data.type)) return

  setFocused([data.data, data.type])
}
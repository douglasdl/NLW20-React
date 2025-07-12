import { Link } from 'react-router-dom'

export function Room() {
  return (
    <div>
      <div>Room Details</div>
      <Link className="underline" to="/">
        Home
      </Link>
    </div>
  )
}

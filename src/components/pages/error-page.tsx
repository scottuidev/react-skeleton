import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  let statusText = 'unknown'
  let message = 'unknown'

  if (isRouteErrorResponse(error)) {
    statusText = error.statusText
    message = error.error ? error.error.message : 'unknown'
  }

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  )
}

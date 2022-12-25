

function Button({ children, isDisabled }) {
  return (
    <button type="submit" disabled={isDisabled} className="btn">
      {children}
    </button>
  )
}


export default Button


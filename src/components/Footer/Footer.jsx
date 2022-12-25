const Footer = () => {

    const year = new Date();

  return (
    <footer>
    <div className="footer">Copyright © {year.getFullYear()}</div>
    </footer>
  )
}
export default Footer
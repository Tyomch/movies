function Footer(){
  return <footer className='page-footer purple darken-2'>
    <div className="footer-copyright">
      <div className='container'>
        {new Date().getFullYear}
        <img src={require('../photos/free-sticker-birthday-cake-4213726.png')} alt="#" width="100px" height="100px"/>
        <a href="#!" className="max grey-text text-lighten-4 right">
          Spirin A.
        </a>
      </div>
    </div>
  </footer>
}
export { Footer };
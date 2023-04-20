import './Rodape.css';

const Rodape = () => {
    return(
        <footer className='footer'>
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target='_blank'>
                            <img src="/images/facebook.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target='_blank'>
                            <img src="/images/twitter.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target='_blank'>
                            <img src="/images/instagram.png" alt="" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/images/logo.png" alt="" />
            </section>
            <section>
                Trilha React - Alura
            </section>
        </footer>
    )
}

export default Rodape
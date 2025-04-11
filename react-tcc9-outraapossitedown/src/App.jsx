import './assets/css-react-tcc/tcc.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
        <div>
            <header>
                <div id="title">
                    <h1>Sistema PDV</h1>
                </div>
                <ul>
                    <Link to="/Home"><li>Home</li></Link>
                   
                    <Link to="/Sobre-Nos"><li>Sobre Nós</li></Link>
                    
                    
                    <Link to="/Download"><li>Download</li> </Link>
                    
                </ul>
            </header>
            <main>
                <aside>
                    <h2>Sun PDV</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deserunt iure est doloribus vitae ipsa cupiditate necessitatibus placeat inventore. Harum magni ipsa sequi totam eligendi delectus fugit tenetur ipsam hic!
                
                    </p>
                </aside> 
            </main>
        </div>

        <section>
            <div className="marca">
                <h3>Nossa marca</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut odit atque labore, nesciunt incidunt alias nam natus odio asperiores accusantium voluptatum placeat laudantium explicabo consectetur similique distinctio, sed sint?
                Esse, excepturi eveniet. Illo ratione corrupti assumenda officiis vero ullam reiciendis quos, molestiae corporis quibusdam, distinctio provident facere placeat delectus quo laboriosam aliquid porro suscipit. Natus illum iusto consectetur ullam?</p>
            </div>
        </section>

            <section>
               <h3> Venha conhecer o nosso sistema PDV</h3>
                <p>Proporcione ao cliente um rápido atendimento</p>
            </section>
            <section>
                <h3>Tenha opções de diversos atendimentos</h3>
                 <p>Varejo</p>
                    <p>Food</p>
                    <p>Supermercados</p>
            </section>

                
                    


                <footer>
                     <p>Copyright 2024-2025 by Sun PDV Software - todos os direitos reservados por nós da Sun PDV</p>   
                </footer>




    </>  
  )
}

export default App

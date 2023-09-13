import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="body">
      <Header titulo='Adopta un perrito'/>
      <div className="container">  
        <MyCard
          imagen='https://humanidades.com/wp-content/uploads/2017/02/perro-1-e1561678907722.jpg' 
          titulo='Bartolo'
          texto='Lleno de energía y listo para jugar. ¡Dale a Barolo el hogar amoroso que se merece!'
          color='success' 
          nombre='Cockapoo'
        />
           
        <MyCard 
          imagen='https://humanidades.com/wp-content/uploads/2017/02/perro-3-e1561679226953.jpg' 
          titulo='Messi' 
          texto='Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!'
          color='primary' 
          nombre='Husky'
        />
          
        <MyCard 
          imagen='https://perritorio.com/wp-content/uploads/2019/01/PRIMERA-PLAYA-PARA-PERROS-800x400.jpg' 
          titulo='Gohan' 
          texto='Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional! '
          color='danger' 
          nombre='Golden retiever'
        />
        <MyCard 
          imagen='https://www.gndiario.com/sites/default/files/styles/noticia_detalle_noticia_2_1/public/noticias/C%C3%B3mo%20calcular%20la%20edad%20de%20tu%20perro%20correctamente.jpg?itok=SZJr-HRM' 
          titulo='Princesa' 
          texto='Es una compañera leal y cariñosa que adora los mimos y los abrazos, ¡Ayuda a Princesa a encontrar su Final feliz'
          color='warning' 
          nombre='Husky'
        />
      </div>
      <Footer className='footer'/>


    </div>
  )
}

export default App

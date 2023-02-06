import "./home.css";

export function Home(){
    return(
        <main className="main-galeria">
    
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="1500">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1662580245/tintas_asaq4r.jpg" className="d-block w-100" alt="tintas"/>
        </div>
        <div className="carousel-item" data-bs-interval="1500">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1662580242/dijes_ck5tr1.jpg" className="d-block w-100" alt="dijes"/>
        </div>
        <div className="carousel-item" data-bs-interval="1500">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1662580242/maquinas_qam2b6.jpg" className="d-block w-100" alt="maquinas"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  <div className="wow animate__animated animate__backInLeft">
    <div className="titulo1">
      <h1 className="ubicacion">Ragnar Tattoo Studio</h1>
    </div>
  </div>

  <div className="wow animate__animated animate__fadeInUp nosotros">
    <p>Nuestro principal objetivo es brindarte la mejor experiencia cuando te vayas a tatuar.
    Nuestro estudio privado está diseñado exclusivamente para crear un ambiente acogedor y profesional.
    Queremos asegurarnos de que te sientas cómoda/o y segura/o con los servicios que brindamos.</p>
  </div>  

  <div className="grid-container1">
    <div className="gallery-1">
      <a href="https://res.cloudinary.com/ariel666/image/upload/v1663719007/IMG_20220920_173506193_HDR-min_wyejkb.jpg" data-lightbox="tattoos" data-tittle="tattoo1">
        <img src="https://res.cloudinary.com/ariel666/image/upload/v1663719007/IMG_20220920_173506193_HDR-min_wyejkb.jpg" alt="studio-1" className="studio-1"/>
      </a>
      <a href="https://res.cloudinary.com/ariel666/image/upload/v1663884939/esterilizadora-min_emp1ei.jpg" data-lightbox="tattoos" data-tittle="tattoo2">
        <img src="https://res.cloudinary.com/ariel666/image/upload/v1663884939/esterilizadora-min_emp1ei.jpg" alt="studio-2" className="studio-2"/>
      </a>
      <a href="https://res.cloudinary.com/ariel666/image/upload/v1663884494/IMG_20220920_172321456-min_eynzax.jpg" data-lightbox="tattoos" data-tittle="tattoo3">
        <img src="https://res.cloudinary.com/ariel666/image/upload/v1663884494/IMG_20220920_172321456-min_eynzax.jpg" alt="studio-3" className="studio-3"/>
      </a>
    </div>
  </div>

    
  <div className="wow animate__animated animate__fadeInUp titulos">
    <h2 className="ubicacion">Galeria Tattoos</h2>
  </div>
   


    
    <div className="grid-container">
      <div className="gallery">
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614855/calavera-min_wq4ea6.jpg" data-lightbox="tattoos" data-tittle="tattoo1">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614855/calavera-min_wq4ea6.jpg" alt="tattoo-1" className="tattoo1"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614856/IMG_20170810_134750565-min_ci37mj.jpg" data-lightbox="tattoos" data-tittle="tattoo2">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614856/IMG_20170810_134750565-min_ci37mj.jpg" alt="tattoo-2" className="tattoo2"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614856/IMG_20170822_151754221-min_k4wp7a.jpg" data-lightbox="tattoos" data-tittle="tattoo3">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614856/IMG_20170822_151754221-min_k4wp7a.jpg" alt="tattoo-3" className="tattoo3"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614860/pluma-min_np9vnx.jpg" data-lightbox="tattoos" data-tittle="tattoo4">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614860/pluma-min_np9vnx.jpg" alt="tattoo4"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614858/rhcp-min_ztno81.jpg" data-lightbox="tattoos" data-tittle="tattoo5">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614858/rhcp-min_ztno81.jpg" alt="tattoo5"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614855/caretas-min_n5llwx.jpg"data-lightbox="tattoos" data-tittle="tattoo6">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614855/caretas-min_n5llwx.jpg" alt="tattoo6"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614859/llavero-min_nseoiu.jpg" data-lightbox="tattoos" data-tittle="tattoo7">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614859/llavero-min_nseoiu.jpg" alt="tattoo7"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614858/papa_rosa-min_zhzztj.jpg"  data-lightbox="tattoos" data-tittle="tattoo8">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614858/papa_rosa-min_zhzztj.jpg" alt="tattoo8"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614860/rosa-min_j0in4f.jpg" data-lightbox="tattoos" data-tittle="tattoo9">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614860/rosa-min_j0in4f.jpg" alt="tattoo9"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614855/heart-min_vdvotm.jpg" data-lightbox="tattoos" data-tittle="tattoo10">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614855/heart-min_vdvotm.jpg" alt="tattoo10"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614859/pelota-min_pyaxxq.jpg" data-lightbox="tattoos" data-tittle="tattoo11">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614859/pelota-min_pyaxxq.jpg" alt="tattoo11"/>
        </a>
        <a href="https://res.cloudinary.com/ariel666/image/upload/v1663614854/golondrina-min_prv3t8.jpg"data-lightbox="tattoos" data-tittle="tattoo12">
          <img src="https://res.cloudinary.com/ariel666/image/upload/v1663614854/golondrina-min_prv3t8.jpg" alt="tattoo12"/>
        </a>
      </div>
    </div>

    


    

    <div className="boton-arriba">
      <p className="boton">Volver arriba</p>
    </div>
</main>
    )
}
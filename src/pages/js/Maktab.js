import React from 'react';
import Navbar from './Navbar1';
import style from '../css/Maktab.module.css';

export default function Maktab() {
    return (
        <div>
        <Navbar />

        <div class="container-fluid">
       <div className={style.title}>
          <h1>Title</h1>
          <span>paragraph</span>
       </div>
  <div class="row">
    <div class="col-md-4 mt-5">
      <div class="card text-center">
        <img class="card-img-top" src="https://picsum.photos/1900/1080?image=235" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p>Lorem ipsum dolor sit</p>
          <hr />
          <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-map"></i> Maps
            </a>
          </p>
          <div class="collapse" id="collapseExample1">
            <div class="card card-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width="100%" height="200" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <div class="row">
            <div class="col">
              <a href="https://web.telegram.org"><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div class="col">
              <a href="mailto:test@test.com"><i class="fas fa-envelope"></i></a>
            </div>
            <div class="col">
              <a href="tel:+123456789"><i class="fas fa-phone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-5">
      <div class="card text-center">
        <img class="card-img-top" src="https://picsum.photos/1900/1080?image=235" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p>Lorem ipsum dolor sit</p>
          <hr />
          <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-map"></i> Maps
            </a>
          </p>
          <div class="collapse" id="collapseExample2">
            <div class="card card-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width="100%" height="200" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <div class="row">
            <div class="col">
              <a href="https://web.telegram.org"><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div class="col">
              <a href="mailto:test@test.com"><i class="fas fa-envelope"></i></a>
            </div>
            <div class="col">
              <a href="tel:+123456789"><i class="fas fa-phone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-5">
      <div class="card text-center">
        <img class="card-img-top" src="https://picsum.photos/1900/1080?image=235" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p>Lorem ipsum dolor sit</p>
          <hr />
          <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-map"></i> Maps
            </a>
          </p>
          <div class="collapse" id="collapseExample3">
            <div class="card card-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width="100%" height="200" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <div class="row">
            <div class="col">
              <a href="https://web.telegram.org"><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div class="col">
              <a href="mailto:test@test.com"><i class="fas fa-envelope"></i></a>
            </div>
            <div class="col">
              <a href="tel:+123456789"><i class="fas fa-phone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-5">
      <div class="card text-center">
        <img class="card-img-top" src="https://picsum.photos/1900/1080?image=235" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p>Lorem ipsum dolor sit</p>
          <hr />
          <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-map"></i> Maps
            </a>
          </p>
          <div class="collapse" id="collapseExample4">
            <div class="card card-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width="100%" height="200" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <div class="row">
            <div class="col">
              <a href="https://web.telegram.org"><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div class="col">
              <a href="mailto:test@test.com"><i class="fas fa-envelope"></i></a>
            </div>
            <div class="col">
              <a href="tel:+123456789"><i class="fas fa-phone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-5">
      <div class="card text-center">
        <img class="card-img-top" src="https://picsum.photos/1900/1080?image=235" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p>Lorem ipsum dolor sit</p>
          <hr />
          <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-map"></i> Maps
            </a>
          </p>
          <div class="collapse" id="collapseExample5">
            <div class="card card-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width="100%" height="200" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <div class="row">
            <div class="col">
              <a href="https://web.telegram.org"><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div class="col">
              <a href="mailto:test@test.com"><i class="fas fa-envelope"></i></a>
            </div>
            <div class="col">
              <a href="tel:+123456789"><i class="fas fa-phone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 mt-5">
      <div class="card text-center">
        <img class="card-img-top" src="https://picsum.photos/1900/1080?image=235" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p>Lorem ipsum dolor sit</p>
          <hr />
          <p>
            <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample">
              <i class="fas fa-map"></i> Maps
            </a>
          </p>
          <div class="collapse" id="collapseExample6">
            <div class="card card-body">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width="100%" height="200" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="card-footer text-muted">
          <div class="row">
            <div class="col">
              <a href="https://web.telegram.org"><i class="fab fa-telegram-plane"></i></a>
            </div>
            <div class="col">
              <a href="mailto:test@test.com"><i class="fas fa-envelope"></i></a>
            </div>
            <div class="col">
              <a href="tel:+123456789"><i class="fas fa-phone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}

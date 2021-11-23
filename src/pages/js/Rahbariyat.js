import React, { Component } from 'react';
import style from '../css/Rahbariyat.module.css';
import Navbar from './Navbar1';


export default class Rahbariyat extends Component {
    render() {
        return (
            <div>
                <Navbar />


    <div class="container">
        <div className={style.main_body}>
            <div className={style.gutters_sm} class="row">
                <div class="col-md-4 mb-3">
                <div className={style.card}>
                    <div className={style.card_body}>
                    <div class="d-flex flex-column align-items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150" />
                        <div class="mt-3">
                        <h4>John Doe</h4>
                        <p class="text-secondary mb-1">Full Stack Developer</p>
                        <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                        <a href="https://t.me/lmellll" class="btn btn-primary" style={{marginRight:'5px'}}>Obuna</a>
                        <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-primary" style={{marginLeft:'5px'}}>Xabar</button>
           
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <div class="column" id="main">
          <h2>Xabar yuborish</h2>
          <form>
            <div class="form-group">
              <label for="exampleInputName">Name</label>
              <input type="name" class="form-control" id="exampleInputName" placeholder="Name" />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Xabar</label>
              <textarea type="text" class="form-control" id="exampleInputPassword1" placeholder="Xabar"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
                        
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div className={style.card} class="mt-3">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><i style={{marginRight: '8px',fontSize:'22px',color:'red'}} class="fab fa-youtube"></i>Youtube</h6>
                        <span class="text-secondary">https://youtube.com</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                        <span class="text-secondary">bootdey</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                        <span class="text-secondary">@bootdey</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                        <span class="text-secondary">bootdey</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                        <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>Facebook</h6>
                        <span class="text-secondary">bootdey</span>
                    </li>
                    </ul>
                </div>
                </div>
                <div class="col-md-8">
                <div className={style.card, style.mb_3, style.bg_gray_300}>
                    <div className={style.card_body}>
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        Kenneth Valdez
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        fip@jukmuh.al
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Phone</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        (239) 816-9029
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Mobile</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        (320) 380-4539
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-sm-3">
                        <h6 class="mb-0">Ish joyi</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                        Bay Area, San Francisco, CA
                        </div>
                    </div>
                    <hr />
                    </div>
                </div>

                <div className={style.gutters_sm} class="row" style={{marginTop: '30px'}}>
                    <div className={style.mb_3} class="col-sm-6">
                    <div className={style.card, style.h_100, style.bg_gray_300}>
                        <div className={style.card_body}>
                            <h5>Tahsil olgan joylari</h5>
                            <p>lorem ipsum dolor sit <pre>10.05.2017</pre></p>
                            <p>lorem ipsum dolor sit <pre>10.05.2017</pre></p>
                            <p>lorem ipsum dolor sit <pre>10.05.2017</pre></p>
                        </div>
                    </div>
                    </div>
                    <div className={style.mb_3} class="col-sm-6">
                    <div className={style.card, style.h_100, style.bg_gray_300}>
                        <div className={style.card_body}>
                            <h5>Ishlagan joylari</h5>
                            <p>lorem ipsum dolor sit <pre>10.05.2017</pre></p>
                            <p>lorem ipsum dolor sit <pre>10.05.2017</pre></p>
                            <p>lorem ipsum dolor sit <pre>10.05.2017</pre></p>
                        </div>
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
}

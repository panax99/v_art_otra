function Register(props:Article){
    return(<>
        <div className="container">
        <div className="card shadow-lg o-hidden border-0 my-5" style="background:rgb(255, 255, 255)" >
            <div className="card-body p-0">
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-flex">
                        <div className="flex-grow-1 bg-register-image" style="background-image: url(&quot;assets/img/dogs/pavel-nekoranec-I__QKQLMIKs-unsplash.jpg&quot;);"></div>
                    </div>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h4 className="text-dark mb-4">S'inscrire</h4>
                            </div>
                            <form className="user">
                                <div className="row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" id="Idnom" placeholder="Nom" name="nom"></div>
                                    <div className="col-sm-6"><input className="form-control form-control-user" type="text" id="Idprenom" placeholder="Prenom" name="prenom"></div>
                                </div>
                                <div className="mb-3"><input className="form-control form-control-user" type="email" id="IdEmail" aria-describedby="emailHelp" placeholder="Email" name="email"></div>
                                <div className="row mb-3">
                                    <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="password" id="Idmot" placeholder="Mot de passe" name="password"></div>
                                    <div className="col-sm-6"><input className="form-control form-control-user" type="password" id="Idconf" placeholder="Confirmation" name="confirmation"></div>
                                </div><button className="btn btn-primary d-block btn-user w-100 bt_confrirmer" type="submit">Confirmer</button>
                                <hr/>
                                    <a className="btn btn-primary d-block btn-google btn-user w-100 mb-2 bt_enregistrer" role="button">
                                        <i className="fab fa-google"></i>&nbsp; Enregistre avec Google
                                    </a>
                                    <a className="btn btn-primary d-block btn-facebook btn-user w-100 bt_enregistrer" role="button">
                                        <i className="fab fa-facebook-f"></i>&nbsp; Enregistre avec Facebook
                                    </a>
                                <hr/>
                            </form>
                            <div className="text-center"><a className="small" href="forgot-password.html">mot de passe oublié?</a></div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>)
}

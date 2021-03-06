import './css/style.css'

function Form() {
    return(
        <section class="module">
        <div class="container">
            <div class="row">
                <div class="col-sm-5 col-sm-offset-1 mb-sm-40">
                    <h4 class="font-alt">Login</h4>
                    <hr class="divider-w mb-10" />
                    <form class="form">
                        <div class="form-group">
                            <input class="form-control" id="username" type="text" name="username" placeholder="Username" />
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="password" type="password" name="password" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <button class="btn btn-round btn-b">Login</button>
                        </div>
                        <div class="form-group"><a href="">Forgot Password?</a></div>
                    </form>
                </div>
                <div class="col-sm-5">
                    <h4 class="font-alt">Register</h4>
                    <hr class="divider-w mb-10" />
                    <form class="form">
                        <div class="form-group">
                            <input class="form-control" id="E-mail" type="text" name="email" placeholder="Email" />
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="username" type="text" name="username" placeholder="Username" />
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="password" type="password" name="password" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="re-password" type="password" name="re-password" placeholder="Re-enter Password" />
                        </div>
                        <div class="form-group">
                            <button class="btn btn-block btn-round btn-b">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
   
}

export default Form


const Register = (): JSX.Element => {
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div className="card p-3" style={{ width: "35rem" }}>
                <div className="card-body">
                    <form>
                        <fieldset>
                            <h1 className="text-center">Register</h1>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                        </fieldset>
                        <div className="mt-5 d-flex justify-content-center">
                            <button className="btn btn-primary  px-5">Submit</button>
                            <button className="btn btn-outline-primary px-5 mx-3">Log In </button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
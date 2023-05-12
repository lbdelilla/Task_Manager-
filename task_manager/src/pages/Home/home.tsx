
export const Home = (): JSX.Element => {

    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
            <div>
                <div className="d-flex flex-column text-center">
                    <h1 style={{ fontSize: "7rem" }}>Tasky</h1>
                    <h3> Your weekly planner </h3>
                </div>
                <div className="d-flex flex-row justify-content-center mt-3">
                   
                        <button className="btn btn-primary mx-3"> Log In </button>
                
                   
                        <button className="btn btn-outline-primary"> Register </button>
                
                </div>
            </div>
        </div>
    )
}
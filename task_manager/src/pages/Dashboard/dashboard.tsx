import Notes from './Components/notes';
import ToDoList from './Components/todolist';


const Dashboard = (): JSX.Element => {
    return (
        <section>
            <div className='row'>
                <div className="col-4">
                    <ToDoList />
                </div>
                <div className="col-4">
                    <Notes />
                </div>
            </div>
        </section>
    )
}

export default Dashboard
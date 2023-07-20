// import './mtecCapstone/client/src/App.css';
import'../styles/main.css';
import Header from './Header.jsx';
import SideBar from './SideBar.jsx';


export default function StudentDash() {
    return (
<>
    <basePage class="container">
        <SideBar/>
        <div className="studentMain">
            <Header title="Dashboard" className="studentDashboard"/>
            <div className="courseTable">
                <table>
                    <tr>
                        <th>Course</th>
                        <th>Description</th>
                        <th>Time</th>
                        <th>Credit Hours</th>
                    </tr>
                    <tr>
                        <th>Rolling your own</th>
                        <th>"Description"</th>
                        <th>3 pm</th>
                        <th>3</th>
                    </tr>
                    <tr>
                        <th>Rolling your own</th>
                        <th>"Description"</th>
                        <th>3 pm</th>
                        <th>3</th>
                    </tr>
                    <tr>
                        <th>Rolling your own</th>
                        <th>"Description"</th>
                        <th>3 pm</th>
                        <th>3</th>
                    </tr>
                    <tr>
                        <th>Rolling your own</th>
                        <th>"Description"</th>
                        <th>3 pm</th>
                        <th>3</th>
                    </tr>
                    <tr>
                        <th>Rolling your own</th>
                        <th>"Description"</th>
                        <th>3 pm</th>
                        <th>3</th>
                    </tr>
                </table>
            </div>
        </div>
    </basePage>
</>

    )
};

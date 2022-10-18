import * as React from "react"
import { Routes, Route } from "react-router-dom"
import App from "../../ui/App"
import HeaderMain from "../../ui/HeaderMain";
import Advertisement from "../../ui/pages/Advertisement";
import Assessments from "../../ui/pages/Assessments";
import CandidateList from "../../ui/pages/CandidateList";
import Dashboard from "../../ui/pages/Dashboard";
import Documents from "../../ui/pages/Documents";
import Email from "../../ui/pages/Email";
import Feedback from "../../ui/pages/Feedback";
import Interviews from "../../ui/pages/Interviews";
import JobList from "../../ui/pages/JobList";
import Login from "../../ui/pages/Login";
import NotFound from "../../ui/pages/Notfound";
import Refferals from "../../ui/pages/Refferals";
import Reports from "../../ui/pages/Reports";
import Signup from "../../ui/pages/Signup";
import Tasks from "../../ui/pages/Tasks";
import SidebarMain from "../../ui/SidebarMain";
import { Outlet } from "react-router-dom";
const SidebarTopNavLayout = () => (
	<>
		<HeaderMain/>
		<SidebarMain/>
		<Outlet />
	</>
  );


function Home() {
	return (
		<div className="routes">
			<Routes>
				{/* <Route element={<SidebarTopNavLayout/>}> */}
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/joblist" element={<JobList />} />
					<Route path="/candidatelist" element={<CandidateList />} />
					<Route path="/email" element={<Email />} />
					<Route path="/interviews" element={<Interviews />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/refferals" element={<Refferals />} />
					<Route path="/assessments" element={<Assessments />} />
					<Route path="/advertisements" element={<Advertisement />} />
					<Route path="/tasks" element={<Tasks />} />
					<Route path="/documents" element={<Documents />} />
					<Route path="/feedback" element={<Feedback />} />
					<Route path="*" element={<NotFound />} />
				{/* </Route> */}

					<Route path="*" element={<NotFound />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
			</Routes>
			
		</div>
	)
}

export default Home

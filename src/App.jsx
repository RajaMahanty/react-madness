import Greetings from "./components/Greetings";
import UserStatus from "./components/UserStatus";
import Weather from "./components/Weather";

const App = () => {
	return (
		<main>
			<Weather tempreture={26} />
			<UserStatus loggedIn={true} isAdmin={true} />
			<Greetings timeOfDay={"morning"} />
		</main>
	);
};

export default App;

import axios from "axios"
import { useState } from "react"


function App() {

    const [degree, setdegree] = useState("")
    const [city, setcity] = useState("")
    const [weatherstatus, setweatherstatus] = useState("")

    const [searchvalue, setsearchvalue] = useState("")
    const [errormsg, seterrormsg] = useState("")

    function handleinput(event) {
        setsearchvalue(event.target.value)
        // if (errormsg == errormsg) {
        //     errormsg.remove()
        // }
    }

    function getData() {
        var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=5545ac7a84da9a1fed446b396547e80c`)

        weather.then(
            (dalta) => {
                //console.log(dalta.data.name)
                setdegree(dalta.data.main.temp)
                setcity(dalta.data.name)
                setweatherstatus(dalta.data.weather[0].main)
                //console.log(dalta.data.weather[0].main)
            }
        ).catch(
            () => {
                seterrormsg(<p className="errortxt text-red-600">Please Enter the correct city name!</p>)
            }
        )

    }

    return (
        <div className="flex flex-row justify-center h-[100vh] items-center" >
            <div style={{ backgroundImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }} className="p-2 rounded-md shadow">
                <h2 className="font-medium">Hey! ⛅</h2>
                <p className="text-xs">Do you want to know the weather report :)</p>
                <input onChange={handleinput} type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="city name?"></input><br></br>
                <button className="bg-black text-white rounded-lg mt-2 p-2 text-xs" onClick={getData}>Get Report ⚡</button>
                <p className="text-xs mt-2">Degree: {degree} | City: {city} | Weather: {weatherstatus}</p>
                {/* {errormsg} */}
            </div>
        </div>)
}

export default App
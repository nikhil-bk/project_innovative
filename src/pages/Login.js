import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import { LOGIN_URL } from '../config'
import Footer from '../components/Footer'
import { DataContext } from "../context/GlobalContext"
import ".././global.css"



function Login() {
  const loadingRef = useRef(null)
  let navigate = useNavigate()
  const state = useContext(DataContext);
  const [isLoading,setLoading]=useState(false)
  const [isLogin, setIsLogin] = state.isLogin;

  const [credentials, setCredentials] = useState({ email: "", password: "" })

  function handleChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });

  }
  function handleLoginSubmit() {

    if (credentials.email === "" || credentials.password === "") {
      alert("Email or Password can't be empty")
    }
    else {
      // loadingRef.current.continuousStart();
      setLoading(true)
      axios.post(LOGIN_URL, credentials)
        .then((res) => {
     
          localStorage.setItem('tokenStore', res.data.token);
          setIsLogin(true);
          setLoading(false)
         

          navigate("/admin");
        }).catch(err => {
          alert("Incorrect email or password!")
          console.log(err)
          setLoading(false)
          alert(err?.response?.data?.detail)
      

        })
    }
  }


  return (
    <div >
      {/* <LoadingBar color="#0d6efd" ref={loadingRef} /> */}
      <div className="container mt-5 p-5">
        <div className="row mt-5 d-flex justify-content-center align-items-center">
          <div className="col col-lg-4 col-md-8 col-xs-12">
            <div className="" style={{ border: "2px solid #f47629" }}></div>
            <div className="card shadow">
              <div className="card-body">
                <div className="mb-3 mt-md-4">

                  <h2 className="fw-bold mb-2 text-uppercase ">
                    IES Squad

                  </h2>



                  {/* <p className="card-subtitle text-muted">Powered by CosBE</p> */}
                  <br />

                  <p className=" mb-3"><span style={{color:'red'}}>Restricted Access</span>
                  <br/>
                  <span>Admin Only</span>
                  </p>
                  <div className="mb-3">
                    <form>
                      <div className="mb-3 from-group">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          value={credentials.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-3 from-group">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={credentials.password}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="d-grid">
                        <button
                          type="button"
                          className="btn fw-bold"
                          disabled={isLoading}
                          style={{ backgroundColor: "#f47629", color: "white", }}

                          onClick={handleLoginSubmit}
                        >
                         {isLoading?"Submitting":"Login"}
                        </button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </div>
  )
}

export default Login

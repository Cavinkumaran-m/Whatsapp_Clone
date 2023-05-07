import React, { useState } from "react";

import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import "./Auth.css";

import { signup, login} from '../../actions/auth'

const Auth = () => {
	const [isSIgnup, setIsSignup] = useState(false);
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSwitch = () => {
		setIsSignup(!isSIgnup);
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		if(!email && !password){
			alert("Enter email and password !")
			return
		}
		if(isSIgnup){
			if(!name){
				alert("Enter a name to continue")
				return
			}
			dispatch(signup({name, email, password}, navigate))
		}else{
			dispatch(login({email, password}, navigate))
		}
	}

	return (
		<section className="auth-section">
      { isSIgnup }
			<div className="auth-container-2">
                <form onSubmit={handleSubmit}>
					{isSIgnup && (
                        <label htmlFor="name">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
							    <h4>UserName</h4>
                            </div>
							<input
								type="text"
								name="name"
								id="name"
								onChange={(e) => {setName(e.target.value)}}
							/>
						</label>
					)}
                    <label htmlFor="email">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
						    <h4>Email</h4>
                        </div>
						<input
							type="email"
							name="email"
							id="email"
							onChange={(e) => {setEmail(e.target.value)}}
						/>
					</label>
					<label htmlFor="password">
						<div style={{display: "flex", justifyContent: "space-between"}}>
							<h4>Password</h4>
						</div>
						<input
							type="password"
							name="password"
							id="password"
							onChange={(e) => {setPassword(e.target.value)}}
						/>
					</label>
					<button
						type="submit"
						className="auth-btn"
					>
						{isSIgnup ? "Sign up" : "Login"}
					</button>
					{isSIgnup && (
						<p style={{ color: "#666767", fontSize: "13px" }}>
							By clicking “Sign up”, you agree to our
							<span style={{ color: "#007ac6" }}>
								{" "}
								terms of <br />
								service
							</span>
							,
							<span style={{ color: "#007ac6" }}>
								{" "}
								privacy policy
							</span>{" "}
							and
							<span style={{ color: "#007ac6" }}>
								{" "}
								cookie policy
							</span>
						</p>
					)}
				</form>
				<p>
					{isSIgnup
						? "already have an account ?"
						: "Don't have an account ?"}
					<button
						type="button"
						className="handle-switch-btn"
						onClick={handleSwitch}
					>
						{isSIgnup ? "Login" : "Sign Up"}
					</button>
				</p>
			</div>
		</section>
	);
};

export default Auth;
import React from 'react';
import Auth from 'layouts/Auth.js';
import LoginForm from './loginForm';

export default function Login() {
	return (
		<div className="container h-full mx-auto">
			<div className="flex items-center content-center justify-center h-full">
				<div className="w-full px-4 lg:w-4/12">
					<div className="relative flex flex-col w-full min-w-0 mb-6 break-words rounded-lg shadow-lg bg-blueGray-200">
						<div className="px-6 py-6 mb-0 rounded-t">
							<div className="mb-3 text-center">
								<h6 className="text-sm font-bold text-blueGray-500">
                  Sign in on Laurus
								</h6>
							</div>
						</div>
						<div className="flex-auto px-4 py-10 pt-0 lg:px-10">
							<LoginForm />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Login.layout = Auth;

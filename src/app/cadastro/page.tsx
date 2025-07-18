export default function cadastro() {
	return (
		<div className="">
			<h1>CADASTRO</h1>
			<div className="bg-red-500 w-220 h-120 flex justify-end overflow-hidden">
				<div className="h-full z-0">{/* <img src="./paisagem.jpg" className="h-full scale-125 object-cover" /> */}</div>

				<div className=" bg-white w-150 h-120 rounded-l-xl relative flex z-1 justify-center items-center">
					<div>
						<h2>Create Your Free Account</h2>
						<label htmlFor="full name" className="mt-3.5 ml-2.5 block mb-1 text-sm font-medium text-gray-800">
							Full name
						</label>
						<input className="bg-gray-200 border-gray-400 h-8 w-80 rounded-4xl" type="text" />
						<label htmlFor="Email" className="mt-3.5 ml-2.5 block mb-1 text-sm font-medium text-gray-800">
							E-mail
						</label>
						<input className="bg-gray-200 border-gray-400 h-8 w-80 rounded-4xl" type="text" />
						<label htmlFor="Password" className="mt-3.5 ml-2.5 block mb-1 text-sm font-medium text-gray-800">
							Password
						</label>
						<input className="bg-gray-200 border-gray-400 h-8 w-80 rounded-4xl" type="password" />
						<input type="button" className=" mt-3.5 block bg-amber-300 w-50 h-7 rounded-2xl relative z-1" />
						<p className="text-xs mt-3.5">
							Already Have an Account? <a href="../../../login">Log in</a>
						</p>

						<div className="gap-5 flex mt-3.5 justify-center">
							<div className="bg-red-600 h-10 w-10"></div>
							<div className="bg-red-950 h-10 w-10"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

<script>
	import { googleAuthprovider } from "@/config/firebase-config";
  import { userAuth } from "@/store/auth";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

	
  function signInWithGoogle() {
		
		const auth = getAuth();

    signInWithPopup(auth, googleAuthprovider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        const user = result.user;
				userAuth.set(user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }


</script>

<div class="flex items-center justify-center mt-6">
		<div
			class="max-w-sm rounded-lg bg-white p-6 space-y-6 border border-gray-300 "
		>
			<div class="space-y-2 text-center">
				<h1 class="text-3xl font-bold">Iniciar sesion</h1>
			</div>
			<div class="space-y-4">
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="email"
					>
						Correo electrónico
					</label>
					<input
						type="email"
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						id="email"
						placeholder="Correo electrónico"
						required=""
					/>
				</div>
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="password"
					>
						Contraseña
					</label>
					<input
						type="password"
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						id="password"
						placeholder="contraseña"
						required=""
					/>
				</div>
				<div class="flex items-center space-x-2">
					<hr class="flex-grow border-zinc-200 dark:border-zinc-700" />
					<span class="text-zinc-400 dark:text-zinc-300 text-sm"> O</span>
					<hr class="flex-grow border-zinc-200 dark:border-zinc-700" />
				</div>
				<button
          on:click={signInWithGoogle}
					class="inline-flex items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full bg-[#4285F4] text-white"
				>
					<div class="flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"
						>
							<circle cx="12" cy="12" r="10"></circle>
							<circle cx="12" cy="12" r="4"></circle>
							<line x1="21.17" x2="12" y1="8" y2="8"></line>
							<line x1="3.95" x2="8.54" y1="6.06" y2="14"></line>
							<line x1="10.88" x2="15.46" y1="21.94" y2="14"></line>
						</svg>
						 Iniciar sesion con Google
					</div>
				</button>
			</div>
		</div>
	</div>
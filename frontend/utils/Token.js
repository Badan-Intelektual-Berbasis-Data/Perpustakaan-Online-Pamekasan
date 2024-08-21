export async function getCsrfToken() {

    await fetch(`${import.meta.env.VITE_BASE_API_URL}/users/get_csrf/get_token/`)
        .then(res => res.json())
        .then(token => localStorage.setItem("csrftoken", token["csrftoken"])) 
   
}
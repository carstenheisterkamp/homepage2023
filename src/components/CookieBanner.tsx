import { useSetCookies } from "../stores/uiStore"

export default function CookieBanner() {

    const setCookies = useSetCookies()

    const acceptCookies = () => {
        setCookies(true)
    } 
    const declineCookies = () => {
        setCookies(false)
    } 

    return (
        <div className="w-[600px] h-52 p-8 fixed bottom-0 left-0 backdrop-blur-lg z-[1000]">
            <h1 className="mb-4 text-xl">Sounds and Cookies!</h1>
            <p>This page uses sounds and cookies to enhance your user experience. By using the website you agree to the use of cookies</p>
            <button 
                className="m-4"
                onClick={acceptCookies}
            >
                Accept    
            </button> 
            <button 
                onClick={declineCookies}
            >
                Decline
            </button>
        </div>
    )
}

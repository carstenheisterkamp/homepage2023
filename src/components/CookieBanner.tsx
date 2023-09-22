export default function CookieBanner() {

    const acceptCookies = () => {} 
    const declineCookies = () => {} 
    return (
        <div className="w-full h-12 fixed top-0 left-0">
            <p>This page uses cookies to enhance your user experience. By using the website you agree to the use of cookies</p>
            <button 
                onClick={acceptCookies}>Accept    
            </button> 
            <button 
                onClick={declineCookies}>Decline
            </button>
        </div>
    )
}
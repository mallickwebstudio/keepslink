import Script from "next/script"

export default function Analytics() {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6RYPNW3TLC" />
            <Script id="google-analytics">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    
                    gtag('config', 'G-6RYPNW3TLC');
                `}
            </Script>
        </>
    )
}

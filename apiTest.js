const apiURL = 'https://quote-generator-api-7gw0.onrender.com/'

// fetchQuote
async function fetchQuote(url) {
    const config = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }

    try {
        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`HTTP ERROR! Status: ${res.status}`)
        }
        const quote = await res.json()
        return quote
    } catch (err) {
        console.error('Error fetching data:', error)
    }
}

fetchQuote(apiURL).then((res) => console.log(res))

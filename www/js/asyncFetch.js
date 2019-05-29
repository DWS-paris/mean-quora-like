const asyncFetch =  ( url, type = 'GET', data = undefined ) => {

    return new Promise( async (resolve, reject) => {
        if( type === 'GET' ){
            // Define request
            const response = await fetch(url);
            const jsonResponse = await response.json();

            // Check response
            if( response.ok )resolve(jsonResponse)
            else reject(jsonResponse)
        }
        
        else if( type === 'POST' ){
            // Define request
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })

            const jsonResponse = await response.json();

            // Check response
            if( response.ok )resolve(jsonResponse)
            else reject(jsonResponse)
        }
    })
}
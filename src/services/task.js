export const getTasks = () => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_API_URL}/operaciones/validacionFacial`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        }).then(res => res.json()
        ).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}

export const saveTask = () => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_API_URL}/operaciones/validacionFacial`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        }).then(res => 
             res.json()
        ).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}

export const updateTask = () => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_API_URL}/operaciones/validacionFacial`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        }).then(res => 
             res.json()
        ).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}

export const deleteTask = () => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_API_URL}/operaciones/validacionFacial`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        }).then(res => 
             res.json()
        ).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}
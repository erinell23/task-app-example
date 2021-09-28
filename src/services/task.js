export const getTasks = () => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/task/', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
        }).then(res => {
            if (!res.ok) {
                reject("Error");
            }
            return res.json()
        }).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}

export const saveTask = (task) => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/task/', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(task)
        }).then(res => {
            if (!res.ok) {
                reject("Error");
            }
            return res.json()
        }).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}

export const updateTask = (task) => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/task/update', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(task)
        }).then(res => {
            if (!res.ok) {
                reject("Error");
            }
            return res.json()
        }).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}

export const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:8080/task/?id=${id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        }).then(res => {
            if (!res.ok) {
                reject("Error");
            }
            return res.json()
        }).then(data => {
            resolve(data);
        }).catch(() => {
            reject("Error");
        });
    });
}
export function getSites() {
    var data = null;
    fetch("http://localhost:3333/sites")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                data = result;
            },
           
            (error) => {
                data = error
            }
        )

    return data;
}

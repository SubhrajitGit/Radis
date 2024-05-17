const client = require('./client')

async function init() {
    try {
        //Add new Member
        // for(let i=0 ; i<10 ; i++)
        // {
        //     const result = await client.sadd("logo",i);
        // }

        //Check value  Exist
        // const value=5;
        // const response = await client.sismember("logo",value)
        // console.log(response)

        //Size Of Sets
        const length = await client.scard("logo")
        console.log(length)
    } catch (error) {
        console.log(error)
    }
}

init();
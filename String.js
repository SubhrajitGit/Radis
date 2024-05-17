const client = require('./client');

async function init() {
    try {
        //Create String

        await client.set('msg:1',"Hello Rahul From VS CODE IO REDIS")

        //Expire A String
        
        await client.expire('msg:1',60);

        //Get Function
        const result = await client.get('msg:1')
        console.log(result)
    } catch (error) {
        console.error("error in init function",error)
    }finally{
        await client.quit();
    }
}

init();
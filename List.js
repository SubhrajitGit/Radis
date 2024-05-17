const client = require('./client')

async function init() {
    try {
        // Left Push
        for(let i=0 ; i<10 ; i++)
        {
            const result = await client.lpush("messages",i);
            console.log("Left Push Data -> ",result)
        }

        // Right Pop
        for(let i = 0 ; i<5 ; i++)
        {
            const data1 = await client.rpop("messages");
            console.log("Right Pop->",data1);
        }

        // Blocking Pop
        const data2 = await client.blpop("messages",10)
        console.log("Block level pop->",data2)

        // Reading List
        const length = await client.llen("messages")
        const data3 = await client.lrange("messages",0,length)
        console.log(data3)

        // Delete Messages
        const data4 = await client.del("messages")
        console.log(data4)


    } catch (error) {
       console.error(error) 
    }finally{
        await client.quit();
    }
}

init();
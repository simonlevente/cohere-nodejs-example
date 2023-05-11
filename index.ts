import * as express from 'express';
import * as dotenv from 'dotenv';
const cohere = require("cohere-ai");




// Get your environment variables
dotenv.config() 


// Express Server initialization
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});


app.get('/', async (req, res) => {
    try {
     
        (async () => {
          // cohere.init(process.env.COHERE_API_KEY);
          cohere.init(process.env.COHERE_API_KEY);

          
          const response = await cohere.classify({
            model: 'large',
            inputs: ["This item was better then expected", "This item broke after 3 weeks"],
            examples: [{"label": "positive", "text": "The order came 5 days early"}, {"label": "positive", "text": "The item exceeded my expectations"}, {"label": "positive", "text": "I ordered more for my friends"}, {"label": "positive", "text": "I would buy this again"}, {"label": "positive", "text": "I would recommend this to others"}, {"label": "negative", "text": "The package was damaged"}, {"label": "negative", "text": "The order is 5 days late"}, {"label": "negative", "text": "The order was incorrect"}, {"label": "negative", "text": "I want to return my item"}, {"label": "negative", "text": "The item\'s material feels low quality"}]
          });

          res.send(response)

          /*
          {
            statusCode: 200,
            body: {
              text: "Eldorado, the anointed monarchs of the ancient world and the ruling family were divided into three kingdoms, each of which was ruled by an individual leader."
            }
          }
          */
        })();
    
    } catch (error: any) {
        if (error.response) {
            console.error(error.response.status);
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
    }
});
/*import "axios"

const [loading, setLoading, rows, setRows] = useState([])

const loadSingleCardData = async() =>{
  try {
    await axios.get(GET_DESCRIPTION,
      {params:
        {
          id: cookies.get('id')//PARAMETERS// origin: cookies.get('origem'),
        }
      })
    .then(function (res) {
      //rows fazia parte da biblioteca do avião. Nesse caso, setCard pode ser interessante. setRows(iniciaAssentos(res));
    });
    setLoading(true);
  }catch(e){
    console.log(e);
  }
}

useEffect(() => {
  loadSeatMap()
},[]);

require("dotenv").config()

const {Client} = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_KEY })

const databaseId = process.env.NOTION_API_DATABASE;

const getDatabase = async () => {
  const response = await notion.databases.query({ database_id: databaseId });

  console.log(response);
};

export default getDatabase();*/
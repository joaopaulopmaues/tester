import "axios"

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
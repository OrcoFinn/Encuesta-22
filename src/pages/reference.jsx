import API from "../API";

const X =
  {
    "session": 1234,
    "poll": 1,
    "question": 69,
    "yes_no": true,
    "option": 2,
    "answer": "NICO GENIO MUNDIAL",
    "score": 2.4
}

function Reference() {

  return (
    <>
      <button onClick={() => API.from("poll").select().then(console.log)}>
       GET ALL DATA
      </button>

      <button onClick={() => API.from("poll").select().eq('poll', 1).then(console.log)}>
       GET My DATA
      </button>
  
    <button onClick={() => API.from("poll").insert(X).then()}>
      Post one answer
    </button>

    <button onClick={() => API.from("poll").insert([X,X,X]).then()}>
      Post multiple answers
    </button>
  </>

  )
}

export default Reference

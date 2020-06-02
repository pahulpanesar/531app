 var data = {
  "data": {
    "users": [
      {
        "id": 1,
        "name": "Pahul Panesar",
        "workouts": [
          {
            "type": "bench",
            "exercises": [
              {
                "name": "bench press",
                "sets": [
                  {
                    "name": "w",
                    "weight": 95,
                    "reps": 8
                  },
                  {
                    "name": "w",
                    "weight": 115,
                    "reps": 8
                  },
                  {
                    "name": "1",
                    "weight": 135,
                    "reps": 8
                  },
                  {
                    "name": "2",
                    "weight": 145,
                    "reps": 8
                  },
                  {
                    "name": "3",
                    "weight": 155,
                    "reps": 8
                  },
                  {
                    "name": "4",
                    "weight": 155,
                    "reps": 8
                  }
                ]
              },
              {
                "name": "dips",
                "sets": [
                  {
                    "name": "1",
                    "weight": 25,
                    "reps": 8
                  },
                  {
                    "name": "2",
                    "weight": 25,
                    "reps": 8
                  }
                ]
              }
            ]
          },
          {
            "type": "squat",
            "exercises": []
          }
        ]
      },
      {
        "id": 2,
        "name": "Test User",
        "workouts": []
      }
    ]
  }
}

export function getData() {
  return JSON.stringify(data);
}

export function setData(newData) {
  data = newData;
}
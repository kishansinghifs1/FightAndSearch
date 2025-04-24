/
  -src/
    index.js //server
    models/
    controllers/
    middlewares/
    services/
    utils/
    config/

  -tests/[later]

/


## DB DESIGN
  -Airplane Table
     -id
     -model
     -capacity
     -created_at
     -updated_at
  -Flight
    -id
    -departure_airport_id
    -arrival_airport_id
    -departure_time
    -arrival_time
    -departure_date
    -arrival_date
  -Airport
    -id
    -name 
    -city_id
    -address
  -City
    -id
    -name 
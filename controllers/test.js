const oracledb = require('oracledb');

try {
  oracledb.initOracleClient({libDir: 'C:/oracle/product/instantclient_19_10'});
} catch (err) {
  console.error('Whoops!');
  console.error(err);
  process.exit(1);
}

//Get users with pagination
exports.TestFuxn = async (req, res) => {
  let connection;
  try {
   connection = await oracledb.getConnection({ user: "ADMIN", password: "IgniteDB1234", connectionString: "igniteoracledb_high" });
    // console.log(connection)
    // Create a table
    // let result = await connection.execute(`CREATE TABLE myusers5 (id number, name varchar2(20), age number)`);
    // let result1 = await connection.execute(`INSERT INTO myusers("ID","name","AGE") VALUES (29, 'Bijay shah', 38)`);

    const sqlQuery = `INSERT INTO myusers VALUES (:1, :2, :3)`;

    binds = [ 
      [34, "debashish", 29 ], 
      [35, "sebastian", 39 ], 
      [36, "siddharth", 27 ], 
];
    
    result = await connection.executeMany(sqlQuery, binds, {});


    let result2 = await connection.execute(`SELECT * FROM myusers`);
    // await connection.close();
    res.send(result2);
  } catch (err) {
    console.error("err1",err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("err2",err);
      }
    }
  }
};
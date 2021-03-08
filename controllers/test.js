const oracledb = require('oracledb');


try {
  oracledb.initOracleClient({libDir: 'C:/Users/ravikant.sharma/Desktop/oracle/instantclient_19_10'});
} catch (err) {
  console.error('Whoops!');
  console.error(err);
  process.exit(1);
}


// oracledb.getConnection(
//   {
//     user          : "ADMIN",
//     password      : "IgniteDB1234",
//     connectString : "ORACLE_DEV_DB_TNS_NAME"
//   },
//   // connExecute
// );



//Get users with pagination
exports.TestFuxn = async (req, res) => {
  let connection;
  try {
    // oracledb.initOracleClient({libDir: 'C:/Users/ravikant.sharma/Desktop/oracle/instantclient_19_10'});
   connection = await oracledb.getConnection({ user: "ADMIN", password: "IgniteDB1234", connectionString: "igniteoracledb_high" });

    // Create a table
    // console.log(connection)
    // let result = await connection.execute(`CREATE TABLE myusers2 (id number, name varchar2(20), age number)`);
    let result = await connection.execute(`SELECT * FROM myusers2 where age = 23`);
    // let result = await connection.execute(`INSERT INTO myusers2(id,name,age) VALUES (1, 'Ravi', 23)`);
    res.send(result);

    // await connection.execute(`INSERT INTO myusers VALUES (1, 'Ravi, 9);`);
    // let result = await connection.execute(`SELECT * from myusers;`);

    // Insert some rows
    // const sql = `INSERT INTO nodetab VALUES (:1, :2)`;

    // const binds =
    //   [ [1, "First" ],
    //     [2, "Second" ],
    //     [3, "Third" ],
    //     [4, "Fourth" ],
    //     [5, "Fifth" ],
    //     [6, "Sixth" ],
    //     [7, "Seventh" ] ];

    // await connection.executeMany(sql, binds);

    // connection.commit();     // uncomment to make data persistent

    // Now query the rows back
    // res.send(result);
    // console.dir(result.rows, { depth: null });

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